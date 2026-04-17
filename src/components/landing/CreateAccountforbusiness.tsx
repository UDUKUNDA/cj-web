"use client";
import React from "react";

/**
 * CreateAccountforbusiness Component
 * Renders the create-account CTA as either:
 * - standalone full-width section, or
 * - embedded block inside another section (e.g LoanOptionsSection).
 */
type CreateAccountforbusinessProps = {
  embedded?: boolean;
};

export function CreateAccountforbusiness({ embedded = false }: CreateAccountforbusinessProps) {
  const sectionClassName = embedded
    ? "w-full"
    : "w-full bg-[#ffffff] relative flex justify-center py-20 lg:py-0 lg:pb-24";

  const wrapperClassName = embedded
    ? "w-full h-full"
    : "w-full max-w-[1440px] px-4 md:px-6 flex justify-center";

  const cardClassName = embedded
    ? "bg-[#004D40] rounded-[32px] md:rounded-[40px] relative w-full h-full min-h-0 flex items-stretch z-10 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
    : "bg-[#004D40] rounded-[40px] mt-[60px] lg:mt-[150px] relative w-full lg:w-[1338.57px] min-h-[450px] lg:min-h-[200px] lg:h-[260.95px] flex items-center z-10";

  const phoneWrapClassName = embedded
    ? "phoneWrap phoneWrapEmbedded hidden lg:flex absolute right-8 bottom-0 h-full items-end justify-end z-40"
    : "phoneWrap absolute lg:top-[-110px] xl:top-[-140px] lg:right-0 top-[-100px] flex justify-center items-center";

  const phoneColumnClassName = embedded
    ? "hidden lg:flex min-w-0 relative justify-end items-end order-2 overflow-visible h-full"
    : "min-w-0 relative flex justify-center lg:justify-end items-end order-1 lg:order-2 overflow-visible h-[150px] lg:h-full";

  const phoneImageClassName = embedded
    ? "block w-[var(--img-width)] max-h-[calc(100%+20px)] translate-y-2 object-contain drop-shadow-2xl"
    : "w-[var(--img-width)] max-h-full object-contain drop-shadow-2xl";

  const gridClassName = embedded
    ? "w-full max-w-none px-8 md:px-12 lg:px-20 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 relative z-10 pt-10 pb-0 lg:pt-10 lg:pb-0 h-full"
    : "w-full max-w-none px-8 md:px-12 lg:px-20 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 relative z-10 pt-10 pb-6 lg:pt-10 lg:pb-4 h-full";

  const leftColumnClassName = embedded
    ? "min-w-0 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0 pb-12 lg:pb-14"
    : "min-w-0 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0 pb-10 lg:pb-12";

  return (
    <section className={sectionClassName}>
      <div className={wrapperClassName}>
        <div className={cardClassName}>
          
          {/* Main Content Grid */}
          <div className={gridClassName}>
            
            {/* Left Side: Text and Buttons */}
            <div className={leftColumnClassName}>
              <h2 className="text-white font-inter font-bold text-[clamp(28px,3vw,36px)] leading-tight mb-3">
                Create account
              </h2>
              <p className="text-[#A5B9B6] font-inter text-[clamp(14px,1vw,16px)] leading-relaxed max-w-[480px] mb-6 mx-auto lg:mx-0">
                Our mobile app is built to give you quick access to credit, easy repayments, and a clear view of your financial activity.
              </p>
              
              {/* Button Group */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4">
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
            <div className={phoneColumnClassName}>
              <div 
                className={phoneWrapClassName}
                style={{
                  width: "var(--img-width, 280px)",
                  height: "auto"
                }}
              >
                <style jsx>{`
                  .phoneWrap { --img-width: 280px; }
                  .phoneWrapEmbedded { --img-width: 280px; }
                  @media (min-width: 1024px) {
                    .phoneWrap { --img-width: clamp(300px, 40vw, 538.81px); }
                    .phoneWrapEmbedded { --img-width: clamp(320px, 34vw, 500px); }
                  }
                `}</style>
                <img 
                  src="/assets/image 445 (1).svg" 
                  alt="App Interface" 
                  className={phoneImageClassName}
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
