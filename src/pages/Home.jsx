import React, { useState } from 'react';
import { Button } from '@mui/material';
import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import AgricultureOutlined from '@mui/icons-material/AgricultureOutlined';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useBrand } from '../context/BrandThemeContext.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ProductCarousel from '../components/products/ProductCarousel.jsx';
import ProductDialog from '../components/products/ProductDialog.jsx';
import { products, productBrandInfo } from '../data/products.js';
import { imageUrl } from '../utils/imageUrl.js';
export default function Home() {
  const [activeHero, setActiveHero] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { setBrand } = useBrand();
  const explore = (brand) => {
    setBrand(brand);
    navigate(`/products?brand=${brand}`);
  };
  const palFreshProducts = products.filter((product) => product.brand === 'pal-fresh');
  const frozzoProducts = products.filter((product) => product.brand === 'frozzo');
  return <main className="home-page">
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><i /> GOODNESS, ON YOUR TIME</span>
        <h1>Freshness has<br />a <em>feeling.</em></h1>
        <p>From the first-picked vegetable to the last golden bite, we make good food fit the way you live.</p>
        <div className="hero-actions">
          <Button className="button-primary" variant="contained" onClick={() => explore('pal-fresh')}>Explore our brands <span>↗</span></Button>
          <Link className="underlined-link" to="/about">Our story <span>→</span></Link>
        </div>
        <div className="hero-footnote">Thoughtfully sourced. Wonderfully frozen.</div>
      </div>
      <div className={`hero-visual ${activeHero ? `hero-${activeHero}` : ''}`}>
        <button type="button" aria-label="Explore Pal Fresh products" className="hero-split fresh-split" onMouseEnter={() => setActiveHero('fresh')} onMouseLeave={() => setActiveHero(null)} onClick={() => explore('pal-fresh')}>
          <img src={imageUrl('photo-1540420773420-3366772f4999', 1300)} alt="A vibrant bowl of fresh vegetables" />
          <div className="hero-shade" />
          <span className="universe-index">01 / THE EVERYDAY GOOD</span>
          <div className="universe-label"><span>PAL FRESH</span><h2>Farm to<br />freezer.</h2><i>Explore the range <ArrowOutwardRounded aria-hidden="true" /></i></div>
        </button>
        <button type="button" aria-label="Explore Frozzo products" className="hero-split frozzo-split" onMouseEnter={() => setActiveHero('frozzo')} onMouseLeave={() => setActiveHero(null)} onClick={() => explore('frozzo')}>
          <img src={imageUrl('photo-1630384060421-cb20d0e0649d', 1300)} alt="Golden crispy fries served to share" />
          <div className="hero-shade" />
          <span className="universe-index">02 / THE CRAVE-WORTHY</span>
          <div className="universe-label"><span>FROZZO</span><h2>Make room<br />for more.</h2><i>Meet the crunch <ArrowOutwardRounded aria-hidden="true" /></i></div>
        </button>
      </div>
    </section>
    <section className="brand-intro section-pad">
      <SectionHeading eyebrow="TWO MOODS. ONE GOOD PROMISE." title={<>Meet your new<br />freezer <em>favourites.</em></>} copy="Every day calls for something different. Good thing we make both." />
      <div className="brand-cards">
        <article className="brand-card brand-card-fresh reveal">
          <img src={imageUrl('photo-1518843875459-f738682238a6', 1000)} alt="Freshly harvested peas and vegetables" loading="lazy" />
          <div className="brand-card-content"><span>FOR THE EVERYDAY GOOD</span><h3>A little more<br />green in your day.</h3><p>Farm-fresh vegetables, picked at their best and ready when you are.</p><button onClick={() => explore('pal-fresh')}>Discover Pal Fresh <b>↗</b></button></div>
          <span className="brand-card-index">01</span>
        </article>
        <article className="brand-card brand-card-frozzo reveal">
          <img src={imageUrl('photo-1573080496219-bb080dd4f877', 1000)} alt="A sharing platter of golden crispy potato snacks" loading="lazy" />
          <div className="brand-card-content"><span>FOR THE GOOD TIMES</span><h3>More crunch.<br />More together.</h3><p>Golden, crowd-pleasing bites that make any moment a little more fun.</p><button onClick={() => explore('frozzo')}>Get to know Frozzo <b>↗</b></button></div>
          <span className="brand-card-index">02</span>
        </article>
      </div>
    </section>
    <section className="cold-chain section-pad">
      <div className="cold-chain-head"><SectionHeading eyebrow="FROM OUR WORLD TO YOURS" title={<>Goodness takes<br />the <em>fast lane.</em></>} copy="We move with care, so every bite arrives just as nature intended." /><div className="cold-chain-note">The cold chain, our way</div></div>
      <div className="journey-line">
        {[['01', 'Grown with care', 'We partner with growers who know the land and respect every season.', <AgricultureOutlined />], ['02', 'Frozen at peak', 'Our IQF process locks in freshness at -40°C, just after harvest.', <AcUnitRounded />], ['03', 'Nothing to hide', 'No artificial preservatives. Just the good stuff, ready to go.', <VerifiedOutlined />], ['04', 'Cold all the way', 'A carefully managed cold chain keeps every pack at its best.', <LocalShippingOutlined />]].map(([number, title, body, icon]) => <article className="journey-step reveal" key={number}><span className="step-number">{number}</span><span className="step-icon">{icon}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
    <section className="brand-products brand-products-fresh section-pad">
      <div className="brand-products-heading">
        <div className="brand-products-copy">
          <span className="eyebrow">{productBrandInfo['pal-fresh'].title}</span>
          <h2>Farm-fresh favourites, <em>ready for today.</em></h2>
          <p>{productBrandInfo['pal-fresh'].description}</p>
        </div>
        <Link className="see-more-products" to="/products?brand=pal-fresh">See more products <ArrowOutwardRounded aria-hidden="true" /></Link>
      </div>
      <ProductCarousel brand="pal-fresh" products={palFreshProducts} onOpen={setSelectedProduct} />
    </section>
    <section className="brand-products brand-products-frozzo section-pad">
      <div className="brand-products-heading">
        <div className="brand-products-copy">
          <span className="eyebrow">{productBrandInfo.frozzo.title}</span>
          <h2>Snacks for <em>good times.</em></h2>
          <p>{productBrandInfo.frozzo.description}</p>
        </div>
        <Link className="see-more-products" to="/products?brand=frozzo">See more products <ArrowOutwardRounded aria-hidden="true" /></Link>
      </div>
      <ProductCarousel brand="frozzo" products={frozzoProducts} onOpen={setSelectedProduct} />
    </section>
    <section className="partner-banner">
      <div className="partner-copy"><span className="eyebrow">A GOOD THING, SHARED</span><h2>Let’s make room<br />for <em>more good.</em></h2><p>Retail, distribution, or food service—we’d love to hear what we can create together.</p><Button component={Link} to="/contact?tab=distributor" className="button-light">Let’s talk partnership <span>↗</span></Button></div>
    </section>
    <ProductDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />
  </main>;
}
