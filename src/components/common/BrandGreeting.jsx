import React, { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo.jsx';

export default function BrandGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer;
    const showTimer = window.setTimeout(() => {
      setVisible(true);
      hideTimer = window.setTimeout(() => setVisible(false), 1500);
    }, 1000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return visible ? <aside
      className="brand-greeting"
      role="status"
      aria-live="polite"
    >
      <div className="brand-greeting-logos" aria-hidden="true">
        <BrandLogo brand="pal-fresh" className="brand-greeting-logo" />
        <span>×</span>
        <BrandLogo brand="frozzo" className="brand-greeting-logo" />
      </div>
      <div className="brand-greeting-copy">
        <strong>Hello from Pal Fresh &amp; Frozzo!</strong>
        <span>Two good brands, here to make your day delicious.</span>
      </div>
    </aside> : null;
}
