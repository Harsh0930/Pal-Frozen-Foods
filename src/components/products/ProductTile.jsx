import React from 'react';
import { motion } from 'framer-motion';
export default function ProductTile({ product, onOpen, compact = false }) {
  const isFresh = product.brand === 'pal-fresh';
  return <motion.article className={`product-card ${isFresh ? 'fresh-card' : 'frozzo-card'}${compact ? ' compact-card' : ''}`} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
    <button className="product-image" onClick={() => onOpen(product)} aria-label={`View information about ${product.name}`}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <span className="image-arrow">↗</span>
    </button>
    <div className="product-info">
      <span className="product-category">{isFresh ? 'PAL FRESH' : 'FROZZO'}</span>
      <h3>{product.name}</h3>
      <button className="text-link" onClick={() => onOpen(product)}>About this range <span>↗</span></button>
    </div>
  </motion.article>;
}
