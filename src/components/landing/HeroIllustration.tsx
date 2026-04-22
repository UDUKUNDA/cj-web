 export function HeroIllustration() {
  return (
    <div 
      className="relative mx-auto w-full max-w-[757.19px]"
      style={{
        aspectRatio: "757.19 / 500.39",
        minHeight: "clamp(240px, 50vw, 500px)",
      }}
    >
      {/* Handshake background */}
      <img
        src="/assets/hand-shake%20vector.svg"
        alt="Handshake illustration"
        className="absolute left-0 top-0 h-full w-full object-contain"
        style={{ transform: "translateY(clamp(2px, 0.6vh, 8px))" }}
      />

      {/* Icons – unchanged */}
      <img 
        src="/assets/hero-credit-card.svg" 
        alt="Credit card icon" 
        className="absolute opacity-90 animate-float"
        style={{
          left: "33%",
          top: "16%",
          width: "clamp(20px, 2.4vw, 36px)",
          height: "clamp(20px, 2.4vw, 36px)",
        }}
      />
      
      <img 
        src="/assets/hero-time.svg" 
        alt="Time icon" 
        className="absolute opacity-95 animate-float"
        style={{
          left: "52%",
          top: "18%",
          width: "clamp(40px, 4.2vw, 74px)",
          height: "clamp(40px, 4.2vw, 74px)",
          transform: "translateX(-50%)",
          animationDelay: "0.2s",
        }}
      />
      
      <img 
        src="/assets/hero-chart.svg" 
        alt="Chart icon" 
        className="absolute opacity-90 animate-float"
        style={{
          left: "74%",
          top: "26%",
          width: "clamp(20px, 2.6vw, 40px)",
          height: "clamp(20px, 2.6vw, 40px)",
          transform: "rotate(14deg)",
          animationDelay: "0.4s",
        }}
      />

      <img 
        src="/assets/hero-walet.svg" 
        alt="Wallet icon" 
        className="absolute opacity-70 animate-pulse-slow"
        style={{
          left: "74%",
          top: "78%",
          width: "clamp(20px, 2.4vw, 36px)",
          height: "clamp(20px, 2.4vw, 36px)",
        }}
      />

      <img 
        src="/assets/hero-cash.svg" 
        alt="Cash icon" 
        className="absolute opacity-65 animate-pulse-slow"
        style={{
          left: "65%",
          top: "82%",
          width: "clamp(20px, 2.4vw, 36px)",
          height: "clamp(20px, 2.4vw, 36px)",
        }}
      />

      <img 
        src="/assets/hero-chart-2.svg" 
        alt="Chart icon" 
        className="absolute opacity-60 animate-pulse-slow"
        style={{
          left: "28%",
          top: "80%",
          width: "clamp(20px, 2.4vw, 36px)",
          height: "clamp(20px, 2.4vw, 36px)",
        }}
      />

      <img 
        src="/assets/hero-pir-chart.svg" 
        alt="Chart icon" 
        className="absolute opacity-60 animate-pulse-slow"
        style={{
          left: "18%",
          top: "70%",
          width: "clamp(20px, 2.4vw, 36px)",
          height: "clamp(20px, 2.4vw, 36px)",
        }}
      />

      {/* Approved Badge – repositioned to avoid overlapping the handshake on mobile */}
      <div
  className="absolute z-20 mobile-badge"
  style={{
    left: "50%",
    bottom: "clamp(10px, 3vh, 30px)",
    transform: "translateX(-50%)",
    width: "clamp(120px, 25vw, 178.92px)",
    height: "auto",
  }}
>
        <div className="relative h-[75.7px] w-full">
          {/* Futuristic glow behind the badge */}
          <div className="absolute inset-0 rounded-full bg-[#04EA6C]/10 blur-md -z-10" />
          
          <div className="absolute left-1/2 top-[42px] h-[32px] w-[calc(100%-32px)] max-w-[146px] -translate-x-1/2 border-[2px] border-[#6CFF7B] bg-transparent shadow-[0_0_8px_rgba(108,255,123,0.5)]">
            <div className="absolute inset-0 flex items-center justify-center text-[clamp(14px,3vw,21px)] font-extrabold leading-none text-[#6CFF7B] whitespace-nowrap">
              APPROVED
            </div>
          </div>
          <div className="absolute left-1/2 top-[20px] w-[calc(100%-32px)] max-w-[146px] -translate-x-1/2 whitespace-nowrap text-center text-[clamp(10px,1.8vw,12px)] font-normal leading-[20px] tracking-[0.32em] text-white">
            LOAN REQUEST
          </div>
        </div>
      </div>
      <style jsx>{`
  @media (max-width: 640px) {
    .mobile-badge {
      bottom: -60px !important;   /* ← change this value to move it up/down */
    }
  }
`}</style>
    </div>

    
  );
}