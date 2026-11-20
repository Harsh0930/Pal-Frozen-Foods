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
    <section className="privacy-hero"><span className="eyebrow">THE IMPORTANT LITTLE DETAILS</span><h1>Your trust is<br /><em>good with us.</em></h1><p>We believe good things start with being clear. Here’s how we look after the information you share with us.</p><span className="updated-badge">LAST UPDATED · 20 NOVEMBER 2026</span></section>
    <div className="privacy-layout"><aside className="privacy-toc"><span>IN THIS POLICY</span>{privacySections.map(([id, title], index) => <a key={id} href={`#${id}`} className={active === id ? 'toc-active' : ''}><small>0{index + 1}</small>{title}</a>)}</aside>
      <article className="privacy-copy">{privacySections.map(([id, title, content], index) => <section id={id} className="privacy-section" key={id}><span>0{index + 1} / PAL FROZEN FOODS</span><h2>{title}</h2><p>{content}</p>{id === 'contact' && <a className="underlined-link" href="mailto:hello@palfrozenfoods.com">hello@palfrozenfoods.com <i>↗</i></a>}</section>)}
        <div className="privacy-note"><p>This policy is intended as a clear overview of our website privacy practices. It does not replace any rights you have under applicable law.</p></div>
      </article>
    </div>
  </main>;
}
