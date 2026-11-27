import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { imageUrl } from '../utils/imageUrl.js';

export default function PalFarms() {
  const metrics = [['30+', 'years of farming heritage'], ['200+', 'acres of owned farmland'], ['100%', 'traceable from field to freezer'], ['2', 'flagship brands grown here']];

  return (
    <main className="about-page">
      <section className="page-hero about-hero" style={{ backgroundImage: `url(${imageUrl('photo-1500382017468-9049fed747ef', 1600)})` }}>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="page-hero-copy">
          <div className="hero-highlight">
            <span className="eyebrow">PAL FARMS</span>
            <h1>Where good food<br />starts its journey.</h1>
            <p>Our farms are the heart of everything we do. From soil to harvest, we tend every acre with care—so the vegetables that reach your freezer are as fresh as the day they were picked.</p>
          </div>
        </div>
      </section>

      <section className="story-section section-pad">
        <div className="story-image reveal">
          <img src={imageUrl('photo-1464226184884-fa280b87c399', 1100)} alt="Fresh vegetables gathered from the farm" />
        </div>
        <div className="story-copy reveal">
          <span className="eyebrow">ROOTED IN THE GOOD STUFF</span>
          <h2>We grow what<br />we <em>believe in.</em></h2>
          <p>Pal Farms spans over 200 acres of fertile land where we cultivate the vegetables that go into Pal Fresh and Frozzo. We control the entire journey—seed selection, sustainable farming practices, harvest timing, and immediate freezing—so quality is never left to chance.</p>
          <p>Every carrot, pea, and bean is picked at its natural peak and frozen within hours. That's the Pal Farms promise: vegetables that taste like they just came from the garden, because they practically did.</p>
          <Link className="underlined-link" to="/products">Explore our harvest <span>→</span></Link>
        </div>
      </section>

      <section className="iqf-section">
        <div className="iqf-copy reveal">
          <span className="eyebrow">THE MAGIC OF IQF</span>
          <h2>Freshness, with<br />a little <em>freeze-frame.</em></h2>
          <p>Individually Quick Frozen means each piece freezes on its own, in a flash. It helps keep the colour, texture, and goodness you expect—without artificial preservatives.</p>
          <Link className="underlined-link" to="/products">Taste the difference <span>→</span></Link>
        </div>
        <div className="iqf-steps">
          {[
            ['01', 'Picked at their best', 'It starts with ingredients at their natural peak.'],
            ['02', 'Frozen in a flash', 'Individual pieces freeze quickly at -40°C.'],
            ['03', 'Goodness stays put', 'Just the food you love, ready for whenever.'],
          ].map(([n, title, body]) => (
            <div key={n} className="iqf-step reveal">
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <b>↗</b>
            </div>
          ))}
        </div>
      </section>

      <section className="metrics-section section-pad">
        <SectionHeading eyebrow="OUR FARM, IN NUMBERS" title="A little care goes a long way." />
        <div className="metrics-grid">
          {metrics.map(([value, label]) => (
            <div className="metric reveal" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quality-strip">
        <span>OUR PROMISE, IN EVERY PACK</span>
        <div>
          <b>FSSAI</b>
          <b>ISO 22000</b>
          <b>HACCP</b>
          <b>GMP</b>
        </div>
      </section>
    </main>
  );
}
