import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData } from './data/solutionsData';
import { ChevronRight, ArrowRight, Layers, Syringe, Sparkles, Activity, Settings, Monitor, FlaskConical, Smile, Package, ClipboardList, Droplets, Home as HomeIcon } from 'lucide-react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgImage12 from "figma:asset/164a1c337866b5ab0f36e75f9cb75d06351e34a6.png";
import imgImage14 from "figma:asset/1cd5ba22af3455afca7d35e5bb8b0891e851a759.png";

// Icon mapping for categories (matching Level 2 sidebar icons)
const categoryIcons: Record<string, React.ReactNode> = {
  implants: <Layers size={24} />,
  'dental-consumables': <Syringe size={24} />,
  regeneration: <Sparkles size={24} />,
  endodontics: <Activity size={24} />,
  'dental-equipment': <Settings size={24} />,
  digital: <Monitor size={24} />,
  'dental-lab': <FlaskConical size={24} />,
  'mouth-care': <Smile size={24} />,
  'general-consumables': <Package size={24} />,
  'or-consumables': <ClipboardList size={24} />,
  disinfectant: <Droplets size={24} />,
  homecare: <HomeIcon size={24} />,
};

export const CategoryPage = () => {
  const { typeId, categoryId } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const typeData = solutionsData.find(s => s.id === typeId);
  const categoryData = typeData?.categories.find(c => c.id === categoryId);

  if (!categoryData) return <div className="pt-32 text-center font-bold">Category not found</div>;

  // For demonstration, use the Implants image for all categories unless we have specific ones
  const mainImage = categoryId === 'implants' ? imgImage12 : imgImage12; 
  const bottomImage = categoryId === 'implants' ? imgImage14 : null;

  return (
    <div className="bg-white min-h-screen">
      {/* Category Hero - Matches Figma Implants design */}
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
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-12 text-[#ABABAB] text-sm font-['Montserrat'] font-medium justify-center">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
               <HomeIcon size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-[#ABABAB]" />
            <span className="text-white/60">Solutions</span>
            <ChevronRight size={14} className="text-[#ABABAB]" />
            <Link to={`/solutions/${typeId}`} className="hover:text-white transition-colors">
              {typeData?.name} Solutions
            </Link>
            <ChevronRight size={14} className="text-[#CC0A63]" />
            <span className="text-[#CC0A63]">{categoryData.name}</span>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-7xl font-bold font-['Montserrat'] mb-8 leading-[1.1]"
            >
              {categoryData.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl font-['Montserrat'] max-w-4xl mx-auto leading-relaxed"
            >
              {categoryData.description || `Our ${categoryData.name.toLowerCase()} solutions are designed to support predictable, long-term clinical success across a wide range of indications.`}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-[#070707] text-4xl md:text-5xl font-bold font-['Montserrat']">
              Product Lines
            </h2>
            <p className="text-[#070707] text-sm md:text-base font-['Montserrat'] max-w-lg leading-relaxed">
              Ensure every medical device meets accuracy standards and complies with international healthcare regulations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left side: Product List */}
            <div className="flex-1 w-full space-y-4">
              {categoryData.products.map((product, idx) => {
                const isHovered = hoveredProduct === product.id;
                // For the "active" state in Figma (Implantium), we'll use the second item as a mock active state if nothing is hovered
                const isActive = hoveredProduct ? isHovered : (idx === 1);

                return (
                  <motion.div
                    key={product.id}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className={`relative transition-all duration-300 group ${
                      isActive ? 'bg-[#fff6fb]' : 'bg-transparent'
                    }`}
                  >
                    {/* Left Border Accent */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isActive ? 'bg-[#DD005C]' : 'bg-[#EBEBEB]'
                    }`} />
                    
                    <div className="pl-8 pr-6 py-6 flex gap-6 items-start">
                      {/* Icon Container */}
                      <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-white' 
                          : 'bg-[#212121] text-white'
                      }`}>
                         {categoryIcons[categoryId] || <Layers size={20} />}
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-lg font-bold font-['Montserrat'] mb-3 transition-colors duration-300 ${
                          isActive 
                            ? 'bg-clip-text bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-transparent' 
                            : 'text-[#070707]'
                        }`}>
                          {product.name}
                        </h3>
                        <p className="text-[#070707] text-sm font-['Montserrat'] leading-relaxed mb-4">
                          {product.description || `A premium ${categoryData.name.toLowerCase()} solution designed for excellent clinical results and long-term stability.`}
                        </p>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <Link 
                                to={`/solutions/${typeId}/${categoryId}/${product.id}`}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-white px-4 py-2 rounded-md text-xs font-bold font-['Montserrat'] shadow-lg shadow-[#DD005C]/10 hover:opacity-90 transition-opacity"
                              >
                                View Details
                                <ChevronRight size={14} />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right side: Product Showcase Images */}
            <div className="w-full lg:w-[600px] shrink-0 sticky top-[120px]">
              <div className="flex flex-col items-center gap-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={hoveredProduct || 'default'}
                  className="w-full aspect-square max-w-[500px] flex items-center justify-center"
                >
                  <img 
                    src={mainImage} 
                    alt="Product Showcase" 
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                
                {bottomImage && (
                  <div className="flex flex-col items-center gap-6 w-full">
                    <p className="text-sm font-['Montserrat'] text-[#4A4A4A] text-center">
                      All sizes share <span className="text-[#0542BD] font-bold">one universal connection</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
