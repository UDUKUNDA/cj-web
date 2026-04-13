"use client";
import { DecorIconsserviceSection } from "@/components/landing/DecorIconserviceSection";
import { JamboNav } from "@/components/landing/JamboNav";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      <JamboNav />

      {/* Hero Section */}
      <section className="w-full bg-[#01382F] min-h-[400px] lg:min-h-[400px] relative px-4 md:px-6 overflow-hidden flex flex-col justify-center lg:block">
        <div className="max-w-[1440px] mx-auto w-full relative h-full">
          
          {/* Background Text Overlay - Updated with Inter 800 */}
          <div 
            className="absolute flex items-center justify-center pointer-events-none select-none z-0 left-1/2 -translate-x-1/2 lg:translate-x-0"
            style={{
              width: "var(--bg-txt-w, 90%)",
              height: "var(--bg-txt-h, auto)",
              top: "var(--bg-txt-top, 60px)",
              left: "var(--bg-txt-left, 50%)",
            }}
          >
            <style jsx>{`
              div {
                --bg-txt-w: 90%;
                --bg-txt-top: 60px;
                --bg-txt-left: 50%;
              }
              @media (min-width: 1024px) {
                div {
                  --bg-txt-w: 941px;
                  --bg-txt-top: 40px;
                  --bg-txt-left: 285.59px;
                }
              }
            `}</style>
            <h2 
              className="font-inter text-center whitespace-nowrap"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(48px, 12vw, 146.57px)",
                color: "transparent",
                WebkitTextStroke: "1px #02594A", 
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Our Services
            </h2>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 pt-24 pb-12 lg:pt-0 lg:pb-0">
            {/* Main Headline */}
            <div
               className="relative lg:absolute flex flex-col"
               style={{
                width: "var(--content-w, 100%)",
                top: "var(--h1-top, 0px)",
                left: "var(--h1-left, 0px)",
              }}
            >
              <style jsx>{`
                div { --content-w: 100%; --h1-top: 0px; --h1-left: 0px; }
                @media (min-width: 1024px) {
                  div { 
                    --content-w: 645.05px; 
                    --h1-top: 120px; 
                    --h1-left: 147.76px; 
                  }
                }
              `}</style>
              <h1 
                className="text-white font-inter font-extrabold leading-[1.1] tracking-tight text-center lg:text-left" 
                style={{ fontSize: "clamp(30px, 6vw, 54px)" }}
              >
                Powering Growth Through <br className="hidden sm:block" /> Technology & Finance
              </h1>
            </div>

            {/* Sub-headline */}
            <div
               className="relative lg:absolute mt-6 lg:mt-0"
               style={{
                width: "var(--desc-w, 100%)",
                top: "var(--p-top, 0px)",
                left: "var(--p-left, 0px)",
              }}
            >
              <style jsx>{`
                div { --desc-w: 100%; --p-top: 0px; --p-left: 0px; }
                @media (min-width: 1024px) {
                  div { 
                    --desc-w: 645.05px; 
                    --p-top: 250px; 
                    --p-left: 147.76px; 
                  }
                }
              `}</style>
              <p className="text-[#A5B9B6] font-inter text-base md:text-xl leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                From micro loans to online banking platforms and tailored software 
                development, we build solutions that move you forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-white py-12 md:py-20 px-6">
        <DecorIconsserviceSection />
        
      </section>
    </div>
  );
}