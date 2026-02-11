import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-todgp7qly0";

const stats = [
  {
    title: "10+ Years of Experience",
    description: "At Zircon, trust is not a statement it is a discipline. It defines how we think, how we act, and how we build lasting relationships across the healthcare ecosystem.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p4c1e7f1} fill="white" />
      </svg>
    )
  },
  {
    title: "2,500+ Devices Installed",
    description: "We connect global manufacturers with regional healthcare professionals, bridging innovation and practice through trust, precision, and collaboration.",
    icon: (
      <svg width="26" height="20" viewBox="0 0 25.99 20" fill="none">
        <path d={svgPaths.pa4cb080} fill="white" />
      </svg>
    )
  },
  {
    title: "24/7 Technical Support",
    description: "Driven by insight and committed to excellence as a habit, Zircon believes that care is not the end of the chain it is the beginning of everything.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p309cdf00} fill="white" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    )
  }
];

export const AboutPageStats = () => {
  return (
    <section className="py-12 md:py-16 px-[clamp(16px,4vw,60px)] max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group bg-white p-6 rounded-[24px] border border-[#EBEBEB] flex flex-col gap-6 transition-all duration-300 hover:shadow-xl w-full"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DD005C] to-[#0542BD] flex items-center justify-center shrink-0">
              <div className="scale-90">
                {stat.icon}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-[1px] bg-[#EBEBEB] w-full" />
              <h3 className="text-[#070707] text-xl font-bold font-['Montserrat'] leading-tight tracking-tight">
                {stat.title}
              </h3>
              <p className="text-[#070707]/60 text-[13px] font-medium leading-relaxed">
                {stat.description}
              </p>
              <a 
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[#070707] text-[10px] uppercase font-bold tracking-widest font-['Montserrat'] flex items-center gap-2 hover:text-[#0542BD] transition-colors mt-auto pt-2"
              >
                Learn More
                <div className="w-4 h-[1px] bg-[#070707]/20" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
