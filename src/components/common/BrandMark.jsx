import React from 'react';
import { Link } from 'react-router-dom';
export default function BrandMark() {
  return <Link className="brand-mark" to="/" aria-label="Pal Frozen Foods home">
    <img className="brand-mark-logo" src="/pal-frozen-mark.png" alt="" />
  </Link>;
}
