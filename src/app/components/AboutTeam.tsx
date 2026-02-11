import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgAnas from "figma:asset/ea0212ca34242da97a2b6224bd0482159cc696aa.png";
import imgClaude from "figma:asset/8c9680c17621ecab4afb47f76b06436761df7266.png";
import imgRabih from "figma:asset/5af77d122c1ea9b8dabf73a5931de3bc19399810.png";
import imgMaurizio from "figma:asset/b5ac6245228b3a9afcd2a36df5608fa4af0ba731.png";

const teamMembers = [
  {
    name: "Dr. Anas Al Oum",
    role: "BDS FACP University of Southern California, Los Angeles",
    image: imgAnas
  },
  {
    name: "Dr. Claude A Istanbouli",
    role: "DDS American Academy of Implant Dentistry",
    image: imgClaude
  },
  {
    name: "Dr Rabih Abi Nader",
    role: "B.D.S, D.E.S, D.E.S.S University of California, Los Angeles(UCLA)",
    image: imgRabih
  },
  {
    name: "Dr. Maurizio Martini",
    role: "DDs Dental Implantology, university of Rome",
    image: imgMaurizio
  }
];

export const AboutTeam = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        // Mobile: 1.05–1.2 cards per view, slide = 88vw (readable card + peek)
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "6%",
          variableWidth: true,
        }
      }
    ]
  };

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/5 self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0542BD]" />
              <span className="text-[#070707]/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] font-['Montserrat']">Our Team</span>
            </div>
            <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] leading-[1.1] tracking-tight max-w-[600px]">
              Experts Behind Every Reliable Medical Solution
            </h2>
            <p className="text-[#070707]/60 text-xs md:text-sm font-medium font-['Montserrat'] max-w-[450px] leading-relaxed">
              Meet the passionate professionals driving innovation, precision, and care in every medical technology we deliver.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-xl border border-[#EBEBEB] flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer group"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#070707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button 
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-xl border border-[#EBEBEB] flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer group"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#070707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Cards Container - overflow hidden on mobile to prevent horizontal scroll */}
        <div className="team-slider-container team-slider-mobile w-full relative overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="team-slide-wrapper">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full h-[340px] sm:h-[380px] md:h-[460px] relative rounded-[24px] overflow-hidden group border border-[#EBEBEB]"
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#344ECC] to-[#09144E]" />
                  
                  {/* Member Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end min-h-[45%]">
                    <h3 className="text-white text-base sm:text-lg font-bold font-['Montserrat'] leading-tight mb-1 sm:mb-2 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-[11px] sm:text-xs font-medium leading-relaxed font-['Montserrat'] line-clamp-2">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        .team-slider-container .slick-list {
          overflow: hidden !important;
        }
        .team-slider-container .slick-track {
          display: flex !important;
          gap: 16px;
        }
        .team-slider-container .slick-slide {
          height: inherit !important;
        }
        /* Mobile only: wide slide (88vw) so card is 85–90% of screen, one card + peek */
        @media (max-width: 639px) {
          .team-slider-mobile .slick-slide {
            width: 88vw !important;
            min-width: 88vw !important;
            max-width: 88vw !important;
            box-sizing: border-box;
          }
          .team-slider-mobile .team-slide-wrapper {
            padding: 12px 0;
            width: 100% !important;
            min-width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
        }
        @media (min-width: 640px) {
          .team-slider-container .slick-track {
            gap: 0;
          }
        }
        @media (min-width: 768px) {
          .team-slider-container .slick-list {
            margin: 0 -12px;
          }
        }
      `}</style>
    </section>
  );
};
