import React from 'react';
import { Link } from 'react-router-dom';
export default function BrandMark({ light = false }) {
  return <Link className={`brand-mark${light ? ' brand-mark-light' : ''}`} to="/" aria-label="Pal Frozen Foods home">
    <span className="brand-mark-symbol"><img src="/pal-frozen-mark.png" alt="" /></span>
    <span className="brand-mark-wordmark">PAL FROZEN<small>FOODS</small></span>
  </Link>;
}
