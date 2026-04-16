"use client";
import React from "react";

/**
 * DigitalFinance Component
 * Background: #ECFFFE
 * Custom borders: #2D8883 for Cards 1 & 2, #82FB8E for Card 3.
 */
export function DigitalFinance() {
  return (
    <section className="w-full bg-[#ECFFFE] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#004D40] font-inter text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-[#004D40]/70 font-inter text-base md:text-lg max-w-2xl mx-auto">
            We offer digital financial solutions that help individuals and 
            businesses access credit, manage finances, and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Micro-loans */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#2D8883] shadow-sm flex flex-col items-center text-center overflow-hidden h-full">
            <h3 className="text-[#004D40] font-bold text-2xl md:text-3xl mb-4 leading-tight">
              Micro-loans <br className="hidden md:block"/> to individuals & MSMEs
            </h3>
            <p className="text-[#004D40]/70 text-sm md:text-base mb-8 max-w-md">
              We provide fast and flexible micro-loans to individuals and MSMEs, 
              supporting income growth and business expansion.
            </p>
            <div className="relative w-full max-w-[500px] mt-auto">
              <img 
                src="/assets/phone-group.png" 
                alt="Jambo Cash App Mockup" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Card 2: Financial Management Systems */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#2D8883] shadow-sm flex flex-col items-center text-center h-full">
            <h3 className="text-[#004D40] font-bold text-2xl md:text-3xl mb-4 leading-tight">
              Financial management <br className="hidden md:block"/> systems
            </h3>
            <p className="text-[#004D40]/70 text-sm md:text-base mb-10 max-w-md">
              We build modern financial tools for MSMEs — helping them manage loans, 
              collections, and customer credit effortlessly.
            </p>
            
            <div className="w-full mt-auto">
                <img 
                  src="/assets/Group.svg" 
                  alt="Financial Management Statistics" 
                  className="w-full h-auto max-w-[400px] mx-auto"
                />
            </div>
          </div>

          {/* Card 3: Software Development (Full Width) */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-12 border border-[#82FB8E] shadow-sm flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 order-2 lg:order-1 flex flex-col items-center lg:items-start w-full">
              <div className="relative w-full">
                 <img 
                  src="/assets/software vector.png" 
                  alt="Software Dashboard Interface" 
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <h3 className="text-[#004D40] font-bold text-2xl md:text-3xl mb-5 leading-tight">
                Software Development <br className="hidden lg:block" /> & Consultancy
              </h3>
              <p className="text-[#004D40]/70 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                We design and develop custom financial solutions and digital tools tailored 
                to business operations, delivering reliable software built for African markets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}