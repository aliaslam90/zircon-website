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
      {/* No top padding on home so hero goes to top; header overlays hero. Other pages get padding. */}
      <main className={`relative w-full ${isHome ? 'pt-0' : 'pt-[88px] sm:pt-[92px] md:pt-[96px]'}`}>
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
