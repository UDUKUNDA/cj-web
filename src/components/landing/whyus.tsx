"use client";
import React from "react";

/**
 * WhyUs Component
 * Optimized for Small (Mobile) and Medium (Tablet) devices.
 * Background: #003F35
 * Card Color: #003028
 */
export function WhyUs() {
  const features = [
    {
      icon: "/assets/interest-icon.svg", 
      title: "Affordable interest rates",
      description: "Daily, weekly, or monthly plans tailored to customer income patterns.",
    },
    {
      icon: "/assets/loans-icon.svg",
      title: "Fast, simple, flexible loans",
      description: "Quick approvals and easy access to credit based on customer needs.",
    },
    {
      icon: "/assets/repayment-icon.svg",
      title: "Flexible Repayment terms",
      description: "Daily, weekly, or monthly plans tailored to customer income patterns.",
    },
    {
      icon: "/assets/access-icon.svg",
      title: "Online and offline access",
      description: "Web, mobile app, and USSD channels for anytime, anywhere use.",
    },
  ];

  return (
    <section className="w-full bg-[#003F35] py-16 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-10 md:space-y-16 lg:space-y-32 w-full">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-white font-inter font-bold text-[clamp(32px,6vw,56px)] leading-[1.1] tracking-tight">
              Why Choose us
            </h2>
            <p className="text-[#A5B9B6] font-inter text-base md:text-xl max-w-md leading-relaxed">
              Trusted by thousands of riders, vendors, and SMEs across Africa.
            </p>
          </div>

          <div className="space-y-1 md:space-y-2">
            <h3 className="text-white font-inter font-light text-[clamp(56px,10vw,80px)] leading-none tracking-tighter">
              12,000+
            </h3>
            <p className="text-[#82FB8E] font-inter font-bold text-xl md:text-3xl uppercase tracking-wide">
              Happy customers!
            </p>
          </div>
        </div>

        {/* Right Side: Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#003028] rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center space-y-4 md:space-y-6 border border-white/5"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h4 className="text-white font-inter font-bold text-lg md:text-2xl leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[#A5B9B6] font-inter text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}