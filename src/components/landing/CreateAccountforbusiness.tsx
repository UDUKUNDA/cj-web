"use client";
import React from "react";

/**
 * CreateAccount Component
 * Features: #ffffff
 * - Background color: 
 * - Fixed Desktop: 1338.57px x 260.95px
 * - Responsive Mobile: Maintain overlap and centered alignment
 */
export function CreateAccountforbusiness() {
  return (
    <section className="w-full relative px-4 md:px-6 flex justify-center py-20 lg:py-0 lg:pb-24 bg-[#ffffff]">
      <div className="w-full max-w-[1440px] flex justify-center">
          
        <div 
          className="bg-[#004D40] rounded-[40px] mt-[60px] lg:mt-[150px] relative w-full lg:w-[1338.57px] min-h-[450px] lg:min-h-[200px] lg:h-[260.95px] flex items-center z-10"
        >
          
          {/* Main Content Grid */}
          <div className="container mx-auto px-6 md:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 relative z-10 py-12 lg:py-0 h-full">
            
            {/* Left Side: Text and Buttons */}
            {/* Added order-2 on mobile so text is below the image pop-out if desired, or keep order-1 for text first. 
                I kept text first (order-1) but added padding-top to mobile to prevent image collision. */}
            <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
              <h2 className="text-white font-inter font-bold text-[clamp(28px,3vw,36px)] leading-tight mb-3">
                Create account
              </h2>
              <p className="text-[#A5B9B6] font-inter text-[clamp(14px,1vw,16px)] leading-relaxed max-w-[480px] mb-8 mx-auto lg:mx-0">
                Our mobile app is built to give you quick access to credit, easy repayments, and a clear view of your financial activity.
              </p>
              
              {/* Button Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-colors rounded-xl px-5 py-2.5 min-w-[160px] w-full sm:w-auto">
                  <img src="/assets/Union-7.svg" alt="Apple" className="w-4 h-4" />
                  <span className="text-[#01382F] font-inter font-semibold text-xs">Download ios</span>
                </button>

                <button className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-colors rounded-xl px-5 py-2.5 min-w-[160px] w-full sm:w-auto">
                  <img src="/assets/Union-6.svg" alt="PlayStore" className="w-4 h-4" />
                  <span className="text-[#01382F] font-inter font-semibold text-xs">Download Android</span>
                </button>
              </div>
            </div>

            {/* Right Side: Overlapping Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 overflow-visible h-[150px] lg:h-full">
              <div 
                className="absolute lg:top-[-110px] xl:top-[-140px] lg:right-0 top-[-100px] flex justify-center items-center"
                style={{
                  width: "var(--img-width, 280px)",
                  height: "auto"
                }}
              >
                {/* CSS Variable for responsive width without touching desktop clamp */}
                <style jsx>{`
                  div { --img-width: 280px; }
                  @media (min-width: 1024px) {
                    div { --img-width: clamp(300px, 40vw, 538.81px); }
                  }
                `}</style>
                <img 
                  src="/assets/image 445 (1).svg" 
                  alt="App Interface" 
                  className="w-[var(--img-width)] lg:w-[538.81px] lg:h-[399.42px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

          {/* Background decorative flare */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}