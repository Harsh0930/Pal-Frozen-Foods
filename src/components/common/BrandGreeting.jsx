import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  return <AnimatePresence>
    {visible && <motion.aside
      className="brand-greeting"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
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
    </motion.aside>}
  </AnimatePresence>;
}
