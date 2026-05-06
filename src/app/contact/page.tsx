"use client";
import { motion } from 'framer-motion';
import { ContactCard } from "@/components/landing/ContactCard";
import Footer from "@/components/landing/footer";
import { GetStarted } from "@/components/landing/GetStarted";
import { JamboNav } from "@/components/landing/JamboNav";
import { MapSection } from "@/components/landing/MapSection";

export default function AboutPage() {
  // Animation variant for the title text
  const titleLetter = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <JamboNav />

      {/* Header Section */}
      <section 
        className="w-full bg-[#003F35] flex justify-center transition-all duration-300 relative overflow-hidden" 
        style={{ maxWidth: "1812px" }}
      >
        {/* Subtle background glow */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[80%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div 
          className="w-full max-w-[1200px] px-6 md:px-0 pt-10 md:pt-20 pb-48 md:pb-80 min-h-[400px] md:min-h-[654px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10"
        >
          {/* Left Side: Title with Staggered Fade */}
          <div className="text-center md:text-left">
            <motion.h1 
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.05 }}
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight"
            >
              {"Talk to us".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={titleLetter}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Right Side: Description */}
          <div className="flex justify-center md:justify-end">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-md text-center md:text-left"
            >
              <span className="text-white font-light italic">Have questions?</span> 
              {" "}If you need any general information, please complete this form. 
              <motion.span 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#82FB8E] block mt-2 font-medium"
              >
                It will be an honor to help you.
              </motion.span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Light Mint Section */}
      <section 
        className="w-full bg-[#E6FFFB] flex flex-col items-center pb-24"
        style={{ maxWidth: "1812px" }}
      >
        {/* Contact Card Overlap */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1200px] px-6 md:px-0 -mt-40 md:-mt-80 relative z-10"
        >
          <ContactCard />
        </motion.div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full mt-12"
        >
          <MapSection />
        </motion.div>
      </section>

      <GetStarted />
      <Footer />
    </main>
  );
}
