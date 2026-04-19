import Link from "next/link";
import { HeroIllustration } from "@/components/landing/HeroIllustration";
import { StepCard } from "@/components/landing/StepCard";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/0 via-[#004D40]/50 to-[#00251F] pointer-events-none" />
      <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(130,251,142,0.18)_0%,rgba(4,234,108,0.06)_40%,rgba(0,0,0,0)_72%)] blur-3xl lg:hidden" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-160px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(4,234,108,0.14)_0%,rgba(0,77,64,0.06)_35%,rgba(0,0,0,0)_72%)] blur-3xl lg:hidden" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
        {/* Hero Content */}
        <div className="snap-start flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-8 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full text-center lg:flex-1 lg:text-left">
            <div className="translate-y-4 sm:translate-y-6 lg:translate-y-8">
              <h1 
                className="text-white font-inter font-extrabold mb-4 sm:mb-6"
                style={{
                  width: "min(100%, 692.54px)",
                  fontSize: "clamp(40px, 6vw, 67.76px)",
                  lineHeight: "100%",
                  letterSpacing: "0em",
                  opacity: 1
                }}
              >
                <div>Small Loans.</div>
                <div>Big Impact.</div>
                <div>
                  Real{" "}
                  <span className="relative inline-block">
                    Growth.
                    <img
                      src="/assets/highlight.svg"
                      alt=""
                      className="pointer-events-none absolute -bottom-5 left-1/2 w-[115%] -translate-x-1/2 select-none"
                    />
                  </span>
                </div>
              </h1>

              <p 
                className="text-white/90 font-inter font-normal mb-6 sm:mb-8 mx-auto text-center lg:mx-0 lg:text-left"
                style={{
                  width: "min(100%, 406.08px)",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  opacity: 1
                }}
              >
                Fast, affordable, and flexible micro-loans tailored to your needs.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#04EA6C] bg-[#82FB8E] text-black font-medium text-sm sm:text-base shadow-[0_0_32px_rgba(130,251,142,0.22)] hover:bg-[#6CFF7B] transition-colors duration-200"
            >
              Get started
            </Link>
          </div>

          {/* Right Column - Illustration (hidden on small screens) */}
          <div className="hero-illustration w-full mt-8 lg:mt-0 lg:w-1/2">
            <div className="max-w-md mx-auto lg:max-w-full">
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="snap-start mt-16 flex min-h-[calc(100svh-4rem)] flex-col justify-center sm:mt-20 lg:min-h-0 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
            <h2 
              className="font-inter font-medium text-left"
              style={{
                width: "min(100%, 522px)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                lineHeight: "40px",
                letterSpacing: "0em",
                color: "#FFFFFF",
                opacity: 1
              }}
            >
              Simple Steps to Get Your Loan
            </h2>
            <p 
              className="font-inter font-normal text-left sm:text-justify max-w-md"
              style={{
                fontSize: "20px",
                lineHeight: "28px",
                letterSpacing: "0em",
                color: "#FFFFFF"
              }}
            >
              Our loan process is fast and reliable you can get your loan in as little as 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 xl:gap-6">
            <StepCard
              step="1"
              title="Loan Request"
              description="Choose your preferred loan type and submit a request directly from the app."
              iconSrc="/assets/Frame.svg"
            />
            <StepCard
              step="2"
              title="Loan Approval"
              description="Our system reviews your request and quickly determines your eligibility."
              approvedBadge
            />
            <StepCard
              step="3"
              title="Loan Disbursement"
              description="Once approved, your loan is sent instantly to your mobile money account."
              iconSrc="/assets/Frame-1.svg"
            />
            <StepCard
              step="*"
              title="Repayment"
              description="Repay your loan through flexible daily, weekly, or monthly payment options the app."
              iconSrc="/assets/Frame-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
