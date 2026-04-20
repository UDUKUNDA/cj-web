"use client";
import { CreateAccount } from "@/components/landing/CreateAccount";
import { DecorIconsserviceSection } from "@/components/landing/DecorIconserviceSection";
import Footer from "@/components/landing/footer";
import { JamboNav } from "@/components/landing/JamboNav";
import { SofDevelopment } from "@/components/landing/SofDevelopment";
import { SoftwareDeve } from "@/components/landing/SoftwareDev";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      <JamboNav />

      {/* Hero Section */}
      <section className="w-full bg-[#01382F] min-h-[400px] lg:min-h-[450px] relative px-6 md:px-12 lg:px-24 overflow-hidden flex items-center">
        <div className="max-w-[1440px] mx-auto w-full relative py-20 flex items-center">
          
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <h2 
              className="font-inter text-center whitespace-nowrap"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(60px, 12vw, 150px)",
                color: "transparent",
                WebkitTextStroke: "1px #02594A", 
                lineHeight: "1",
              }}
            >
              Our Services
            </h2>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 w-full max-w-[700px] text-left">
            {/* Main Headline */}
            <h1 className="text-white font-inter font-semibold md:font-extrabold leading-[1.2] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[54px] mb-4">
              Powering Growth Through <br className="hidden sm:block" /> Technology & Finance
            </h1>

            {/* Sub-headline */}
            <p className="text-white/90 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-[540px]">
              From micro loans to online banking platforms and tailored software 
              development, we build solutions that move you forward.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-white py-12 md:py-20 px-6">
        <DecorIconsserviceSection />
       
      </section>
       <SoftwareDeve />
       {/* --- UPDATED PART: INTERACTING SECTIONS --- */}
       {/* Create a relative wrapper that allows content inside to overlap */}
       <div className="relative w-full">
           
           {/* Section 1: The target that will get covered */}
           <div className="relative z-0">
               <SofDevelopment />
           </div>

           {/* Section 2: The source of the overlapping phone */}
           {/* Positioned absolutely on desktop, regular flex on mobile */}
           
               <CreateAccount />
           
           
           {/* Spacer so the flow isn't broken on desktop */}
           {/* Corresponds to the height of the CreateAccount component on desktop */}
           <Footer />
       </div>
    </div>
  );
}