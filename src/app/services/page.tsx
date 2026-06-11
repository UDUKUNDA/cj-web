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

      {/* Hero Section - Refactored to use Flexbox instead of Absolute Positioning */}
      <section className="w-full bg-[#01382F] min-h-[400px] lg:min-h-[450px] relative px-4 md:px-8 lg:px-[140px] overflow-hidden flex flex-col justify-center">
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#82FB8E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#02594A]/40 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto w-full relative flex items-center justify-center lg:justify-start min-h-[400px] lg:min-h-[450px]">
          
          {/* Background Text - Centered securely using inset */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
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

          {/* Foreground Content - Flexbox flowing naturally */}
          <div className="relative z-10 w-full flex flex-col items-center lg:items-start pt-24 pb-12 lg:py-0">
            <h1 
              className="text-white font-inter font-extrabold leading-[1.1] tracking-tight text-center lg:text-left max-w-[700px]" 
              style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
            >
              Powering Growth Through <br className="hidden sm:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82FB8E] to-[#A5B9B6]">Technology</span> & Finance
            </h1>
            
            <p className="mt-6 text-[#A5B9B6] font-inter text-base md:text-xl font-medium leading-relaxed text-center lg:text-left max-w-2xl lg:max-w-[645px]">
              From micro loans to online banking platforms and tailored software 
              development, we build solutions that move you forward.
            </p>
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