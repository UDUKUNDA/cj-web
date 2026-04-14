"use client";
import React from "react";

// --- REUSABLE SUB-COMPONENT: READ MORE BUTTON ---
function ReadMoreButton() {
  return (
   <button className="group flex items-center justify-center gap-2 bg-[#98F090] border border-[#219653]/30 hover:bg-[#82e07a] transition-colors rounded-[8px] w-[174px] h-[53px]">
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
    </button>
  );
}

// --- MAIN COMPONENT: SOFTWAREDEVE ---
export function SoftwareDeve() {
  return (
    /* The outer section handles the full-width background color */
<section className="w-full bg-[#E6FFFB] overflow-x-hidden">


      {/* This inner div handles the centered content and max-width */}
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Column 1: Visual Composition */}
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
            <h2 className="text-[clamp(34px,3.5vw,52px)] font-extrabold leading-[1.1] text-[#01382F] font-inter text-center lg:text-left tracking-tight">
              Software Development
              <br />
              & Consultancy
            </h2>
            
            <div className="mt-8 text-[clamp(15px,1.2vw,17px)] font-normal leading-[1.7] text-black/80 font-inter text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra vitae dis tincidunt 
                varius vulputate ornare quis sed. Imperdiet consequat purus accumsan 
                pharetra nibh odio viverra senectus at. Id at tincidunt at imperdiet 
                lectus est fermentum imperdiet. Nulla eget sit leo.
              </p>
            </div>

            {/* Button placement: Centered on mobile, Left-aligned on desktop */}
            <div className="mt-10 md:mt-12 flex justify-center lg:justify-start">
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}