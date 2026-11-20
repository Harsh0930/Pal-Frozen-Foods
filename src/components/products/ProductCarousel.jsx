import React, { useCallback, useEffect, useRef, useState } from 'react';
import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import { IconButton } from '@mui/material';
import { brandNames } from '../../context/BrandThemeContext.jsx';
import ProductTile from './ProductTile.jsx';

export default function ProductCarousel({ brand, products, onOpen }) {
  const trackRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanGoBack(track.scrollLeft > 1);
    setCanGoForward(maxScroll > 1 && track.scrollLeft < maxScroll - 1);
    setProgress(maxScroll > 1 ? track.scrollLeft / maxScroll : 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [products.length, updateScrollState]);

  const move = (direction) => {
    const track = trackRef.current;
    const slide = track?.querySelector('.product-carousel-slide');
    if (!track || !slide) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    track.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior,
    });
  };

  return <div className={`product-carousel product-carousel-${brand}`}>
    <div
      className="product-carousel-track"
      ref={trackRef}
      role="region"
      aria-label={`${brandNames[brand]} products`}
      aria-roledescription="carousel"
      tabIndex={0}
      onScroll={updateScrollState}
    >
      {products.map((product) => <div className="product-carousel-slide" key={product.id}>
        <ProductTile product={product} onOpen={onOpen} />
      </div>)}
    </div>
    <div className="product-carousel-footer">
      <div className="carousel-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="carousel-controls">
        <IconButton
          className="carousel-arrow"
          aria-label={`Previous ${brandNames[brand]} products`}
          disabled={!canGoBack}
          onClick={() => move(-1)}
        >
          <ArrowBackIosNewRounded />
        </IconButton>
        <IconButton
          className="carousel-arrow"
          aria-label={`Next ${brandNames[brand]} products`}
          disabled={!canGoForward}
          onClick={() => move(1)}
        >
          <ArrowForwardIosRounded />
        </IconButton>
      </div>
    </div>
  </div>;
}
