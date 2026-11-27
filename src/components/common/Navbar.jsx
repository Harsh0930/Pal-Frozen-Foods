import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import BrandMark from './BrandMark.jsx';
import { useBrand } from '../../context/BrandThemeContext.jsx';
const navItems = [
  ['Home', '/'],
  { label: 'About Us', href: '/about', items: [['The Pal Group', 'https://thepalgroup.in/']] },
  ['Pal Farms', '/pal-farms'],
  ['Products', '/products'],
  ['Gallery', '/gallery'],
  ['Get In Touch', '/contact'],
];

const isDropdown = (item) => !Array.isArray(item);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setBrand } = useBrand();
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
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
        {navItems.map((item) => isDropdown(item) ? <div key={item.label} className="nav-dropdown">
          <NavLink to={item.href || item.items[0][1]} className={({ isActive }) => `${isActive ? 'active ' : ''}nav-link nav-dropdown-trigger`} end>
            {item.label}
          </NavLink>
          <ul className="nav-dropdown-menu">
            {item.items.map(([label, path]) => {
              const isExternal = typeof path === 'string' && path.startsWith('http');
              return <li key={path}>
                {isExternal ? (
                  <a href={path} target="_blank" rel="noopener noreferrer" className="nav-dropdown-link">
                    {label}
                  </a>
                ) : (
                  <NavLink to={path} className={({ isActive }) => `${isActive ? 'active ' : ''}nav-dropdown-link`} end>
                    {label}
                  </NavLink>
                )}
              </li>;
            })}
          </ul>
        </div> : (() => {
          const [label, path] = item;
          return <NavLink key={path} to={path} className={({ isActive }) => `${isActive ? 'active ' : ''}nav-link`} end>
            {label}
          </NavLink>;
        })())}
      </nav>
      <Link to="/contact?tab=distributor" className="nav-cta">Become a partner <ArrowOutwardRounded aria-hidden="true" /></Link>
      <button className={`menu-toggle${menuOpen ? ' menu-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseRounded /> : <MenuRounded />}
      </button>
    </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => {
          if (isDropdown(item)) {
            const isExternal = typeof item.href === 'string' && item.href.startsWith('http');
            return (
              <div key={item.label} className={`mobile-dropdown ${openDropdown === item.label ? 'mobile-dropdown-open' : ''}`} onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
                {isExternal ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{item.label}</a>
                ) : (
                  <NavLink to={item.href || item.items[0][1]} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
                )}
                {openDropdown === item.label && (
                  <ul className="mobile-dropdown-menu">
                    {item.items.map(([label, path]) => {
                      const ext = typeof path === 'string' && path.startsWith('http');
                      return <li key={path}>
                        {ext ? (
                          <a href={path} target="_blank" rel="noopener noreferrer">{label}</a>
                        ) : (
                          <NavLink to={path} onClick={() => setMenuOpen(false)}>{label}</NavLink>
                        )}
                      </li>;
                    })}
                  </ul>
                )}
              </div>
            );
          }
          const [label, path] = item;
          return <div key={path}>
            <NavLink to={path} onClick={() => setMenuOpen(false)}>{label}<ArrowOutwardRounded aria-hidden="true" /></NavLink>
          </div>;
        })}
        <Link className="mobile-partner" to="/contact?tab=distributor" onClick={() => setMenuOpen(false)}>Become a partner <ArrowOutwardRounded aria-hidden="true" /></Link>
      </nav>}
  </header>;
}
