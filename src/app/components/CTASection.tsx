import React from 'react';
import { motion } from 'motion/react';
import img3DCancerIconWithScanner2 from "figma:asset/7e2efc14d6625919f00fad1168741e482ff6c378.png";
import img3DCancerIconWithScanner1 from "figma:asset/24aa6accb92de4e7aee89a2ebc34fc2a19c94cc6.png";
import svgPaths from "../../imports/svg-4m1rw42oa4";

export function CTASection() {
  return (
    <section className="relative py-12 px-[clamp(16px,3vw,48px)] w-full bg-black">
      <div className="w-full max-w-[1400px] mx-auto rounded-[32px] relative overflow-hidden h-[500px] flex items-center bg-gradient-to-r from-[#DD005C] to-[#0542BD]">
        {/* Background "Zircon" Watermark */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <motion.span 
            animate={{ x: ["0%", "-20%", "0%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute left-[-5%] bottom-[-5%] text-[150px] md:text-[300px] font-semibold font-['Montserrat'] bg-clip-text text-transparent bg-gradient-to-b from-white/15 to-white/5 whitespace-nowrap leading-none pointer-events-none select-none"
          >
            Zircon
          </motion.span>
        </div>

        {/* Right Side Visual (Bleeds to edge) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] pointer-events-none z-10">
          <div className="relative w-full h-full">
            {/* Glow / Secondary asset */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[80%] aspect-square blur-[60px] opacity-30">
               <img src={img3DCancerIconWithScanner2} alt="" className="w-full h-full object-contain" />
            </div>
            {/* Primary Image / Photo - Large and bleeding off edge */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute right-[-10%] top-0 bottom-0 w-[110%] h-full flex items-center justify-end"
            >
               <img 
                 src={img3DCancerIconWithScanner1} 
                 alt="Medical Equipment" 
                 className="h-full w-full object-cover md:object-contain object-right" 
               />
            </motion.div>
          </div>
        </div>

        {/* Left Side Content Overlay */}
        <div className="relative z-20 w-full md:w-[60%] px-6 sm:px-12 md:pl-16 md:pr-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white font-['Montserrat'] leading-tight max-w-xl drop-shadow-sm">
                Connecting Innovation and Care, One Device Away
              </h2>
              <p className="text-sm md:text-[16px] text-white/90 font-['Arial'] max-w-md leading-relaxed">
                Empowering healthcare providers with trusted medical equipment and responsive technical support every step forward.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <button className="h-[48px] bg-gradient-to-r from-[#DD005C] to-[#0542BD] pl-6 pr-3 py-1 rounded-full flex items-center justify-center gap-2.5 group cursor-pointer hover:scale-[1.02] transition-all shadow-lg">
                <span className="text-white font-semibold text-[15px] font-['Montserrat']">Request Consultation</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                    <path d={svgPaths.p2a145500} fill="white" />
                  </svg>
                </div>
              </button>
              
              <button className="h-[48px] bg-white px-8 py-1 rounded-full flex items-center justify-center min-w-[140px] cursor-pointer hover:bg-gray-100 transition-colors shadow-md">
                <span className="text-[#070707] font-semibold text-[15px] font-['Montserrat']">Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
