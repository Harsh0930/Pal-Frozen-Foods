import React, { useEffect, useState } from 'react';
import { privacySections } from '../data/privacy.js';
export default function PrivacyPolicy() {
  const [active, setActive] = useState(privacySections[0][0]);
  useEffect(() => {
    const onScroll = () => {
      let current = privacySections[0][0];
      privacySections.forEach(([id]) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top < 170) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <main className="privacy-page">
    <section className="privacy-hero"><span className="eyebrow">THE IMPORTANT LITTLE DETAILS</span><h1>Your trust is<br /><em>good with us.</em></h1><p>We believe good things start with being clear. Here’s how we look after the information you share with us.</p><span className="updated-badge">LAST UPDATED · 25 NOVEMBER 2026</span></section>
    <div className="privacy-layout"><aside className="privacy-toc"><span>IN THIS POLICY</span>{privacySections.map(([id, title], index) => <a key={id} href={`#${id}`} className={active === id ? 'toc-active' : ''}><small>{String(index + 1).padStart(2, '0')}</small>{title}</a>)}</aside>
      <article className="privacy-copy">{privacySections.map(([id, title, content], index) => <section id={id} className="privacy-section" key={id}><span>{String(index + 1).padStart(2, '0')} / PAL FROZEN FOODS</span><h2>{title}</h2><p>{content}</p>{id === 'contact' && <div className="privacy-contact-details"><a href="mailto:marketing@smpalgroup.com">marketing@smpalgroup.com</a><a href="tel:+919045599277">+91 9045599277</a><address>Pal Frozen Foods<br />Palam City, Devalchaur, Rampur Road<br />Haldwani - <a href="https://www.wikidata.org/wiki/Q1499" target="_blank" rel="noreferrer">Uttarakhand</a> 263139</address></div>}</section>)}
      </article>
    </div>
  </main>;
}
