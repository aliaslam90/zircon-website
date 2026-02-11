import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
  const isHome = location.pathname === '/';
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
