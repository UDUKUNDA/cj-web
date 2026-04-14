"use client";
import React from "react";

// --- REUSABLE SUB-COMPONENT: READ MORE BUTTON ---
// Matches the specific styling (green bg, play icon, underline) from screenshot.
function ReadMoreButton() {
  return (
    <button className="group flex items-center justify-center gap-2.5 bg-[#98F090] border border-[#219653]/20 hover:bg-[#82e07a] transition-all duration-300 rounded-[8px] w-[174px] h-[53px] shadow-sm">
      {/* Icon Wrapper */}
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        <img 
          src="/assets/Union-6.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-black font-semibold text-sm  decoration-1">
        Read more
      </span>
      {/* Label with specific Inter styling and underline */}
      
    </button>
  );
}

// --- MAIN COMPONENT: SOFDEVELOPMENT ---
export function SofDevelopment() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        {/* Main Flex Layout: Text Left, Image Right (on desktop) */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Column 1: Text Content (Comes first on desktop, left side) */}
          <div className="w-full lg:max-w-[580px] order-1 lg:order-1">
            {/* Header: Specific Inter styling, dark green color, clamp for responsiveness */}
            <h2 className="text-[clamp(34px,3.5vw,52px)] font-extrabold leading-[1.1] text-[#01382F] font-inter text-center lg:text-left tracking-tight">
              Software Development
              <br />
              & Consultancy
            </h2>
            
            {/* Description Paragraph with specific leading and text opacity */}
            <div className="mt-8 text-[clamp(15px,1.2vw,17px)] font-normal leading-[1.7] text-black/80 font-inter text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra vitae dis tincidunt 
                varius vulputate ornare quis sed. Imperdiet consequat purus accumsan 
                pharetra nibh odio viverra senectus at. Id at tincidunt at imperdiet 
                lectus est fermentum imperdiet. Nulla eget sit leo.
              </p>
            </div>

            {/* Read More Button Wrapper: Center on mobile, left on desktop */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <ReadMoreButton />
            </div>
          </div>

          {/* Column 2: Visual Composition (Order-2 keeps it below text on mobile, right on desktop) */}
          <div className="relative mx-auto w-full max-w-[700px] aspect-[700/500] order-2 lg:order-2 flex items-center justify-center">
            {/* Primary Visual Composition: Monitor Mockup */}
            <div className="relative w-[90%] h-[90%]">
              <img
                src="/assets/group.svg" // Path to the visual composition for this section
                alt="Software Consultancy Dashboard"
                className="w-full h-full object-contain select-none z-10 relative"
              />
              
              {/* Add any floating vector icons absolutely positioned here, similar to previous sections */}
              <div className="hidden lg:block absolute bottom-[20%] left-[5%] z-20 w-[60%]">
                 <img src="/assets/code-block-overlay.svg" className="absolute bottom-0 left-0 w-full" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}