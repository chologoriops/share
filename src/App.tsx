import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'));
const BrandTech = lazy(() => import('./components/BrandTech'));
const MarketingROI = lazy(() => import('./components/MarketingROI'));
const BusinessValue = lazy(() => import('./components/BusinessValue'));
const Consulting = lazy(() => import('./components/Consulting'));
const About = lazy(() => import('./components/About'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <BrandTech />
        <MarketingROI />
        <BusinessValue />
        <Consulting />
        <About />
        <Team />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

export default App;