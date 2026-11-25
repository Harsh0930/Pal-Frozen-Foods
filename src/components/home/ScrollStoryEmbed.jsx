import React, { useEffect, useRef, useState } from 'react';

export default function ScrollStoryEmbed() {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '100px 0px' });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const frame = frameRef.current;
    if (!shouldLoad || !track || !frame) return undefined;

    let updateId = 0;
    const sendProgress = () => {
      updateId = 0;
      const scrollDistance = track.offsetHeight - window.innerHeight;
      const progress = scrollDistance > 0
        ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollDistance))
        : 0;

      frame.contentWindow?.postMessage({ type: 'pal-scroll-story-progress', progress }, window.location.origin);
    };
    const scheduleProgress = () => {
      if (!updateId) updateId = window.requestAnimationFrame(sendProgress);
    };

    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);
    frame.addEventListener('load', scheduleProgress);
    scheduleProgress();

    return () => {
      window.removeEventListener('scroll', scheduleProgress);
      window.removeEventListener('resize', scheduleProgress);
      frame.removeEventListener('load', scheduleProgress);
      if (updateId) window.cancelAnimationFrame(updateId);
    };
  }, [shouldLoad]);

  return <div className="scroll-story-embed-track" ref={trackRef}>
    {shouldLoad && <iframe
        className="scroll-story-embed"
        ref={frameRef}
        src="/scroll-story/index.html?embedded=1"
        title="Pal Frozen Foods from field to freezer scroll story"
        loading="lazy"
        scrolling="no"
      />}
  </div>;
}
