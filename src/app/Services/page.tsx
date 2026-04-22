"use client";
import { motion } from 'framer-motion';
import { CreateAccount } from "@/components/landing/CreateAccount";
import { DecorIconsserviceSection } from "@/components/landing/DecorIconserviceSection";
import Footer from "@/components/landing/footer";
import { JamboNav } from "@/components/landing/JamboNav";
import { SofDevelopment } from "@/components/landing/SofDevelopment";
import { SoftwareDeve } from "@/components/landing/SoftwareDev";

export default function ServicesPage() {
  // Common motion settings for scroll reveals
  const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as const
  }
};

  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden selection:bg-[#82FB8E] selection:text-[#01382F]">
      <JamboNav />

      {/* Hero Section - KEPT 100% STATIC (No Motion) */}
      <section className="w-full bg-[#01382F] min-h-[400px] lg:min-h-[450px] relative px-4 md:px-6 overflow-hidden flex flex-col justify-center lg:block">
        
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#82FB8E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#02594A]/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full relative h-full">
          
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
              className="font-inter text-center whitespace-nowrap opacity-60"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(60px, 12vw, 150px)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(2, 89, 74, 0.8)", 
                lineHeight: "100%",
                letterSpacing: "-0.02em",
              }}
            >
              Our Services
            </h2>
          </div>

          <div className="relative z-10 pt-24 pb-12 lg:pt-0 lg:pb-0">
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
                    --content-w: 700px; 
                    --h1-top: 130px; 
                    --h1-left: 147.76px; 
                  }
                }
              `}</style>
              <h1 
                className="text-white font-inter font-extrabold leading-[1.1] tracking-tight text-center lg:text-left" 
                style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
              >
                Powering Growth Through <br className="hidden sm:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82FB8E] to-[#A5B9B6]">Technology</span> & Finance
              </h1>
            </div>

            <div
               className="relative lg:absolute mt-8 lg:mt-0"
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
                    --p-top: 270px; 
                    --p-left: 147.76px; 
                  }
                }
              `}</style>
              <p className="text-[#A5B9B6] font-inter text-base md:text-xl font-medium leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                From micro loans to online banking platforms and tailored software 
                development, we build solutions that move you forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section - MOTION ADDED */}
      <motion.section 
        {...scrollReveal}
        className="bg-white py-16 md:py-24 px-6 -mt-10 relative z-20 rounded-t-[0px] md:rounded-t-[0px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-[1440px] mx-auto">
           <DecorIconsserviceSection />
        </div>
      </motion.section>

      {/* Software Development Section - MOTION ADDED */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <SoftwareDeve />
      </motion.div>

       {/* Interacting Sections - MOTION ADDED */}
       <div className="relative w-full bg-white">
           <motion.div 
             {...scrollReveal}
             className="relative z-0"
           >
               <SofDevelopment />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative z-10"
           >
              <CreateAccount />
           </motion.div>
           
           <Footer />
       </div>
    </div>
  );
}