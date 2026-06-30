"use client";
import React from "react";
import { motion } from "framer-motion";

export function SoftwareDeve() {
  return (
    <section className="w-full bg-[#E6FFFB] overflow-hidden relative">
      
      {/* --- UNIQUE EYE-CATCHING ELEMENT: LARGE BACKDROP TEXT --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[20vw] font-black leading-none text-[#01382F] whitespace-nowrap"
          style={{ WebkitTextStroke: "2px #01382F", color: "transparent" }}
        >
          SOFTWARE
        </motion.h2>
      </div>

      {/* --- UNIQUE ELEMENT: MOVING GRADIENT BEAM --- */}
      <motion.div 
        animate={{ 
          x: [-500, 1000],
          opacity: [0, 0.3, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Column 1: Visual Composition (Untouched images) */}
          <div className="relative mx-auto w-full max-w-[700px] aspect-[700/500] order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/assets/software vector.png" 
                alt="Software Development Mockup"
                className="w-full h-full object-contain select-none z-10 relative"
              />
            </div>
          </div>

          {/* Column 2: Text Content */}
          <div className="w-full lg:max-w-[580px] order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(34px,3.5vw,52px)] font-extrabold leading-[1.1] text-[#01382F] font-inter text-center lg:text-left tracking-tight"
            >
              <span className="relative inline-block">
                Software Development
              </span>
              <br />
              <span className="text-[#219653] inline-block mt-1 drop-shadow-sm">
                & Consultancy
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-[clamp(15px,1.2vw,17px)] font-normal leading-[1.7] text-black/80 font-inter text-center lg:text-left max-w-xl mx-auto lg:mx-0"
            >
              <p className="relative">
                Custom, scalable software solutions that help businesses 
                <span className="bg-[#98F090]/20 px-1 rounded-sm text-[#01382F] font-medium"> improve efficiency and grow.</span>
                <br className="hidden md:block" />
                Build your next solution with us.
              </p>
            </motion.div>

            {/* Read More Button Wrapper Hidden */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 md:mt-12 flex justify-center lg:justify-start"
            >
              <ReadMoreButton />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}