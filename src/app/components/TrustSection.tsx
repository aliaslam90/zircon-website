import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-76zdggpx2y";

const trustFactors = [
  {
    title: "Commitment",
    description: "We honor every promise with consistency and care. Commitment is the discipline behind our reliability and the foundation of the trust we build with every partner.",
    icon: (
      <g>
        <path d={svgPaths.p4c1e7f1} fill="white" />
      </g>
    )
  },
  {
    title: "Synergy",
    description: "Progress is a collective effort. We unite manufacturers, innovators, healthcare professionals, and strategic partners into one connected ecosystem where collaboration drives shared success.",
    icon: (
      <g>
        <path d={svgPaths.p11e3c180} fill="white" />
        <path d={svgPaths.p34d6d380} fill="white" />
      </g>
    )
  },
  {
    title: "Mastery",
    description: "Excellence is a practice refined over time. We pursue precision in every detail—knowledge, logistics, service, and support—until expertise becomes instinct.",
    icon: (
      <g>
        <path d={svgPaths.p10389c00} fill="white" />
      </g>
    )
  },
  {
    title: "Ingenuity",
    description: "We turn complexity into clarity. Ingenuity defines how we adapt, innovate, and solve problems with a deeply human approach that transforms ideas into impact.",
    icon: (
      <g>
        <path d={svgPaths.p11fea300} fill="white" />
      </g>
    )
  }
];

export const TrustSection = () => {
  return (
    <section id="trust" className="relative py-16 px-[clamp(16px,3vw,48px)] max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col gap-10 md:gap-12 items-center w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight whitespace-nowrap">
            Trusted healthcare enabler across the GCC
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group p-6 rounded-[20px] bg-white border border-[#dd005c] flex flex-col gap-5 hover:shadow-lg transition-all duration-300 w-full"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#dd005c] to-[#0088b3] flex items-center justify-center shrink-0 p-2.5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  {factor.icon}
                </svg>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5">
                <div className="h-[1px] bg-[#EBEBEB] w-full" />
                <h3 className="text-[#070707] text-lg md:text-xl font-semibold">
                  {factor.title}
                </h3>
                <p className="text-[#070707] text-[13px] md:text-sm leading-relaxed opacity-80">
                  {factor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
