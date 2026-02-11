import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import svgPaths from "../../imports/svg-d0svsa3h7c";
import imgImage17 from "figma:asset/a69c41fb874e10c655ce4a31f0cfd18026c6c7ab.png";

export const FeaturedShortImplant = () => {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(152.582deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#344ECC]/10 px-3 py-1.5 rounded-full mb-6 border border-[#344ECC]/5"
            >
              <div className="relative size-3.5">
                <svg className="size-full" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p17f48400} stroke="#344ECC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <span className="text-[#344ecc] text-[10px] md:text-[11px] font-bold font-['Montserrat'] uppercase tracking-widest">
                FEATURED PRODUCT
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#070707] text-2xl md:text-3xl lg:text-[36px] font-bold font-['Montserrat'] mb-4 leading-tight"
            >
              7mm Short Implant <br />
              Now Available
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-black/60 text-sm md:text-[15px] font-['Arial'] leading-relaxed mb-8 max-w-[460px]"
            >
              Expand your treatment options with our short implant solution designed for challenging anatomical situations with limited bone height.
            </motion.p>

            {/* Feature Cards */}
            <div className="space-y-3 mb-8">
              {[
                "Reliable solution for limited bone height in posterior regions",
                "Alternative to complex bone grafting and sinus lift procedures",
                "Simplified treatment with predictable, long-term success"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-white/80 backdrop-blur-sm p-3 md:p-3.5 rounded-xl border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] flex items-center gap-3.5"
                >
                  <div className="bg-[#344ECC]/10 size-7 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="size-4" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p32ddfd00} stroke="#344ECC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                  <p className="text-[#4b5563] text-[13px] md:text-[14px] font-medium font-['Arial']">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-[#dd005c] to-[#0542BD] hover:opacity-90 transition-opacity text-white px-6 py-3 rounded-full flex items-center gap-2.5 text-[12px] font-bold font-['Montserrat'] shadow-md"
            >
              View Catalog
              <div className="size-5 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </motion.button>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[480px]"
          >
            <div className="bg-white rounded-3xl p-3 md:p-4 shadow-xl border border-[#f3f4f6] relative">
              <img 
                src={imgImage17} 
                alt="7mm Short Implant Range" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
