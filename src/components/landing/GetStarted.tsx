"use client";
import React from "react";

/**
 * GetStarted Component
 * Features:
 * - Background color: #004D40
 * - Adaptive Height: Fixed on desktop (219px), auto on mobile.
 * - Responsive Padding: Scaled from px-6 (mobile) to px-[122px] (desktop).
 */
export function GetStarted() {
  return (
    <section 
      className="w-full bg-[#004D40] flex items-center justify-center overflow-hidden"
      style={{
        // Maintain the specific height on desktop but allow it to grow on mobile if content stacks
        minHeight: "219.41px", 
      }}
    >
      <div 
        className="w-full max-w-[1521.63px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[10px] 
                   px-6 md:px-12 lg:px-[122px] py-12 md:py-[58px]"
      >
        {/* Text Content Area */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-white font-inter font-bold text-[clamp(28px,4vw,48px)] leading-tight">
            Get started Today
          </h2>
          <p className="text-[#A5B9B6] font-inter text-base md:text-lg mt-1">
            Download our app now!
          </p>
        </div>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* iOS Button */}
          <button className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-all 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto">
            <img src="/assets/Union-7.svg" alt="Apple" className="w-5 h-5" />
            <span className="text-[#01382F] font-inter font-semibold text-sm md:text-base">
              Download ios
            </span>
          </button>

          {/* Android Button */}
          <button className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-all 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto">
            <img src="/assets/Union-6.svg" alt="PlayStore" className="w-4 h-4" />
            <span className="text-[#01382F] font-inter font-semibold text-sm md:text-base">
              Download Android
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}