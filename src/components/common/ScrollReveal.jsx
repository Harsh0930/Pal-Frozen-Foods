import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function ScrollReveal() {
  const location = useLocation();
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.getElementById('root');
    if (!root) return undefined;

    const findUnrevealed = (nodes) => {
      const elements = new Set();
      nodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        if (node.matches('.reveal:not(.is-revealed)')) elements.add(node);
        node.querySelectorAll('.reveal:not(.is-revealed)').forEach((element) => elements.add(element));
      });
      return elements;
    };
    const revealNodes = (nodes) => {
      findUnrevealed(nodes).forEach((element) => {
        element.classList.add('is-revealed');
      });
    };

    if (reduced || !('IntersectionObserver' in window)) {
      revealNodes([root]);
      const mutations = new MutationObserver((records) => {
        revealNodes(records.flatMap(({ addedNodes }) => Array.from(addedNodes)));
      });
      mutations.observe(root, { childList: true, subtree: true });
      return () => mutations.disconnect();
    }

    const observed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('is-revealed');
        observer.unobserve(target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    const observeReveals = (nodes) => {
      findUnrevealed(nodes).forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        observer.observe(element);
      });
    };
    const mutations = new MutationObserver((records) => {
      observeReveals(records.flatMap(({ addedNodes }) => Array.from(addedNodes)));
    });
    mutations.observe(root, { childList: true, subtree: true });
    observeReveals([root]);

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [location.pathname]);
  return null;
}
