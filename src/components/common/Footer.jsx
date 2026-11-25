import React from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import BrandMark from './BrandMark.jsx';
import { useBrand } from '../../context/BrandThemeContext.jsx';

const brandSocials = [
  {
    name: 'Pal Fresh',
    links: [
      ['Instagram', 'https://www.instagram.com/palfrozen/', Instagram],
      ['Facebook', 'https://www.facebook.com/palfreshfoods', Facebook],
      ['LinkedIn', 'https://www.linkedin.com/company/pal-frozen-foods/', LinkedIn],
      ['WhatsApp', 'https://wa.me/919045599277', WhatsApp],
    ],
  },
  {
    name: 'Frozzo',
    links: [
      ['Instagram', 'https://www.instagram.com/frozzo_snacksandveggies/', Instagram],
      ['Facebook', 'https://www.facebook.com/FrozzoSnacks', Facebook],
      ['LinkedIn', 'https://www.linkedin.com/company/frozzo123', LinkedIn],
      ['WhatsApp', 'https://wa.me/919045599277', WhatsApp],
    ],
  },
];

export default function Footer() {
  const { brand } = useBrand();
  return <footer className={`site-footer footer-${brand}`}>
    <div className="footer-main">
      <div className="footer-about">
        <BrandMark />
        <p>Good food brings us together. We make it easier to bring a little more goodness to every table.</p>
        <div className="quality-badges"><span>FSSAI</span><span>ISO 22000</span><span>HACCP</span></div>
      </div>
      <div><h3>Our brands</h3>
        <Link className="footer-brand-link" to="/products?brand=pal-fresh"><span>Pal Fresh <ArrowOutwardRounded aria-hidden="true" /></span></Link>
        <Link className="footer-brand-link" to="/products?brand=frozzo"><span>Frozzo <ArrowOutwardRounded aria-hidden="true" /></span></Link>
        <div className="footer-socials" aria-label="Follow our brands">
          {brandSocials.map(({ name, links }) => <div className="footer-social-brand" key={name}>
            <span>{name}</span>
            <div className="footer-social-links">
              {links.map(([platform, url, Icon]) => <a key={platform} href={url} target="_blank" rel="noreferrer" aria-label={`${name} on ${platform}`} title={`${name} on ${platform}`}><Icon aria-hidden="true" /></a>)}
            </div>
          </div>)}
        </div>
      </div>
      <div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/gallery">Gallery</Link><Link to="/privacy-policy">Privacy policy</Link></div>
      <div><h3>Let’s grow together</h3><Link to="/contact?tab=faq">FAQs</Link><Link to="/contact?tab=distributor">Become a distributor</Link><Link to="/contact?tab=careers">Careers</Link><a href="mailto:marketing@smpalgroup.com">marketing@smpalgroup.com</a><a href="tel:+919045599277">+91 9045599277</a><address className="footer-address">Palam City, Devalchaur,<br />Rampur Road, Haldwani - <a href="https://www.wikidata.org/wiki/Q1499" target="_blank" rel="noreferrer">Uttarakhand</a> 263139</address></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Pal Frozen Foods. Made for good days.</span><button className="footer-back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><span>Back to top</span><i><KeyboardArrowUpRounded aria-hidden="true" /></i></button><span>Rooted in goodness. Ready when you are.</span></div>
  </footer>;
}
