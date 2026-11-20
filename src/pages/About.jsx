import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { imageUrl } from '../utils/imageUrl.js';
export default function About() {
  const metrics = [['20+', 'years of food know-how'], ['45+', 'cities reached'], ['100%', 'care in every step'], ['2', 'brands, one promise']];
  return <main className="about-page">
    <section className="page-hero about-hero">
      <div className="page-hero-copy"><span className="eyebrow">A LITTLE ABOUT US</span><h1>Good food.<br /><em>Good feeling.</em></h1><p>We believe the best things in life should be easy to enjoy. That’s why we bring thoughtful sourcing and careful freezing together, for food that fits real life.</p></div>
      <div className="about-hero-image"><img src={imageUrl('photo-1500382017468-9049fed747ef', 1600)} alt="Sunlit green farmland at harvest time" /><span className="image-caption">GROWN WITH CARE, EVERY SEASON.</span></div>
    </section>
    <section className="story-section section-pad">
      <div className="story-image reveal"><img src={imageUrl('photo-1464226184884-fa280b87c399', 1100)} alt="Fresh vegetables gathered from the farm" /></div>
      <div className="story-copy reveal"><span className="eyebrow">ROOTED IN THE GOOD STUFF</span><h2>We’re here to make<br />good food <em>feel easy.</em></h2><p>At Pal Frozen Foods, we bring together the things that matter: ingredients worth sharing, technology that treats them with care, and a belief that everyday food can still feel special.</p><p>Pal Fresh is our love letter to the goodness of the garden. Frozzo is our invitation to make a little more room for fun. Different moods, one promise: thoughtfully made food, ready on your time.</p><Link className="underlined-link" to="/products">Find your favourites <span>→</span></Link></div>
    </section>
    <section className="iqf-section">
      <div className="iqf-copy reveal"><span className="eyebrow">THE MAGIC OF IQF</span><h2>Freshness, with<br />a little <em>freeze-frame.</em></h2><p>Individually Quick Frozen means each piece freezes on its own, in a flash. It helps keep the colour, texture, and goodness you expect—without artificial preservatives.</p><Link className="underlined-link" to="/products">Taste the difference <span>→</span></Link></div>
      <div className="iqf-steps">{[['01', 'Picked at their best', 'It starts with ingredients at their natural peak.'], ['02', 'Frozen in a flash', 'Individual pieces freeze quickly at -40°C.'], ['03', 'Goodness stays put', 'Just the food you love, ready for whenever.']].map(([n, title, body]) => <div key={n} className="iqf-step reveal"><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div><b>↗</b></div>)}</div>
    </section>
    <section className="metrics-section section-pad"><SectionHeading eyebrow="GOOD THINGS, ADDING UP" title="A little care goes a long way." /><div className="metrics-grid">{metrics.map(([value, label]) => <div className="metric reveal" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="quality-strip"><span>OUR PROMISE, IN EVERY PACK</span><div><b>FSSAI</b><b>ISO 22000</b><b>HACCP</b><b>GMP</b></div></section>
  </main>;
}
