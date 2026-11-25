(() => {
  const FRAME_COUNT = 275;
  const BACKGROUND = '#d8d8c8';
  const BATCH_SIZE = 12;
  const frames = new Array(FRAME_COUNT);
  const track = document.querySelector('.story-track');
  const canvas = document.getElementById('storyCanvas');
  const context = canvas.getContext('2d', { alpha: false });
  const progressBar = document.getElementById('storyProgress');
  const progressTrack = document.querySelector('.story-progress');
  const frameStatus = document.getElementById('frameStatus');
  const nav = document.getElementById('storyNav');
  const chapters = [...document.querySelectorAll('.story-chapter')];
  const announcement = document.getElementById('chapterAnnouncement');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const failedFrames = [];
  const isEmbedded = new URLSearchParams(window.location.search).get('embedded') === '1';

  let canvasWidth = 0;
  let canvasHeight = 0;
  let currentFrame = 0;
  let targetFrame = 0;
  let animationId = 0;
  let activeChapter = -1;

  if (!context) {
    frameStatus.textContent = 'This browser could not start the canvas story.';
    throw new Error('Canvas 2D context is unavailable.');
  }

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const frameUrl = (index) => `./frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;
  const isReady = (image) => image && image.complete && image.naturalWidth > 0;

  if (isEmbedded) {
    track.classList.add('is-embedded');
    document.querySelector('.story-end').classList.add('is-embedded');
  }

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = Math.round(canvasWidth * pixelRatio);
    canvas.height = Math.round(canvasHeight * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    requestRender();
  }

  function nearestReadyFrame(index) {
    if (isReady(frames[index])) return frames[index];

    for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
      const before = index - distance;
      const after = index + distance;
      if (before >= 0 && isReady(frames[before])) return frames[before];
      if (after < FRAME_COUNT && isReady(frames[after])) return frames[after];
    }

    return null;
  }

  function drawFrame(index) {
    context.fillStyle = BACKGROUND;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    const image = nearestReadyFrame(index);
    if (!image) return;

    const scale = Math.max(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(image, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height);
  }

  function render() {
    animationId = 0;
    const difference = targetFrame - currentFrame;

    if (reducedMotion) {
      currentFrame = targetFrame;
    } else {
      currentFrame += difference * 0.14;
      if (Math.abs(difference) < 0.02) currentFrame = targetFrame;
    }

    drawFrame(Math.round(currentFrame));
    if (Math.abs(targetFrame - currentFrame) > 0.02) {
      animationId = window.requestAnimationFrame(render);
    }
  }

  function requestRender() {
    if (!animationId) animationId = window.requestAnimationFrame(render);
  }

  function updateChapter(progress) {
    const index = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
    if (index === activeChapter) return;

    chapters.forEach((chapter, chapterIndex) => {
      const isActive = chapterIndex === index;
      chapter.classList.toggle('is-active', isActive);
      chapter.setAttribute('aria-hidden', String(!isActive));
    });

    activeChapter = index;
    announcement.textContent = chapters[index].querySelector('h1, h2').textContent;
  }

  function updateProgress(progress) {
    progress = clamp(progress, 0, 1);
    targetFrame = progress * (FRAME_COUNT - 1);
    progressBar.style.transform = `scaleX(${progress})`;
    progressTrack.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    nav.classList.toggle('is-scrolled', progress > 0.005);
    updateChapter(progress);
    requestRender();
  }

  function updateScrollState() {
    const availableScroll = track.offsetHeight - window.innerHeight;
    const progress = availableScroll > 0
      ? clamp(-track.getBoundingClientRect().top / availableScroll, 0, 1)
      : 0;
    updateProgress(progress);
  }

  function receiveParentProgress(event) {
    if (event.origin !== window.location.origin || event.source !== window.parent) return;
    if (event.data?.type !== 'pal-scroll-story-progress' || typeof event.data.progress !== 'number') return;
    updateProgress(event.data.progress);
  }

  function loadFrame(index) {
    return new Promise((resolve) => {
      const image = new Image();
      frames[index] = image;
      image.decoding = 'async';
      image.addEventListener('load', () => {
        requestRender();
        resolve();
      }, { once: true });
      image.addEventListener('error', () => {
        failedFrames.push(index + 1);
        console.error(`Could not load scroll-story frame ${index + 1}: ${frameUrl(index)}`);
        resolve();
      }, { once: true });
      image.src = frameUrl(index);
    });
  }

  async function preloadFrames() {
    for (let start = 0; start < FRAME_COUNT; start += BATCH_SIZE) {
      const end = Math.min(start + BATCH_SIZE, FRAME_COUNT);
      await Promise.all(Array.from({ length: end - start }, (_, offset) => loadFrame(start + offset)));
      const loaded = end - failedFrames.length;
      frameStatus.textContent = `Preparing the story... ${loaded}/${FRAME_COUNT}`;
    }

    if (failedFrames.length > 0) {
      frameStatus.textContent = `${failedFrames.length} frame${failedFrames.length === 1 ? '' : 's'} could not load.`;
      return;
    }

    frameStatus.textContent = 'Story ready';
    window.setTimeout(() => frameStatus.classList.add('is-complete'), 900);
  }

  window.addEventListener('resize', resizeCanvas, { passive: true });
  if (isEmbedded) {
    window.addEventListener('message', receiveParentProgress);
  } else {
    window.addEventListener('scroll', updateScrollState, { passive: true });
  }
  resizeCanvas();
  if (!isEmbedded) updateScrollState();
  preloadFrames();
})();
