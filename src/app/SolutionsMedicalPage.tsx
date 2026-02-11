import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { solutionsData } from './data/solutionsData';
import { ChevronRight, ArrowRight, Syringe, Activity, Shield, Home, Package, ClipboardList } from 'lucide-react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

// Medical Category Icon Mapping
const medicalCategoryIcons: Record<string, React.ReactNode> = {
  'general-consumables': <Package size={24} />,
  'or-consumables': <Activity size={24} />,
  'disinfectant': <Shield size={24} />,
  'homecare': <Home size={24} />,
};

export const SolutionsMedicalPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const medicalData = solutionsData.find(s => s.id === 'medical')!;
  
  const activeCategoryId = searchParams.get('category') || medicalData.categories[0].id;
  const activeCategory = medicalData.categories.find(c => c.id === activeCategoryId) || medicalData.categories[0];

  const handleCategoryChange = (id: string) => {
    setSearchParams({ category: id });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Exact same layout as Dental */}
      <section className="bg-black pt-[140px] pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={imgGroup381671} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12 text-[#ABABAB] text-sm font-['Montserrat'] font-medium justify-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#CC0A63]" />
            <span className="text-white/60">Solutions</span>
            <ChevronRight size={14} className="text-[#CC0A63]" />
            <span className="text-[#CC0A63]">Medical</span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-7xl font-bold font-['Montserrat'] mb-8 leading-[1.1]"
            >
              Advanced Medical <br /> Solutions Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              High-quality medical supplies and equipment designed for reliability and excellence in patient care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 md:pt-28 md:pb-16 text-center">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#070707] text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6"
          >
            Advanced Medical Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A4A4A] text-base md:text-lg max-w-4xl mx-auto font-['Montserrat'] leading-relaxed"
          >
            Our comprehensive portfolio supports precision, efficiency, and confidence across modern healthcare environments. Each solution is carefully curated to meet the highest standards of quality, clinical relevance, and reliability.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area: Sidebar + Grid */}
      <section className="pb-32">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            
            {/* Sidebar - Level 2 (Section Sticky) */}
            <aside className="w-full lg:w-[280px] lg:sticky lg:top-[120px] bg-[#FCF6F9] rounded-[24px] shrink-0 self-start p-3 border border-[#F5F5F5] z-10 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                {medicalData.categories.map((category) => {
                  const isActive = activeCategoryId === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left group cursor-pointer ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#DD005C] to-[#2D73B6] text-white shadow-md' 
                          : 'bg-transparent text-[#070707] hover:bg-white/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-[#F1F1F1] text-[#4A4A4A]'
                        }`}>
                          {React.cloneElement(medicalCategoryIcons[category.id] as React.ReactElement, { size: 18 })}
                        </div>
                        <div>
                          <div className={`text-[14px] font-bold font-['Montserrat'] leading-tight ${isActive ? 'text-white' : 'text-[#070707]'}`}>
                            {category.name}
                          </div>
                          <div className={`text-[11px] font-medium font-['Montserrat'] mt-0.5 ${isActive ? 'text-white/80' : 'text-[#ABABAB]'}`}>
                            {category.products.length} products
                          </div>
                        </div>
                      </div>
                      {isActive && <ChevronRight size={16} className="text-white ml-2" />}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content Panel - Level 3 */}
            <div className="flex-1 bg-white rounded-3xl border border-[#F5F5F5] overflow-hidden">
              {/* Category Header */}
              <div className="p-8 md:p-12 border-b border-[#F5F5F5] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gradient-to-br from-[#DD005C] to-[#0088b3] rounded-xl flex items-center justify-center text-white shadow-lg">
                      {medicalCategoryIcons[activeCategoryId] || <Activity size={24} />}
                   </div>
                   <div>
                     <h3 className="text-[#070707] text-3xl font-bold font-['Montserrat']">{activeCategory.name}</h3>
                     <p className="text-[#ABABAB] text-sm font-medium font-['Montserrat']">Premium medical {activeCategory.name.toLowerCase()} for clinical excellence.</p>
                   </div>
                </div>
                <Link 
                  to={`/solutions/medical/${activeCategoryId}`}
                  className="text-[#0542BD] font-bold font-['Montserrat'] text-sm flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  View Details
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Product Grid */}
              <div className="p-8 md:p-12">
                <div className="mb-8 text-[#ABABAB] text-sm font-bold font-['Montserrat'] uppercase tracking-widest">
                  Showing {activeCategory.products.length} products
                </div>
                
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {activeCategory.products.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="bg-[#FFF6FB] rounded-[24px] p-6 border border-transparent hover:border-[#DD005C]/20 hover:shadow-[0_20px_40px_-12px_rgba(221,0,92,0.08)] transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div className="mb-4">
                        <h4 className="text-[#070707] text-lg font-bold font-['Montserrat'] group-hover:text-[#DD005C] transition-colors leading-tight">
                          {product.name}
                        </h4>
                        <div className="text-[#4A4A4A] text-[10px] font-bold font-['Montserrat'] uppercase tracking-[0.12em] opacity-40 mt-2">
                          Clinical Medical {activeCategory.name}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/solutions/medical/${activeCategoryId}/${product.id}`}
                        className="text-[#DD005C] font-bold font-['Montserrat'] text-xs uppercase tracking-widest flex items-center gap-2"
                      >
                        View Details
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Support Banner */}
              <div className="m-8 md:m-12 p-8 md:p-10 bg-white border border-[#F5F5F5] rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h5 className="text-[#070707] text-xl font-bold font-['Montserrat'] mb-2">Need help finding the right solution?</h5>
                  <p className="text-[#4A4A4A] text-sm font-['Montserrat']">Our experts are here to assist you in selecting the best equipment for your practice.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <button className="px-6 py-4 rounded-full border border-[#DD005C] text-[#DD005C] font-bold font-['Montserrat'] text-sm hover:bg-[#DD005C] hover:text-white transition-all">
                    Download Catalogue
                  </button>
                  <button className="bg-gradient-to-r from-[#DD005C] to-[#0088b3] text-white px-8 py-4 rounded-full text-sm font-bold font-['Montserrat'] hover:opacity-90 shadow-lg shadow-[#DD005C]/20">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
