import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SectorsSection } from './components/SectorsSection';
import { TrustSection } from './components/TrustSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutPage } from './AboutPage';
import { SolutionsLandingPage } from './SolutionsLandingPage';
import { SolutionsTypePage } from './SolutionsTypePage';
import { SolutionsDentalPage } from './SolutionsDentalPage';
import { SolutionsMedicalPage } from './SolutionsMedicalPage';
import { CategoryPage } from './CategoryPage';
import { ProductPage } from './ProductPage';
import { EducationPage } from './EducationPage';
import { EventsPage } from './EventsPage';
import { ContactPage } from './ContactPage';

const HomePage = () => (
  <>
    <Hero />
    <div className="relative z-10 bg-white w-full">
      <AboutSection />
      <SectorsSection />
      <TrustSection />
      <SolutionsSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </div>
  </>
);

function AppLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isHome = location.pathname === '/';

  // Basic SEO-friendly document titles based on current route
  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    let pageTitle = 'Home';

    if (segments[0] === 'about') {
      pageTitle = 'About Us';
    } else if (segments[0] === 'solutions') {
      if (segments.length === 1) {
        pageTitle = 'Solutions';
      } else if (segments.length === 2) {
        // /solutions/:typeId
        pageTitle = `${segments[1].replace(/-/g, ' ')} Solutions`;
      } else if (segments.length === 3) {
        // /solutions/:typeId/:categoryId
        pageTitle = `${segments[2].replace(/-/g, ' ')} – Category`;
      } else if (segments.length >= 4) {
        // /solutions/:typeId/:categoryId/:productId
        pageTitle = `${segments[3].replace(/-/g, ' ')} – Product`;
      }
    } else if (segments[0] === 'education') {
      pageTitle = 'Education';
    } else if (segments[0] === 'events') {
      pageTitle = 'Events';
    } else if (segments[0] === 'contact') {
      pageTitle = 'Contact Us';
    }

    // Fallback: capitalize words
    pageTitle = pageTitle
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    document.title = `${pageTitle} | Zircon Medical Equipment`;
  }, [location.pathname, location.search]);

  // Scroll restoration:
  // - On normal navigation (links), scroll to top or hash target
  // - On back/forward (POP), restore previous scroll position
  const scrollPositions = useRef<Record<string, { x: number; y: number }>>({});

  // Save scroll position before route changes
  useEffect(() => {
    const key = location.key || `${location.pathname}${location.search}`;
    return () => {
      scrollPositions.current[key] = { x: window.scrollX, y: window.scrollY };
    };
  }, [location]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const key = location.key || `${location.pathname}${location.search}`;

    // Back/forward navigation: restore previous scroll position if we have it
    if (navigationType === 'POP') {
      const stored = scrollPositions.current[key];
      if (stored) {
        window.scrollTo(stored.x, stored.y);
        return;
      }
    }

    // If URL has a hash, try to scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
        return;
      }
    }

    // Default: scroll to top for new pages
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location, navigationType]);

  return (
    <div className={`min-h-screen font-['Montserrat',sans-serif] selection:bg-[#DD005C] selection:text-white relative ${isHome ? 'bg-black' : 'bg-white'}`}>
      <Header />
      {/* No main top padding: every page’s first section goes to top, header overlays. Each section uses its own pt for header clearance. */}
      <main className="relative w-full pt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsLandingPage />} />
          <Route path="/solutions/dental" element={<SolutionsDentalPage />} />
          <Route path="/solutions/medical" element={<SolutionsMedicalPage />} />
          <Route path="/solutions/:typeId" element={<SolutionsTypePage />} />
          <Route path="/solutions/:typeId/:categoryId" element={<CategoryPage />} />
          <Route path="/solutions/:typeId/:categoryId/:productId" element={<ProductPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
