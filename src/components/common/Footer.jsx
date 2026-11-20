import React from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import BrandMark from './BrandMark.jsx';
import { useBrand } from '../../context/BrandThemeContext.jsx';
export default function Footer() {
  const { brand } = useBrand();
  return <footer className={`site-footer footer-${brand}`}>
    <div className="footer-main">
      <div className="footer-about">
        <BrandMark light />
        <p>Good food brings us together. We make it easier to bring a little more goodness to every table.</p>
        <div className="quality-badges"><span>FSSAI</span><span>ISO 22000</span><span>HACCP</span></div>
      </div>
      <div><h3>Our brands</h3>
        <Link className="footer-brand-link" to="/products?brand=pal-fresh"><span>Pal Fresh <ArrowOutwardRounded aria-hidden="true" /></span></Link>
        <Link className="footer-brand-link" to="/products?brand=frozzo"><span>Frozzo <ArrowOutwardRounded aria-hidden="true" /></span></Link>
      </div>
      <div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/gallery">Gallery</Link><Link to="/privacy-policy">Privacy policy</Link></div>
      <div><h3>Let’s grow together</h3><Link to="/contact?tab=faq">FAQs</Link><Link to="/contact?tab=distributor">Become a distributor</Link><Link to="/contact?tab=careers">Careers</Link><a href="mailto:hello@palfrozenfoods.com">hello@palfrozenfoods.com</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Pal Frozen Foods. Made for good days.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <KeyboardArrowUpRounded aria-hidden="true" /></button><span>Rooted in goodness. Ready when you are.</span></div>
  </footer>;
}
