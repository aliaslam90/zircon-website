import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Camera, ArrowRight, ChevronRight, Activity, Shield, Layers } from 'lucide-react';

interface ClinicalStep {
  step: number;
  title: string;
  image: string;
}

interface ClinicalCaseProps {
  steps: ClinicalStep[];
  title?: string;
  subtitle?: string;
}

export const ClinicalCase: React.FC<ClinicalCaseProps> = ({ 
  steps, 
  title = "Clinical Case", 
  subtitle = "Real-world clinical documentation demonstrating the system in action." 
}) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(150.311deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0542BD]/10 px-4 py-2 rounded-full mb-4 border border-[#0542BD]/5"
          >
            <div className="relative size-4">
              <Camera className="size-full text-[#0542BD]" />
            </div>
            <span className="text-[#0542BD] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest">
              CLINICAL DOCUMENTATION
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#070707] text-3xl md:text-5xl font-bold font-['Montserrat'] mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6b7280] text-lg md:text-[20px] font-['Arial'] leading-relaxed max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i % 3) }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f3f4f6]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white/20 backdrop-blur-md size-5 rounded-full flex items-center justify-center">
                    <Calendar className="size-3 text-white" />
                  </div>
                  <span className="text-white/80 text-[10px] md:text-[11px] font-bold font-['Montserrat'] uppercase tracking-wider">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-white text-lg md:text-xl font-bold font-['Montserrat'] leading-tight">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="bg-[#070707] text-white px-10 py-4 rounded-full font-bold font-['Montserrat'] inline-flex items-center gap-3 hover:bg-black/90 transition-all shadow-lg">
            Download Case Study
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
