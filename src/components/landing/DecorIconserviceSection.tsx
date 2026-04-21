"use client";
import { motion } from "framer-motion";

export function DecorIconsserviceSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Column: Text */}
          <div className="w-full lg:max-w-[520px]">
            {/* Animated Headline with Glow */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(24px,3.8vw,46px)] font-bold leading-[1.08] text-black font-inter text-center lg:text-left tracking-tight"
            >
              More activity,
              <br />
              <span 
                className="text-[#219653] inline-block"
                style={{ 
                  textShadow: "0 0 15px rgba(152, 240, 144, 0.4)",
                  filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.05))"
                }}
              >
                increase the amount
              </span>
              <br />
              of your loan
            </motion.h2>
            
            {/* Subtext with subtle reveal animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-[clamp(14px,1.3vw,18px)] font-normal leading-[1.55] text-black/80 font-inter text-center lg:text-left"
            >
              <p className="hover:text-black transition-colors">Fast, flexible, and affordable loans.</p>
              <p className="hover:text-black transition-colors">for individuals and small businesses.</p>
              <br />
              <p className="font-semibold text-black relative inline-block">
                with no collateral.
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#98F090]/30"></span>
              </p>
              <p className="mt-1">Apply for a loan today.</p>
            </motion.div>

            {/* Desktop Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block mt-10"
            >
              <ReadMoreButton />
            </motion.div>
          </div>

          {/* Right Column: Visual Container (Images untouched) */}
          <div className="flex flex-col items-center w-full max-w-[760px] mx-auto">
            <div className="relative w-full aspect-[760/560] overflow-hidden">
              <img
                src="/assets/phone-group.png"
                alt="Mobile App"
                className="absolute left-1/2 top-1/2 w-[clamp(260px,40vw,470px)] -translate-x-1/2 -translate-y-1/2 select-none z-10"
              />
              <img
                src="/assets/confeti.png"
                alt=""
                className="pointer-events-none absolute left-1/2 top-[6%] w-[clamp(260px,42vw,520px)] -translate-x-1/2 select-none z-0"
              />

              {/* Decorative Vector Assets */}
              <img src="/assets/Vector-34.svg" alt="" className="pointer-events-none absolute z-20" style={{ left: "58%", top: "18%", width: "clamp(32px, 4.2vw, 70px)" }} />
              <img src="/assets/Union-133.svg" alt="" className="pointer-events-none absolute z-20" style={{ left: "86%", top: "14%", width: "clamp(38px, 5vw, 86px)" }} />
              <img src="/assets/Union-3ee.svg" alt="" className="pointer-events-none absolute z-20" style={{ left: "55%", top: "68%", width: "clamp(40px, 5vw, 86px)" }} />
              <img src="/assets/Union-23.svg" alt="" className="pointer-events-none absolute z-20" style={{ left: "16%", top: "55%", width: "clamp(38px, 4.6vw, 78px)" }} />
              <img src="/assets/Union-43.svg" alt="" className="pointer-events-none absolute z-20" style={{ left: "84%", top: "70%", width: "clamp(40px, 5vw, 88px)" }} />
            </div>

            <div className="lg:hidden mt-8">
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadMoreButton() {
  return (
    <button className="group flex items-center justify-center gap-2 bg-[#98F090] border border-[#219653]/30 hover:bg-[#82e07a] transition-all hover:shadow-[0_0_20px_rgba(152,240,144,0.4)] rounded-[8px] w-[174px] h-[53px]">
      <div className="w-5 h-5 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
        <img 
          src="/assets/Union-6.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-black font-semibold text-sm">
        Read more
      </span>
    </button>
  );
}