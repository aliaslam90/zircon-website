import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Layers, Activity, ArrowRight, Zap, Target, Box, Settings } from 'lucide-react';
import svgPaths from "../../imports/svg-rljdxlgavg";

// Assets
import imgHeroKit from "figma:asset/a6f4b981c9e1156a76c17e6bf50335f761b08d98.png";
import imgSequenceOverview from "figma:asset/cab179256ab9b1e23cfdb5f48790c7c65f5a3544.png";
import imgClinicalBenefits from "figma:asset/973b3e9e1cd8cb4397ce7b1c090fa9c90848df62.png";
import imgGridBg from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgComponentsBreakdown from "figma:asset/f5f9b9ce4b7c93d0be8db94c0a4690ba03478056.png";
import imgSequenceFX3610 from "figma:asset/0616590f5299e6e46f706da31a11d680caafe0c0.png";

export const SurgicalKitContent = () => {
  return (
    <div className="bg-white">
      {/* Product Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[#070707] text-3xl md:text-5xl font-bold font-['Montserrat'] mb-6">Product Overview</h2>
            <p className="text-black/70 text-lg md:text-xl font-['Arial'] leading-relaxed">
              The Dentium Guided Surgery Kit is available in two configurations to match different clinical needs:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Box: Overview Description */}
            <div className="bg-gradient-to-br from-[#e3f0fa] to-white p-8 md:p-10 rounded-[32px] border border-[#f3f4f6] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#0542BD]/10 px-4 py-2 rounded-full mb-6 self-start">
                <Settings size={16} className="text-[#0542BD]" />
                <span className="text-[#0542BD] text-sm font-bold font-['Arial'] uppercase">Surgical Kit</span>
              </div>
              <h3 className="text-[#323231] text-2xl md:text-3xl font-bold font-['Montserrat'] mb-6">Dentium Guided Surgery Kit</h3>
              <p className="text-black/80 text-base md:text-lg font-['Arial'] leading-relaxed mb-8">
                Designed to support accurate, predictable, and minimally invasive implant placement, the Dentium Guided Surgery Kit offers a complete digital solution for guided implant surgery. Engineered for clinical efficiency, the system provides clear path and depth control while maintaining a streamlined surgical workflow.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Faster Healing', 'Higher Success Rate', 'Proven Results'].map((tag) => (
                  <span key={tag} className="bg-white/80 border border-[#0542BD]/20 px-4 py-1.5 rounded-full text-[#0542BD] text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Box: Sequence Image */}
            <div className="bg-gradient-to-br from-[#e3f0fa] to-white p-8 md:p-10 rounded-[32px] border border-[#f3f4f6] flex items-center justify-center overflow-hidden">
               <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0542BD]/20 to-[#00FFFF]/20">
                  <img src={imgSequenceOverview} alt="Drilling Sequence" className="absolute inset-0 w-full h-full object-cover" />
               </div>
            </div>
          </div>

          {/* Configuration Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#323231] p-8 md:p-10 rounded-[32px] text-white">
              <h4 className="text-xl md:text-2xl font-bold font-['Montserrat'] mb-3">Digital Full Kit (XGSFK)</h4>
              <p className="text-white/70 text-base leading-relaxed">
                Compatible with Platform Ø3.6, Ø4.0, and Ø4.5 fixtures. Features a hybrid design that supports procedures from the initial drill through countersinking.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0542BD] to-[#021A4C] p-8 md:p-10 rounded-[32px] text-white">
              <h4 className="text-xl md:text-2xl font-bold font-['Montserrat'] mb-3">Digital Simple Kit (XGSSK)</h4>
              <p className="text-[#bfdbfe] text-base leading-relaxed">
                Designed for Platform Ø3.6 fixtures with Ø3.0 narrow sleeves. Focused on straightforward path and depth guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clinical Benefits */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img src={imgGridBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[1260px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Drills Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-[40px] p-6 shadow-2xl relative">
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center p-8">
                  <img src={imgClinicalBenefits} alt="Guide Drills" className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-between items-center mt-6 px-4">
                  <div>
                    <span className="block text-xs uppercase tracking-[0.7px] text-black/60 mb-1">Material Grade</span>
                    <span className="block font-bold text-xl md:text-2xl text-[#323231]">CP Grade 4</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs uppercase tracking-[0.7px] text-black/60 mb-1">Standard</span>
                    <span className="block font-bold text-xl md:text-2xl text-[#344ecc]">ASTM F67</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                <Target size={16} className="text-white" />
                <span className="text-white text-xs font-bold font-['Montserrat'] uppercase tracking-widest">Product Specification</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Montserrat'] mb-10 leading-tight">Key Clinical Benefits</h2>
              <div className="space-y-6">
                {[
                  "Accurate path and depth control for predictable implant placement",
                  "Reduced surgical variability and improved safety",
                  "Efficient workflow with clearly sequenced drilling steps",
                  "Designed to support flapless and minimally invasive procedures",
                  "Organized kit layout for fast intraoperative handling"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#344ecc] rounded-full size-6 flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <p className="text-white text-base md:text-lg font-['Montserrat']">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Full Kit (XGSFK) - Drilling Sequence */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#d3e2f5] px-4 py-2 rounded-full mb-4">
              <Layers size={16} className="text-[#344ecc]" />
              <span className="text-[#344ecc] text-xs font-bold font-['Montserrat'] uppercase tracking-widest">Unified Prosthetic Platform</span>
            </div>
            <h2 className="text-[#070707] text-3xl md:text-5xl font-bold font-['Montserrat'] mb-4">Digital Full Kit (XGSFK)</h2>
            <p className="text-black/60 text-lg md:text-xl font-['Arial']">SuperLine FX4510SWC Drilling Sequence</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* List */}
            <div className="w-full lg:w-auto space-y-6">
              {[
                "Tissue Punch",
                "Flat Drill",
                "Guide Drill",
                "Final Drill (FX 36, FX 40, FX 45 options)",
                "Adapter for implant placement"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="bg-[#d3e2f5] rounded-xl size-12 flex items-center justify-center shrink-0">
                    <Check size={24} className="text-[#344ecc]" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-black text-lg md:text-xl font-bold font-['Montserrat']">{item}</h4>
                </div>
              ))}
            </div>

            {/* Image Box */}
            <div className="w-full max-w-[650px]">
              <div className="backdrop-blur-[2px] bg-white border border-[#f3f4f6] rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col items-center gap-8">
                <div className="w-full aspect-[2.5/1] relative">
                  <img src={imgComponentsBreakdown} alt="Components Breakdown" className="w-full h-full object-contain" />
                </div>
                <div className="w-full h-px bg-black/10 pt-8 mt-4 text-center">
                  <p className="text-sm font-['Montserrat'] text-black/60">
                    All sizes share <span className="font-bold text-[#344ecc]">one universal connection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FX3610 Drilling Sequence */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img src={imgGridBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[1260px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Drills Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-[40px] p-6 shadow-2xl relative">
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center p-8">
                  <img src={imgSequenceFX3610} alt="FX3610 Drilling Sequence" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                <Settings size={16} className="text-white" />
                <span className="text-white text-xs font-bold font-['Montserrat'] uppercase tracking-widest">Prosthetic Flexibility</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Montserrat'] mb-10 leading-tight">SuperLine FX3610SWC Drilling Sequence</h2>
              <div className="space-y-6">
                {["Tissue Punch", "Flat Drill", "Guide Drill", "Final Drill (FX 36)"].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#344ecc] rounded-full size-6 flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <p className="text-white text-base md:text-lg font-['Montserrat']">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Components Cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#070707] text-3xl md:text-5xl font-bold font-['Montserrat'] mb-6">Kit Components</h2>
            <p className="text-[#6b7280] text-lg md:text-xl font-['Arial'] max-w-2xl mx-auto">
              Every detail engineered for optimal clinical outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Guide Drills', 
                desc: 'Precision-engineered guide drills designed to work seamlessly with surgical sleeves, ensuring controlled osteotomy preparation.',
                path: svgPaths.p5b81480 
              },
              { 
                title: 'Tissue Punch', 
                desc: 'Used for soft tissue removal in flapless procedures, enabling minimally invasive access.',
                path: svgPaths.p1e4c7e00 
              },
              { 
                title: 'Ti-Sleeve and Ti-Open Sleeve', 
                desc: 'High-precision titanium sleeves designed for durability, accuracy, and repeated clinical use.',
                path: svgPaths.p2b642900 
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 border border-[#dd005c] flex flex-col gap-6 group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#dd005c] to-[#0088b3] size-14 rounded-full flex items-center justify-center p-3 text-white">
                   <svg fill="none" viewBox="0 0 24 24" className="size-full">
                      <path d={card.path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                </div>
                <div className="space-y-4">
                  <div className="h-px bg-[#EBEBEB] w-full" />
                  <h3 className="text-[#070707] text-2xl font-bold font-['Montserrat']">{card.title}</h3>
                  <p className="text-[#454545] text-sm font-['Arial'] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
