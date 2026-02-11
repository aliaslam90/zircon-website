import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import svgPaths from "../../imports/svg-76zdggpx2y";

export const AboutSection = ({ showButton = true }: { showButton?: boolean }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  // Refs for smooth interpolation (lerp)
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);
  const rafRef = useRef<number>(0);

  // The text to highlight. 
  // We MUST ensure the line breaks match the Figma design to maintain the exact layout.
  const lines = useMemo(() => [
    "Zircon Medical Equipment is a trusted enabler for healthcare solutions",
    "dedicated to enabling excellence across dental and medical practice.",
    "We operate with a clear purpose, to make advanced innovation",
    "accessible, practical, and dependable for the professionals",
    "who deliver care every day."
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // REQUIRED SCROLL MAPPING:
      // Start: top of paragraph reaches ~70% viewport height
      // End: top of paragraph reaches ~20% viewport height
      const startTrigger = windowHeight * 0.7;
      const endTrigger = windowHeight * 0.2;
      
      const totalDistance = startTrigger - endTrigger;
      const currentDistance = startTrigger - rect.top;
      
      // Progress from 0 to 1
      const target = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
      
      targetProgress.current = target;
    };

    const smoothAnimate = () => {
      const lerpFactor = 0.08;
      const diff = targetProgress.current - currentProgress.current;
      
      currentProgress.current += diff * lerpFactor;
      
      // Threshold check to avoid unnecessary state updates
      if (Math.abs(diff) > 0.0001) {
        setProgress(currentProgress.current);
      }
      
      rafRef.current = requestAnimationFrame(smoothAnimate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(smoothAnimate);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-8 relative w-full items-center">
        {/* Header Content */}
        <div className="flex flex-col gap-2 relative w-full items-center text-center">
          <span className="text-[#0542BD] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 font-['Montserrat']">About Us</span>
          
          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl"
          >
            {/* The paragraph is composed of individual line-wrappers to ensure sequential control 
                without breaking the layout established by the original design. */}
            <div className="flex flex-col items-center">
              {lines.map((lineText, idx) => {
                const totalLines = lines.length;
                // Calculate sequential progress for each line
                const activeIndex = Math.floor(progress * totalLines);
                const lineProgress = (progress * totalLines) - activeIndex;

                let currentLineHighlightProgress = 0;
                if (idx < activeIndex) {
                  currentLineHighlightProgress = 1; // Completed
                } else if (idx === activeIndex) {
                  currentLineHighlightProgress = Math.min(Math.max(lineProgress, 0), 1); // Current active
                } else {
                  currentLineHighlightProgress = 0; // Not started
                }

                return (
                  <div key={idx} className="relative inline-block text-center max-w-full">
                    {/* Background Muted Line */}
                    <span className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-[1.4] text-[#E5E7EB] font-['Montserrat'] block tracking-tight">
                      {lineText}
                    </span>
                    
                    {/* Highlight Overlay: Sequential Reveal */}
                    <span 
                      className="absolute top-0 left-0 w-full h-full text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-[1.4] text-[#070707] font-['Montserrat'] select-none pointer-events-none text-center block overflow-hidden tracking-tight"
                      style={{
                        clipPath: `inset(0 ${100 - (currentLineHighlightProgress * 100)}% 0 0)`,
                        transition: 'none' // Controlled by lerped progress state
                      }}
                    >
                      {lineText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {showButton && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Link to="/about" className="inline-block">
                <button className="min-h-[40px] bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white pl-5 pr-2.5 py-2.5 rounded-full flex items-center gap-2 font-bold font-['Montserrat'] text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
                  More About Us
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4.5 h-4.5" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p2a145500} fill="white" />
                    </svg>
                  </div>
                </button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-4 md:mt-6 w-full">
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group p-6 sm:p-7 rounded-[24px] bg-white border border-[#EBEBEB] overflow-hidden transition-all duration-300 hover:shadow-xl w-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#DD005C] to-[#0542BD] flex items-center justify-center shrink-0 shadow-inner p-2.5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p2d7c5000} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3cccb600} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#070707] font-['Montserrat'] tracking-tight">Our Vision</h3>
            </div>
            <p className="text-[#070707]/60 text-xs sm:text-[14px] leading-relaxed font-medium font-['Montserrat']">
              To be the GCC’s most trusted healthcare platform. Connecting global manufacturers with regional healthcare professionals. Delivering reliable, real world care through integrity and long term partnerships.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group p-6 sm:p-7 rounded-[24px] bg-white border border-[#EBEBEB] overflow-hidden transition-all duration-300 hover:shadow-xl w-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#DD005C] to-[#0542BD] flex items-center justify-center shrink-0 shadow-inner p-2.5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p3097f700} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3c6311f0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17b14c70} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#070707] font-['Montserrat'] tracking-tight">Our Mission</h3>
            </div>
            <p className="text-[#070707]/60 text-xs sm:text-[14px] leading-relaxed font-medium font-['Montserrat']">
              To bridge global innovation with regional healthcare practice through a trusted, dynamic platform that empowers clinical professionals and amplifies the presence of global manufacturers shaping the future of care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
