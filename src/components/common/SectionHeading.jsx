import React from 'react';
export default function SectionHeading({ eyebrow, title, copy, light = false }) {
  return <div className={`section-heading reveal${light ? ' heading-light' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}
