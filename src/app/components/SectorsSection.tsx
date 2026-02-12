import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-76zdggpx2y";
import imgDesktop119 from "figma:asset/3f53ca5e35b1acc4c40158511470d3d74479930f.png";

const sectors = [
  {
    title: "Laboratories & Diagnostic Centers",
    icon: "p267e700", // WeighScale
    description: "Comprehensive support for critical care units, surgical theaters, and diagnostic departments."
  },
  {
    title: "Hospitals & Medical Centers",
    icon: "p3facd100", // Clinic
    description: "Comprehensive support for critical care units, surgical theaters, and diagnostic departments."
  },
  {
    title: "Laboratories & Diagnostic Centers",
    icon: "p1b773c00", // BloodTube
    description: "Comprehensive support for critical care units, surgical theaters, and diagnostic departments."
  },
  {
    title: "Homecare & Elderly Facilities",
    icon: "pe397c00", // Flask - wait, Figma code says Flask for Frame36
    description: "Comprehensive support for critical care units, surgical theaters, and diagnostic departments."
  },
  {
    title: "Laboratories & Diagnostic Centers",
    icon: "p267e700", // WeighScale1
    description: "Comprehensive support for critical care units, surgical theaters, and diagnostic departments."
  }
];

// Helper to get SVG paths (mapping them to their specific complex icons)
const getIcon = (type: string) => {
  switch (type) {
    case 'p267e700':
      return (
        <g>
          <path d={svgPaths.p267e700} fill="white" />
          <path d={svgPaths.p17617600} fill="white" />
          <path d={svgPaths.p20385180} fill="white" />
          <path d={svgPaths.pbad8f80} fill="white" />
          <path d={svgPaths.p1ad26000} fill="white" />
          <path d={svgPaths.p228b5500} fill="white" />
          <path d={svgPaths.p30e8ba00} fill="white" />
        </g>
      );
    case 'p3facd100':
      return (
        <g>
          <path d={svgPaths.p3facd100} fill="white" />
          <path d={svgPaths.pf55d280} fill="white" />
          <path d={svgPaths.p2de21270} fill="white" />
          <path d={svgPaths.p27540c80} fill="white" />
          <path d={svgPaths.pe0a820} fill="white" />
          <path d={svgPaths.p19d03500} fill="white" />
        </g>
      );
    case 'p1b773c00':
      return (
        <g>
          <path d={svgPaths.p1b773c00} fill="white" />
          <path d={svgPaths.p1b232e80} fill="white" />
          <path d={svgPaths.p2b0d9300} fill="white" />
          <path d={svgPaths.pdab3700} fill="white" />
          <path d={svgPaths.p2f148500} fill="white" />
        </g>
      );
    case 'pe397c00':
      return (
        <g>
          <path d={svgPaths.pe397c00} fill="white" />
          <path d={svgPaths.p1d04ebc0} fill="white" />
          <path d={svgPaths.p27cf54c0} fill="white" />
        </g>
      );
    default:
      return null;
  }
};

export const SectorsSection = () => {
  return (
    <section id="our-partners" className="relative w-full overflow-hidden flex flex-col items-center py-10 md:py-14 bg-[#070707]">
      {/* Background with Dark Overlays */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={imgDesktop119} alt="Background" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(16px,4vw,60px)]">
        {/* Header Content */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#dd005c]" />
            <span className="text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]">Industries Served</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight"
          >
            Precision Solutions for <br className="hidden md:block" />
            <span className="font-semibold italic text-[#dd005c]">Global Healthcare</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm md:text-base max-w-xl font-light leading-relaxed"
          >
            Delivering state-of-the-art medical technology across premier healthcare environments.
          </motion.p>
        </div>

        {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white hover:shadow-xl rounded-[24px] px-6 py-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border border-[#EBEBEB]"
            >
              <div className="flex flex-col gap-10">
                {/* Icon Container with brand gradient */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#dd005c] to-[#0542BD] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <g>
                        {getIcon(sector.icon)}
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="h-[1px] bg-[#EBEBEB] w-full" />
                  <h3 className="text-[#070707] text-base md:text-xl font-bold font-['Montserrat'] tracking-tight leading-tight">
                    {["Laboratories", "Diagnostic Centers", "Hospitals", "Medical Centers", "Home Care"][index] || sector.title}
                  </h3>
                  <p className="text-[#070707]/60 text-[11px] md:text-[12px] leading-relaxed line-clamp-3 font-light">
                    {sector.description}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="text-[#070707]/60 group-hover:text-[#dd005c] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 underline underline-offset-4 decoration-[#070707]/20"
                >
                  Explore
                  <div className="w-4 h-[1px] bg-[#070707]/20 group-hover:bg-[#dd005c] transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
