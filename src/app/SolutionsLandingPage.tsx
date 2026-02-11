import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { solutionsData } from './data/solutionsData';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export const SolutionsLandingPage = () => {
  return (
    <div className="bg-white min-h-screen pt-[80px]">
      {/* Hero Section */}
      <section className="bg-black py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Abstract grid/pattern here */}
        </div>
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-bold font-['Montserrat'] mb-6"
          >
            Our Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-['Montserrat']"
          >
            Empowering healthcare excellence through cutting-edge medical and dental technology.
          </motion.p>
        </div>
      </section>

      {/* Main Options */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {solutionsData.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Background Image/Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.id === 'dental' ? 'from-[#344ECC] to-[#09144E]' : 'from-[#0542BD] to-[#021B4D]'} transition-transform duration-700 group-hover:scale-105`} />
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-white text-9xl font-bold font-['Montserrat'] uppercase">{type.name[0]}</span>
                </div>

                <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
                  <div className="inline-flex bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full self-start mb-6 border border-white/20">
                    <span className="text-white text-xs font-bold font-['Montserrat'] uppercase tracking-widest">{type.name} Division</span>
                  </div>
                  <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6">
                    {type.name} Solutions
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mb-10 max-w-md font-['Montserrat']">
                    {type.description}
                  </p>
                  <Link 
                    to={`/solutions/${type.id}`}
                    className="inline-flex items-center gap-3 bg-white text-[#0542BD] px-8 py-4 rounded-xl font-bold font-['Montserrat'] hover:bg-[#F5F5F5] transition-all group/btn w-fit"
                  >
                    Explore {type.name}
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
