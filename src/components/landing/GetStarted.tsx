"use client";
import React from "react";

/**
 * GetStarted Component
 * Features:
 * - Glowing green buttons with hover scale.
 * - Subtle background radial glow.
 * - Responsive layout.
 */
export function GetStarted() {
  return (
    <section 
      className="relative w-full bg-[#004D40] flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "219.41px", 
      }}
    >
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#98F090]/10 blur-[120px] rounded-full pointer-events-none" />

      <div 
        className="relative z-10 w-full max-w-[1521.63px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[10px] 
                   px-6 md:px-12 lg:px-[122px] py-12 md:py-[58px]"
      >
        {/* Text Content Area */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-white font-inter font-bold text-[clamp(28px,4vw,48px)] leading-tight tracking-tight">
            Get started Today
          </h2>
          <p className="text-[#A5B9B6] font-inter text-base md:text-lg mt-2">
            Download our app now and start your journey!
          </p>
        </div>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          
          {/* iOS Button */}
          <button className="group relative flex items-center justify-center gap-3 bg-[#98F090] transition-all duration-300 
                             hover:bg-[#b0ffaa] hover:scale-105 hover:shadow-[0_0_25px_rgba(152,240,144,0.4)] 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            
            <img src="/assets/Union-7.svg" alt="Apple" className="w-5 h-5 relative z-10" />
            <span className="text-[#01382F] font-inter font-bold text-sm md:text-base relative z-10">
              Download iOS
            </span>
          </button>

          {/* Android Button */}
          <button className="group relative flex items-center justify-center gap-3 bg-[#98F090] transition-all duration-300 
                             hover:bg-[#b0ffaa] hover:scale-105 hover:shadow-[0_0_25px_rgba(152,240,144,0.4)] 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            
            <img src="/assets/Union-6.svg" alt="PlayStore" className="w-4 h-4 relative z-10" />
            <span className="text-[#01382F] font-inter font-bold text-sm md:text-base relative z-10">
              Download Android
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}