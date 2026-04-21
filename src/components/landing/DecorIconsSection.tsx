 'use client'
 export function DecorIconsSection() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      {/* Live texture: animated gradient background (subtle, futuristic) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0fdfa] to-[#e6fffa] animate-gradient-slow pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 pb-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text column – centered on mobile */}
          <div className="w-full max-w-[520px] text-center lg:text-left mobile-text-center">
            <h2 className="text-[clamp(34px,3.8vw,56px)] font-normal leading-[1.08] text-black">
              More activity means
              <br />
              higher limits
            </h2>
            <div className="mt-8 text-[clamp(14px,1.3vw,18px)] font-normal leading-[1.55] text-black/80">
              <div>Build your credit history through</div>
              <div>consistent usage and timely repayments.</div>
              <br />
              <div>Unlock higher limits and enjoy improved</div>
              <div>financial flexibility as you grow with us.</div>
            </div>
          </div>

          {/* Illustration column – phone group centered, no bottom stick */}
          <div className="relative w-full max-w-[760px] mx-auto">
            <div className="relative aspect-[760/640] w-full">
              {/* Phone group – floating animation for live texture */}
              <img
                src="/assets/phone-group.png"
                alt=""
                className="absolute left-1/2 top-1/2 h-auto max-h-[86%] w-auto max-w-[90%] -translate-x-1/2 -translate-y-1/2 object-contain select-none animate-float-slow"
              />

              {/* Confetti – floating with slight delay */}
              <img
                src="/assets/confeti.png"
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 w-[clamp(260px,42vw,520px)] max-w-[80%] -translate-x-1/2 -translate-y-1/2 select-none animate-float-slow animation-delay-200"
              />

              {/* Left side icons – floating with different delays */}
              <div className="pointer-events-none absolute left-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between sm:flex">
                <img src="/assets/Union-33.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(32px, 4.2vw, 70px)", animationDelay: "0s" }} />
                <img src="/assets/Union-23.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(38px, 4.6vw, 78px)", animationDelay: "0.15s" }} />
                <img src="/assets/Union-3ee.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(40px, 5vw, 86px)", animationDelay: "0.3s" }} />
              </div>

              {/* Right side icons – floating with different delays */}
              <div className="pointer-events-none absolute right-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between sm:flex">
                <img src="/assets/Union-43.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(40px, 5vw, 88px)", animationDelay: "0s" }} />
                <img src="/assets/Vector-34.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(32px, 4.2vw, 70px)", animationDelay: "0.2s" }} />
                <img src="/assets/Union-133.svg" alt="" className="select-none animate-float-icon" style={{ width: "clamp(38px, 5vw, 86px)", animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 8s ease infinite;
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
        /* Mobile text centering */
        @media (max-width: 640px) {
          .mobile-text-center {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}