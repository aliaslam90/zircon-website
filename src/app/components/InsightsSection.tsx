import React from 'react';
import { motion } from 'motion/react';
import imgEllipse6 from "figma:asset/2126a896edaae5b9f5b4e97a113e3c7b90c09ccb.png";
import imgFrame1321316702 from "figma:asset/da24c98bfb003eaebed2c2ac173e717a7f98a5b7.png";
import imgFrame1321316703 from "figma:asset/ba88097ac730a4b5f2ecba39c27e57c7f081fc24.png";
import imgFrame1321316704 from "figma:asset/2e093adb19bf0f0f06182f509ced24d17546fb64.png";
import svgPaths from "../../imports/svg-oa709jqtgm";

const blogPosts = [
  {
    image: imgFrame1321316702,
    title: "How Preventive Maintenance Reduces Downtime in Healthcare Facilities",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read"
  },
  {
    image: imgFrame1321316703,
    title: "How Preventive Maintenance Reduces Downtime in Healthcare Facilities",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read"
  },
  {
    image: imgFrame1321316704,
    title: "How Preventive Maintenance Reduces Downtime in Healthcare Facilities",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read"
  }
];

export function InsightsSection() {
  return (
    <section className="relative bg-white py-16 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(16px,3vw,48px)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-0.5 rounded-full bg-gradient-to-r from-[#dd005c] to-[#0088b3] mb-4"
            >
              <span className="text-white text-xs md:text-sm font-semibold font-['Montserrat']"># Blogs</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#070707] font-['Montserrat'] mb-4 leading-tight"
            >
              Insights That Power Smarter Medical Equipment Decisions
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm text-[#070707] font-['Montserrat'] max-w-md"
            >
              Explore trends, tips, and updates shaping the future of medical devices and healthcare innovation.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#EBEBEB] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors min-h-[44px]">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                <path d={svgPaths.p241c8f70} fill="#070707" />
              </svg>
            </button>
            <button className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#EBEBEB] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors min-h-[44px]">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                <path d={svgPaths.p142a77f0} fill="#070707" />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[380px] sm:h-[420px] md:h-[480px] rounded-[24px] overflow-hidden cursor-pointer w-full"
            >
              <img 
                src={post.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2.5 mb-3">
                  <img src={imgEllipse6} alt="" className="w-8 h-8 rounded-full border border-white/20" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-white font-['Montserrat']">{post.author}</span>
                    <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-white/80 font-['Montserrat']">
                      <span>{post.date}</span>
                      <div className="w-0.5 h-0.5 rounded-full bg-white" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-white text-sm md:text-base font-medium font-['Montserrat'] mb-4 leading-relaxed group-hover:text-blue-200 transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#f57c3c] font-['Montserrat']">Read More</span>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d={svgPaths.p24654af0} fill="#F57C3C" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
