import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BrandProvider } from './context/BrandThemeContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import BrandGreeting from './components/common/BrandGreeting.jsx';
import ScrollReveal from './components/common/ScrollReveal.jsx';
import ScrollStoryEmbed from './components/home/ScrollStoryEmbed.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
export default function App() {
  const location = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);

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
    <BrandGreeting />
  </BrandProvider>;
}
