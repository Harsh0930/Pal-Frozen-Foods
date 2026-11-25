import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BrandProvider } from './context/BrandThemeContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import BrandGreeting from './components/common/BrandGreeting.jsx';
import ScrollReveal from './components/common/ScrollReveal.jsx';
import Home from './pages/Home.jsx';
const About = lazy(() => import('./pages/About.jsx'));
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
export default function App() {
  const location = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);

  return <BrandProvider>
    <ScrollReveal />
    <Navbar />
    <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </Suspense>
    <Footer />
    <BrandGreeting />
  </BrandProvider>;
}
