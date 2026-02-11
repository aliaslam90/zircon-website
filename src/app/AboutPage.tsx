import React from 'react';
import { AboutHero } from './components/AboutPageHero';
import { AboutSection } from './components/AboutSection';
import { AboutPageStats } from './components/AboutPageStats';
import { AboutKeyValue } from './components/AboutKeyValue';
import { AboutTeam } from './components/AboutTeam';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';

export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <div className="relative z-10">
        {/* About Section matching Home page style */}
        <AboutSection showButton={false} />
        
        {/* Separator Line */}
        <div className="max-w-[1400px] mx-auto px-[clamp(16px,4vw,60px)] mb-10">
          <div className="h-[1px] bg-[#EBEBEB] w-full" />
        </div>
        
        {/* Part 2 Continuation */}
        <AboutKeyValue />
        
        {/* Stats moved here */}
        <AboutPageStats />

        <AboutTeam />
        <TestimonialsSection />
        
        {/* Global CTA - Footer is handled in App.tsx */}
        <CTASection />
      </div>
    </div>
  );
};
