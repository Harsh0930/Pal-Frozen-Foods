import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BrandProvider } from './context/BrandThemeContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import BrandGreeting from './components/common/BrandGreeting.jsx';
import ScrollReveal from './components/common/ScrollReveal.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
export default function App() {
  const location = useLocation();
  const storyTrackRef = useRef(null);
  const storyFrameRef = useRef(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);

  useEffect(() => {
    const track = storyTrackRef.current;
    const frame = storyFrameRef.current;
    if (!track || !frame) return undefined;

    let updateId = 0;
    const sendProgress = () => {
      updateId = 0;
      const scrollDistance = track.offsetHeight - window.innerHeight;
      const progress = scrollDistance > 0
        ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollDistance))
        : 0;

      frame.contentWindow?.postMessage({ type: 'pal-scroll-story-progress', progress }, window.location.origin);
    };
    const scheduleProgress = () => {
      if (!updateId) updateId = window.requestAnimationFrame(sendProgress);
    };

    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);
    frame.addEventListener('load', scheduleProgress);
    scheduleProgress();

    return () => {
      window.removeEventListener('scroll', scheduleProgress);
      window.removeEventListener('resize', scheduleProgress);
      frame.removeEventListener('load', scheduleProgress);
      if (updateId) window.cancelAnimationFrame(updateId);
    };
  }, []);

  return <BrandProvider>
    <ScrollReveal />
    <Navbar />
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
    <Footer />
    <div className="scroll-story-embed-track" ref={storyTrackRef}>
      <iframe
        className="scroll-story-embed"
        ref={storyFrameRef}
        src="/scroll-story/index.html?embedded=1"
        title="Pal Frozen Foods from field to freezer scroll story"
        loading="lazy"
        scrolling="no"
      />
    </div>
    <BrandGreeting />
  </BrandProvider>;
}
