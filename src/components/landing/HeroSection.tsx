'use client';
import { useState } from 'react';
import { HeroIllustration } from '@/components/landing/HeroIllustration';
import { StepCard } from '@/components/landing/StepCard';

export function HeroSection() {
  const [showAlertCard, setShowAlertCard] = useState(false); // State for the custom modal card

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/0 via-[#004D40]/40 to-[#00251F] pointer-events-none animate-gradient-shift" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-12 lg:py-16">
        {/* Hero Viewport - full screen on mobile */}
        <div className="hero-viewport flex flex-col items-center gap-6 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          
          {/* Left Column - Text */}
          <div className="w-full text-center lg:flex-1 lg:text-left">
            <h1
              className="text-white font-inter font-extrabold mb-4 sm:mb-6 animate-fade-up"
              style={{
                width: 'min(100%, 692.54px)',
                fontSize: 'clamp(40px, 6vw, 67.76px)',
                lineHeight: '100%',
                letterSpacing: '0em',
              }}
            >
              <div>Small Loans.</div>
              <div>Big Impact.</div>
              <div>
                Real{' '}
                <span className="relative inline-block group">
                  Growth.
                  <img
                    src="/assets/highlight.svg"
                    alt=""
                    className="pointer-events-none absolute -bottom-5 left-1/2 w-[115%] -translate-x-1/2 select-none transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
              </div>
            </h1>

            <p
              className="text-white/90 font-inter font-normal mb-6 sm:mb-8 mx-auto lg:mx-0 text-center lg:text-left animate-fade-up animation-delay-100"
              style={{
                maxWidth: 'min(100%, 406.08px)',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: '28px',
              }}
            >
              Fast, affordable, and flexible micro-loans tailored to your needs.
            </p>

            {/* Desktop / Hero CTA Button (Changed from Link to button for the custom popup) */}
            <button
              onClick={() => setShowAlertCard(true)}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#04EA6C] bg-[#82FB8E] text-black font-medium text-sm sm:text-base shadow-[0_0_32px_rgba(130,251,142,0.22)] hover:bg-[#6CFF7B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_48px_rgba(130,251,142,0.35)] active:scale-95 animate-fade-up animation-delay-200 cursor-pointer outline-none"
            >
              Get started
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="hero-illustration w-full mt-6 lg:mt-0 lg:w-1/2 animate-fade-up animation-delay-150">
            <div className="relative max-w-lg mx-auto lg:max-w-full">
              {/* Glow effect (kept) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(4,234,108,0.12)_0%,rgba(0,77,64,0)_70%)] rounded-full blur-xl" />
              <div className="relative transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(130,251,142,0.4)]">
                <HeroIllustration />
              </div>
              {/* 👇 Circle removed – this line is deleted */}
            </div>
          </div>
        </div>

        {/* Steps Section - unchanged */}
        <div className="steps-viewport mt-12 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
            <h2
              className="font-inter font-medium text-left animate-fade-up"
              style={{
                width: 'min(100%, 522px)',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '40px',
                color: '#FFFFFF',
              }}
            >
              Simple Steps to Get Your Loan
            </h2>
            <p
              className="font-inter font-normal text-left sm:text-justify max-w-md animate-fade-up animation-delay-100"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '28px',
                color: '#FFFFFF',
              }}
            >
              Our loan process is fast and reliable — you can get your loan in as little as 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            <div className="step-card-wrapper w-full animate-fade-up animation-delay-200 transition-all duration-300 hover:scale-105 hover:z-10">
              <StepCard step="1" title="Loan Request" description="Choose your preferred loan type and submit a request directly from the app." iconSrc="/assets/Frame.svg" />
            </div>
            <div className="step-card-wrapper w-full animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105 hover:z-10">
              <StepCard step="2" title="Loan Approval" description="Our system reviews your request and quickly determines your eligibility." approvedBadge />
            </div>
            <div className="step-card-wrapper w-full animate-fade-up animation-delay-400 transition-all duration-300 hover:scale-105 hover:z-10">
              <StepCard step="3" title="Loan Disbursement" description="Once approved, your loan is sent instantly to your mobile money account." iconSrc="/assets/Frame-1.svg" />
            </div>
            <div className="step-card-wrapper w-full animate-fade-up animation-delay-500 transition-all duration-300 hover:scale-105 hover:z-10">
              <StepCard step="*" title="Repayment" description="Repay your loan through flexible daily, weekly, or monthly payment options." iconSrc="/assets/Frame-2.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Launching Soon Card Modal */}
      {showAlertCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Backdrop Click Closer */}
          <div className="absolute inset-0" onClick={() => setShowAlertCard(false)} />
          
          {/* Card Frame */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-[#01382F] p-8 text-center shadow-2xl border border-[#04EA6C]/30 transition-all animate-fade-up">
            {/* Accent Glowing Ring Element */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#82FB8E]/10 mb-4">
              <svg className="h-8 w-8 text-[#82FB8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold font-inter text-white mb-2">
              We Are Launching Soon!
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-inter">
              Thank you for your interest! We are putting the final touches on our platforms. Stay tuned, secure and inclusive financial services are coming your way shortly.
            </p>

            <button
              onClick={() => setShowAlertCard(false)}
              className="w-full inline-flex justify-center items-center px-5 py-2.5 rounded-xl bg-[#82FB8E] text-[#01382F] font-semibold text-sm hover:bg-[#6CFF7B] transition-colors cursor-pointer shadow-md"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-150 { animation-delay: 0.15s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 12s ease infinite alternate;
        }
        .step-card-wrapper {
          transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .step-card-wrapper:hover {
          transform: translateY(-6px) scale(1.02);
        }

        /* ========== MOBILE‑ONLY ========== */
        @media (max-width: 640px) {
          .relative.z-10 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .hero-viewport {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1.5rem;
            margin: 0;
            padding-top: 6rem;
            padding-bottom: 0;
          }
          .steps-viewport {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0 !important;
            padding-top: 0;
            padding-bottom: 2rem;
          }
          .hero-viewport h1,
          .steps-viewport h2 {
            text-align: center !important;
            width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-viewport p,
          .steps-viewport p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .steps-viewport h2,
          .steps-viewport p {
            text-align: center !important;
          }
          .hero-viewport h1 {
            text-shadow: 0 2px 12px rgba(130, 251, 142, 0.15);
            letter-spacing: -0.01em;
          }
          .hero-viewport p {
            text-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
          }
          .steps-viewport h2 {
            text-shadow: 0 1px 8px rgba(130, 251, 142, 0.1);
            letter-spacing: -0.01em;
          }
          .steps-viewport p {
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          }
          .hero-illustration {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .steps-viewport .grid {
            gap: 1.25rem;
          }
          .step-card-wrapper {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}