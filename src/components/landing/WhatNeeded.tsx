"use client";
import React from "react";

/**
 * WhatNeeded Component
 * Updated to match high-fidelity design:
 * Background: #2D5B4F
 * Card Color: #16332C
 */
export function WhatNeeded() {
  const individualRequirements = [
    "National ID",
    "Must be 18 years or older",
    "Proof of address",
    "RWF 2,000 registration fee",
    "Valid Category A driving license",
    "Yellow Card (proof of motorcycle ownership)",
    "RURA license for operating as a boda boda rider in Rwanda",
    "Active MTN Mobile Money or Airtel Money account under your name",
  ];

  const businessRequirements = [
    "ID/Passport for shareholder(s)",
    "Valid business registration certificate",
    "Up-to-date tax clearance certificate",
    "Business plan",
    "Notarized Company resolution",
    "Loan Purpose Statement",
    "Valid LPO (Local Purchase Order)",
  ];

  return (
    <section className="w-full bg-[#006151] py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-12 md:mb-16">
        <h2 className="text-white font-inter font-bold text-[clamp(28px,5vw,52px)] mb-4 leading-tight tracking-tight">
          What You Need to Get Started
        </h2>
        <p className="text-[#FFFFFF] font-inter text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
  Getting started with Credit Jambo is easy, just provide the necessary information
  below so we can verify your identity and set up your account securely.
</p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* For Individuals Card */}
        <div className="bg-[#003F35] rounded-[20px] p-8 md:p-12 border border-white/10 flex flex-col h-full shadow-2xl">
          <div className="mb-8">
            <img 
              src="/assets/Union-1.svg" 
              alt="Individual Icon" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#98F090] font-inter font-bold text-3xl mb-4">For Individuals</h3>
          <p className="text-white font-inter text-base mb-10 leading-relaxed">
            The following requirements must be met to build your KYC for registration purposes:
          </p>
          <ul className="space-y-4">
            {individualRequirements.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-white/90 font-inter text-sm md:text-base leading-snug">
                <span className="w-2 h-2 rounded-full bg-[#98F090] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* For Business Card */}
        <div className="bg-[#003F35] rounded-[20px] p-8 md:p-12 border border-white/10 flex flex-col h-full shadow-2xl">
          <div className="mb-8">
            <img 
              src="/assets/Union-5.svg" 
              alt="Business Icon" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#98F090] font-inter font-bold text-3xl mb-4">For Business</h3>
          <p className="text-white font-inter text-base mb-10 leading-relaxed">
            The following requirements must be met to build your KYC for registration purposes:
          </p>
          <ul className="space-y-4">
            {businessRequirements.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-white/90 font-inter text-sm md:text-base leading-snug">
                <span className="w-2 h-2 rounded-full bg-[#98F090] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}