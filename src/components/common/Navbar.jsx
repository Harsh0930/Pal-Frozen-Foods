import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import BrandMark from './BrandMark.jsx';
import { useBrand } from '../../context/BrandThemeContext.jsx';
const navItems = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Gallery', '/gallery'],
  ['Get In Touch', '/contact'],
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setBrand } = useBrand();
  useEffect(() => {
    setMenuOpen(false);
    if (location.pathname === '/products') {
      const requested = new URLSearchParams(location.search).get('brand');
      if (requested === 'frozzo' || requested === 'pal-fresh') setBrand(requested);
    }
  }, [location.pathname, location.search, setBrand]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
    <div className="nav-wrap">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `${isActive ? 'active ' : ''}nav-link`}>
          {label}
        </NavLink>)}
      </nav>
      <Link to="/contact?tab=distributor" className="nav-cta">Become a partner <ArrowOutwardRounded aria-hidden="true" /></Link>
      <button className={`menu-toggle${menuOpen ? ' menu-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseRounded /> : <MenuRounded />}
      </button>
    </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(([label, path]) => <div key={path}>
          <NavLink to={path} onClick={() => setMenuOpen(false)}>{label}<ArrowOutwardRounded aria-hidden="true" /></NavLink>
        </div>)}
        <Link className="mobile-partner" to="/contact?tab=distributor" onClick={() => setMenuOpen(false)}>Become a partner <ArrowOutwardRounded aria-hidden="true" /></Link>
      </nav>}
  </header>;
}
