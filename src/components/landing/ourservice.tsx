"use client";
import React, { useState } from "react";

/**
 * OurService Component (Testimonials & Video Section)
 * Background color: #C7F8F5
 */
export function OurService() {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      text: '"Akazi dukora benshi badufata nkaho tudashoboye ariko kuva Credit jambo yaza twiteza imbere ntangorane"',
      name: "Habinshuti Emmanue",
      role: "Customer",
    },
    {
      text: '"Akazi dukora benshi badufata nkaho tudashoboye ariko kuva Credit jambo yaza twiteza imbere ntangorane"',
      name: "Habinshuti Emmanue",
      role: "Customer",
    },
  ];

  return (
    <section className="w-full bg-[#C7F8F5] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#004D40] font-inter text-[clamp(20px,3.5vw,28px)] leading-relaxed max-w-4xl mx-auto">
            Our community of riders, vendors, and hardworking entrepreneurs <br className="hidden md:block"/>
            trust <span className="font-bold">Credit Jambo</span> to power their growth every day.
          </h2>
          <p className="text-[#004D40] font-inter font-bold text-lg md:text-xl mt-4">
            Here’s what they say about their experience with us:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Video Section (Left) */}
          <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden group shadow-lg min-h-[350px] md:min-h-[500px] bg-black">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/lcf1gNz6SBA/maxresdefault.jpg" 
                  alt="Customer Success Story" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#98F090] rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#003F35] border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>

                {/* Video Label Overlay */}
                <div className="absolute bottom-6 left-6 text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                   <p className="text-sm font-bold uppercase tracking-widest">Credit Jambo</p>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/lcf1gNz6SBA?autoplay=1"
                title="Credit Jambo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Testimonials Section (Right) */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-6">
            {/* Left Column: Stacked Testimonials */}
            <div className="flex-1 flex flex-col gap-6">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col h-full shadow-sm border border-[#004D40]/5">
                  <p className="text-[#004D40] font-inter text-sm md:text-base leading-relaxed mb-6">
                    {item.text}
                  </p>
                  <div className="mt-auto flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-[#004D40] text-sm md:text-base">{item.name}</h4>
                      <p className="text-[#004D40]/60 text-xs md:text-sm">{item.role}</p>
                    </div>
                    {/* Replaced with quotes.svg */}
                    <img src="/assets/quotes.svg" alt="quote" className="w-10 h-10 object-contain opacity-20" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Tall Testimonial */}
            <div className="flex-1 bg-white rounded-[24px] p-6 md:p-8 flex flex-col h-full shadow-sm border border-[#004D40]/5">
              <p className="text-[#004D40] font-inter text-sm md:text-base leading-relaxed mb-6">
                "Uziko wageraga naho uparika moto kubera utabasha kubona amafaranga agura ibwishingizi bwikinyabiziga cyawe <br/><br/>
                none credit jambo byose arabicyemura ugakomeza ugakora"
              </p>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-[#004D40] text-sm md:text-base">Bugingo Daniel</h4>
                  <p className="text-[#004D40]/60 text-xs md:text-sm">Customer</p>
                </div>
                {/* Replaced with quotes.svg */}
                <img src="/assets/quotes.svg" alt="quote" className="w-10 h-10 object-contain opacity-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}