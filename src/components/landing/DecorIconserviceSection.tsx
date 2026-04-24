"use client";
import { motion } from "framer-motion";

export function DecorIconsserviceSection() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      {/* Background set to pure solid white */}
      <div className="absolute inset-0 bg-white pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Column: Text */}
          <div className="w-full lg:max-w-[520px] text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(24px,3.8vw,46px)] font-bold leading-[1.08] text-black font-inter tracking-tight"
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
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-[clamp(14px,1.3vw,18px)] font-normal leading-[1.55] text-black/80 font-inter"
            >
              <p>Fast, flexible, and affordable loans.</p>
              <p>for individuals and small businesses.</p>
              <br />
              <p className="font-semibold text-black relative inline-block">
                with no collateral.
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#98F090]/30"></span>
              </p>
              <p className="mt-1">Apply for a loan today.</p>
            </motion.div>

            <div className="hidden lg:block mt-10">
              <ReadMoreButton />
            </div>
          </div>

          {/* Right Column: Visual Container (Same Icon/Image Arrangement) */}
          <div className="relative w-full max-w-[760px] mx-auto">
            <div className="relative aspect-[760/640] w-full">
              {/* Phone group */}
              <img
                src="/assets/phone-group.png"
                alt="Mobile App"
                className="absolute left-1/2 top-1/2 h-auto max-h-[86%] w-auto max-w-[90%] -translate-x-1/2 -translate-y-1/2 object-contain select-none animate-float-slow"
              />

              {/* Confetti */}
              <img
                src="/assets/confeti.png"
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 w-[clamp(260px,42vw,520px)] max-w-[80%] -translate-x-1/2 -translate-y-1/2 select-none animate-float-slow animation-delay-200"
              />

              {/* Left side icons */}
              <div className="pointer-events-none absolute left-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between sm:flex">
                <img src="/assets/Union-33.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(32px, 4.2vw, 70px)", animationDelay: "0s" }} />
                <img src="/assets/Union-23.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(38px, 4.6vw, 78px)", animationDelay: "0.15s" }} />
                <img src="/assets/Union-3ee.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(40px, 5vw, 86px)", animationDelay: "0.3s" }} />
              </div>

              {/* Right side icons */}
              <div className="pointer-events-none absolute right-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between sm:flex">
                <img src="/assets/Union-43.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(40px, 5vw, 88px)", animationDelay: "0s" }} />
                <img src="/assets/Vector-34.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(32px, 4.2vw, 70px)", animationDelay: "0.2s" }} />
                <img src="/assets/Union-133.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(38px, 5vw, 86px)", animationDelay: "0.4s" }} />
              </div>
            </div>

            <div className="lg:hidden mt-8 flex justify-center">
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
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