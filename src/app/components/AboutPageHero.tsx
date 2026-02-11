import React from 'react';
import { motion } from 'motion/react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import svgPaths from "../../imports/svg-todgp7qly0";

export const AboutHero = () => {
  return (
    <section className="relative h-[480px] w-full bg-black overflow-hidden flex items-center justify-center pt-[80px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(16px,4vw,60px)] text-center">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
        >
          <div className="flex items-center gap-1.5 text-[#ABABAB] text-[10px] uppercase font-bold tracking-[0.2em]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p3a151200} stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1811de30} stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Home</span>
          </div>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#0542BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#0542BD] text-[10px] uppercase font-bold tracking-[0.2em]">About Us</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 font-['Montserrat'] tracking-tight"
        >
          Where Innovation <br /> Meets Trust
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-['Montserrat'] leading-relaxed"
        >
          A trusted enabler for healthcare solutions dedicated to enabling excellence <br className="hidden md:block" />
          across dental and medical practice.
        </motion.p>
      </div>
    </section>
  );
};
