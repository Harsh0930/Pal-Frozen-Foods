import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function ScrollReveal() {
  const location = useLocation();
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const elements = gsap.utils.toArray('.reveal:not(.is-revealed)');
    elements.forEach((element) => {
      gsap.fromTo(element, { y: 24, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.72, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        onComplete: () => element.classList.add('is-revealed'),
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (elements.includes(trigger.trigger)) trigger.kill();
      });
    };
  }, [location.pathname]);
  return null;
}
