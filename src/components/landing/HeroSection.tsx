import Link from "next/link";
import { HeroIllustration } from "@/components/landing/HeroIllustration";
import { StepCard } from "@/components/landing/StepCard";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/0 via-[#004D40]/50 to-[#00251F] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
        {/* Hero Content */}
        <div className="snap-start flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-8 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full text-left lg:flex-1 lg:text-left">
            <div className="translate-y-4 sm:translate-y-6 lg:translate-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[67.763px] font-extrabold leading-[1.06] tracking-[-0.02em] text-white mb-4 sm:mb-6">
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

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto text-left lg:mx-0 lg:text-left">
                Fast, affordable, and flexible micro-loans tailored to your needs.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#04EA6C] bg-[#82FB8E] text-black font-medium text-sm sm:text-base hover:bg-[#6CFF7B] transition-colors duration-200"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.06] tracking-[-0.015em] text-white text-left">
              Simple Steps to Get Your Loan
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed tracking-[0.01em] text-left sm:text-justify max-w-md">
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
