import React, { useEffect, useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import { gallery } from '../data/gallery.js';
import { imageUrl } from '../utils/imageUrl.js';
export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const categories = ['All', ...new Set(gallery.map((item) => item.category))];
  const items = gallery.map((item, index) => ({ ...item, index })).filter((item) => filter === 'All' || item.category === filter);
  const selectedIndex = active ? items.findIndex((item) => item.index === active.index) : -1;
  const move = (delta) => {
    if (!items.length) return;
    const next = (selectedIndex + delta + items.length) % items.length;
    setActive(items[next]);
  };
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, selectedIndex, items.length]);
  return <main className="gallery-page">
    <section className="gallery-hero">
      <div className="gallery-hero-copy">
        <span className="eyebrow"><i /> LIFE, WITH A LITTLE MORE FLAVOUR</span>
        <h1>Goodness looks<br /><em>good on you.</em></h1>
        <p>Little glimpses of where the good stuff begins—and where it takes us.</p>
        <a className="gallery-hero-link" href="#gallery-collection">Explore the collection <span>↓</span></a>
      </div>
      <div className="gallery-hero-visual">
        <img src={imageUrl(gallery[0].image, 1500)} alt={gallery[0].title} />
        <span className="gallery-hero-tag"><i /> Grown with care</span>
        <div className="gallery-hero-caption"><small>FIELD NOTES · 01</small><b>Goodness starts in the fields</b></div>
      </div>
    </section>
    <section className="gallery-collection" id="gallery-collection">
      <div className="gallery-collection-heading">
        <div><span className="eyebrow">THE GOOD STUFF, UP CLOSE</span><h2>A little closer.</h2></div>
        <div className="gallery-collection-count"><b>{String(items.length).padStart(2, '0')}</b><span>PHOTOS<br />IN VIEW</span></div>
      </div>
      <div className="gallery-toolbar">
        <span className="gallery-filter-label">EXPLORE BY</span>
        <div className="gallery-filters" role="group" aria-label="Filter gallery">{categories.map((item) => <button key={item} className={filter === item ? 'filter-active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      </div>
      <div className="gallery-grid">{items.map((item, index) => <button className={`gallery-tile gallery-tile-${index % 5} reveal`} key={item.index} onClick={() => setActive(item)} aria-label={`View photo: ${item.title}`}>
        <img src={imageUrl(item.image, 1000)} alt={item.title} loading="lazy" /><span className="gallery-overlay"><small>{item.category}</small><b>{item.title}</b><i>↗</i></span>
      </button>)}</div>
    </section>
    <Dialog open={Boolean(active)} onClose={() => setActive(null)} maxWidth="lg" fullWidth PaperProps={{ className: 'gallery-dialog' }}>
      {active && <div className="lightbox"><IconButton className="lightbox-close" aria-label="Close gallery image" onClick={() => setActive(null)}>×</IconButton><button className="lightbox-nav lightbox-prev" aria-label="Previous image" onClick={() => move(-1)}>←</button><img src={imageUrl(active.image, 1800)} alt={active.title} /><button className="lightbox-nav lightbox-next" aria-label="Next image" onClick={() => move(1)}>→</button><div className="lightbox-caption"><span>{active.category}</span><h2>{active.title}</h2><small>{String(selectedIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</small></div></div>}
    </Dialog>
  </main>;
}
