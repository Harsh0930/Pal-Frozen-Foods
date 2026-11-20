import React from 'react';
import { motion } from 'framer-motion';
import BrandLogo from '../common/BrandLogo.jsx';
import { brandNames } from '../../context/BrandThemeContext.jsx';
export default function BrandToggle({ brand, onChange }) {
  return <div className="brand-toggle" role="group" aria-label="Choose a product brand">
    {['pal-fresh', 'frozzo'].map((value) => <button key={value} className={brand === value ? `selected ${value}` : ''} aria-pressed={brand === value} onClick={() => onChange(value)}>
      {brand === value && <motion.span className="toggle-pill" layoutId="activeBrandPill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
      <BrandLogo brand={value} alt="" className="toggle-brand-logo" /><span>{brandNames[value]}</span>
    </button>)}
  </div>;
}
