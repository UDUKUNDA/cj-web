"use client";
import React from "react";
import { motion } from "framer-motion";

// --- MAIN COMPONENT: SOFDEVELOPMENT ---
export function SofDevelopment() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      
      {/* --- UNIQUE ELEMENT: TECH-GRID BACKGROUND --- */}
      {/* This creates a subtle "Financial Engineering" vibe unique to this section */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#01382F 1px, transparent 1px), linear-gradient(90deg, #01382F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- UNIQUE ELEMENT: FLOATING DATA PARTICLES --- */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-32 h-32 bg-[#98F090] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Column 1: Text Content */}
          <div className="w-full lg:max-w-[580px] order-1 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(34px,3.5vw,52px)] font-extrabold leading-[1.1] text-[#01382F] font-inter text-center lg:text-left tracking-tight"
            >
              {/* Added a subtle glow to the primary keyword */}
              <span className="text-[#219653] drop-shadow-[0_0_10px_rgba(33,150,83,0.1)]">Financial Management</span>
              <br />
              Systems & Consultancy
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-[clamp(15px,1.2vw,17px)] font-normal leading-[1.7] text-black/80 font-inter text-center lg:text-left max-w-xl mx-auto lg:mx-0"
            >
              <p>
                Streamline loan management, automate operations,
                and gain <span className="font-bold text-[#01382F] italic">real-time insights</span> with JAMP360.
                <br />
                Upgrade your financial systems now.
              </p>
            </motion.div>

            {/* Read More Button Wrapper Hidden */}
            {/* <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex justify-center lg:justify-start"
            >
              <ReadMoreButton />
            </motion.div> */}
          </div>

          {/* Column 2: Visual Composition (Untouched Images) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[700px] aspect-[700/500] order-2 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-[90%] h-[90%]">
              <img
                src="/assets/Group.svg" 
                alt="Software Consultancy Dashboard"
                className="w-full h-full object-contain select-none z-10 relative"
              />
              
              <div className="hidden lg:block absolute bottom-[20%] left-[5%] z-20 w-[60%]">
                 <img src="/assets/code-block-overlay.svg" className="absolute bottom-0 left-0 w-full" alt="" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}