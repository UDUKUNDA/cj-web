"use client";
import React, { useState, useEffect, useRef } from "react";

export function OurService() {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef(null);

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

  const featuredTestimonial = {
    text: `"Uziko wageraga naho uparika moto kubera utabasha kubona amafaranga agura ibwishingizi bwikinyabiziga cyawe \n\n none credit jambo byose arabicyemura ugakomeza ugakora"`,
    name: "Bugingo Daniel",
    role: "Customer",
  };

  const allTestimonials = [...testimonials, featuredTestimonial];

  // Auto-scroll logic for mobile
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const autoScroll = setInterval(() => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        // If at the end, jump back to start
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll to next card (using offsetWidth as a proxy for card width)
        slider.scrollBy({ left: slider.offsetWidth * 0.85, behavior: "smooth" });
      }
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(autoScroll);
  }, []);

  const TestimonialCard = ({ item, isMobile = false }) => (
    <div className={`bg-white rounded-[24px] p-6 md:p-8 flex flex-col h-full shadow-sm border border-[#004D40]/5 ${isMobile ? 'min-w-[85vw] snap-center' : ''}`}>
      <p className="text-[#004D40] font-inter text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
        {item.text}
      </p>
      <div className="mt-auto flex justify-between items-end">
        <div>
          <h4 className="font-bold text-[#004D40] text-sm md:text-base">{item.name}</h4>
          <p className="text-[#004D40]/60 text-xs md:text-sm">{item.role}</p>
        </div>
        <img src="/assets/quotes.svg" alt="quote" className="w-10 h-10 object-contain opacity-20" />
      </div>
    </div>
  );

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Video Section */}
          <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden group shadow-lg min-h-[350px] md:min-h-[500px] bg-black">
            {!isPlaying ? (
              <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img src="https://img.youtube.com/vi/lcf1gNz6SBA/maxresdefault.jpg" alt="Success Story" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#98F090] rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#003F35] border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/lcf1gNz6SBA?autoplay=1" title="Video" frameBorder="0" allowFullScreen></iframe>
            )}
          </div>

          {/* 1. MOBILE ONLY SLIDER with Auto-Scroll Ref */}
          <div 
            ref={scrollRef}
            className="flex md:hidden overflow-x-auto pb-4 snap-x snap-mandatory gap-4 scrollbar-hide scroll-smooth"
          >
            {allTestimonials.map((t, i) => (
              <TestimonialCard key={i} item={t} isMobile />
            ))}
          </div>

          {/* 2. PC ONLY LAYOUT (Exactly as original) */}
          <div className="hidden md:flex lg:col-span-6 flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              {testimonials.map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
            <div className="flex-1">
              <TestimonialCard item={featuredTestimonial} />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}