import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { brandNames } from '../../context/BrandThemeContext.jsx';
import { productBrandInfo } from '../../data/products.js';
export default function ProductDialog({ product, onClose }) {
  const brandInfo = product ? productBrandInfo[product.brand] : null;
  return <Dialog open={Boolean(product)} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ className: `product-dialog product-dialog-${product?.brand || ''}` }}>
    {product && <DialogContent className="dialog-content">
      <IconButton className="dialog-close" aria-label="Close product details" onClick={onClose}>×</IconButton>
      <div className="dialog-photo"><img src={product.image} alt={product.name} /></div>
      <div className="dialog-copy">
        <span className="eyebrow">{brandInfo.title}</span>
        <h2>{product.name}</h2>
        <span className="dialog-range-label">About {brandNames[product.brand]}</span>
        <p>{brandInfo.description}</p>
        <a className="official-product-link" href={brandInfo.sourceUrl} target="_blank" rel="noreferrer">See all {brandNames[product.brand]} products ↗</a>
        <Button component={Link} to="/contact?tab=distributor" variant="contained" className="button-primary" onClick={onClose}>Bulk / distributor inquiry ↗</Button>
      </div>
    </DialogContent>}
  </Dialog>;
}
