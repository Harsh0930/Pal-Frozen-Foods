import React from 'react';
import frozzoLogo from '../../assets/brands/frozzo-logo.webp';
import palFreshLogo from '../../assets/brands/pal-fresh-logo.webp';
const logos = { 'pal-fresh': palFreshLogo, frozzo: frozzoLogo };
const labels = { 'pal-fresh': 'Pal Fresh', frozzo: 'Frozzo' };
export default function BrandLogo({ brand, className = '', alt }) {
  return <img className={`brand-logo ${className}`} src={logos[brand]} alt={alt ?? `${labels[brand]} logo`} />;
}
