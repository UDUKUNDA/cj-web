'use client' 
 
 export function PaymentPlanSection() {
  return (
    <section className="w-full bg-[#E6FFFB] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        {/* Responsive layout: column on mobile, row on desktop */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Cards container - on mobile: order-2 (after text), on desktop: order-1 (left) */}
          <div className="relative w-full max-w-[694.48px] mx-auto order-2 lg:order-1">
            {/* Desktop version (hidden on mobile, shown on lg) */}
            <div className="hidden lg:block relative aspect-[694.48/412]">
              {/* Daily card */}
              <div
                className="absolute flex flex-col rounded-[18.8717px] border border-[#38A8A1] bg-white"
                style={{
                  left: "11.265%",
                  top: "0%",
                  width: "77.47%",
                  height: "35.68%",
                  paddingLeft: "clamp(14px, 1.6vw, 20.6691px)",
                  paddingRight: "clamp(14px, 1.6vw, 20.6691px)",
                  paddingTop: "clamp(14px, 1.4vw, 18px)",
                  paddingBottom: "clamp(16px, 1.8vw, 23.365px)",
                  gap: "clamp(6px, 0.8vw, 8.9865px)",
                }}
              >
                <div className="flex h-full w-full items-center" style={{ gap: "clamp(14px, 1.8vw, 23.365px)" }}>
                  <div className="flex items-center justify-center rounded-[12px] border border-[#38A8A1] bg-[#E1FFFA] aspect-square w-[clamp(60px,6.2vw,84.5px)]">
                    <img src="/assets/calendar-1.svg" alt="" className="h-[clamp(38px,4.1vw,54.87px)] w-[clamp(35px,3.8vw,50.65px)]" />
                  </div>
                  <div className="flex flex-1 flex-col" style={{ gap: "clamp(4px, 0.6vw, 6.2906px)" }}>
                    <div className="text-black font-inter font-bold text-[clamp(16px,1.9vw,21.33px)] leading-[100%]">
                      Daily Payment
                    </div>
                    <div className="text-[#636363] font-inter font-normal text-[clamp(12px,1.25vw,14.38px)] leading-[21.57px]">
                      Make small, manageable payments every day to stay on track without affecting your cash flow. Perfect for riders with daily income.
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly card (central, larger) */}
              <div
                className="absolute left-0 z-10 flex flex-col rounded-[21px] border-[3.87px] border-[#38A8A1] bg-white shadow-lg"
                style={{
                  top: "32.28%",
                  width: "100%",
                  height: "35.72%",
                  paddingLeft: "clamp(16px, 1.8vw, 23px)",
                  paddingRight: "clamp(16px, 1.8vw, 23px)",
                  paddingTop: "clamp(18px, 2vw, 26px)",
                  paddingBottom: "clamp(18px, 2vw, 26px)",
                  gap: "clamp(8px, 1vw, 10px)",
                }}
              >
                <div className="flex h-full w-full items-center justify-between">
                  <div className="flex items-center" style={{ gap: "clamp(16px, 2vw, 26px)" }}>
                    <div className="flex items-center justify-center rounded-[12px] border border-[#38A8A1] bg-[#E1FFFA] aspect-square w-[clamp(66px,6.8vw,94.03px)]">
                      <img src="/assets/calendar-3.svg" alt="" className="h-[clamp(40px,4.1vw,56.08px)] w-[clamp(37px,3.8vw,51.76px)]" />
                    </div>
                    <div className="flex flex-1 flex-col" style={{ gap: "clamp(5px, 0.8vw, 7px)" }}>
                      <div className="text-black font-inter font-bold text-[clamp(18px,2.2vw,23.74px)] leading-[100%]">
                        Monthly Payment
                      </div>
                      <div className="text-[#636363] font-inter font-normal text-[clamp(12px,1.45vw,16px)] leading-[24px]">
                        A simple plan that lets you spread your repayments across the month without stress.
                      </div>
                    </div>
                  </div>
                  <img src="/assets/star.svg" alt="" className="h-[clamp(36px,4vw,50.6px)] w-[clamp(38px,4.2vw,52.47px)]" />
                </div>
              </div>

              {/* Weekly card */}
              <div
                className="absolute flex flex-col rounded-[18.8717px] border border-[#38A8A1] bg-white"
                style={{
                  left: "11.265%",
                  top: "64.32%",
                  width: "77.47%",
                  height: "35.68%",
                  paddingLeft: "clamp(14px, 1.6vw, 20.6691px)",
                  paddingRight: "clamp(14px, 1.6vw, 20.6691px)",
                  paddingTop: "clamp(18px, 3vw, 39px)",
                  paddingBottom: "clamp(16px, 1.8vw, 23.365px)",
                  gap: "clamp(6px, 0.8vw, 8.9865px)",
                }}
              >
                <div className="flex h-full w-full items-center" style={{ gap: "clamp(14px, 1.8vw, 23.365px)" }}>
                  <div className="flex items-center justify-center rounded-[12px] border border-[#38A8A1] bg-[#E1FFFA] aspect-square w-[clamp(60px,6.2vw,84.5px)]">
                    <img src="/assets/calendar-2.svg" alt="" className="h-[clamp(38px,4.1vw,54.87px)] w-[clamp(35px,3.8vw,50.65px)]" />
                  </div>
                  <div className="flex flex-1 flex-col" style={{ gap: "clamp(4px, 0.6vw, 6.2906px)" }}>
                    <div className="text-black font-inter font-bold text-[clamp(16px,1.9vw,21.33px)] leading-[100%]">
                      Weekly Payment
                    </div>
                    <div className="text-[#636363] font-inter font-normal text-[clamp(12px,1.25vw,14.38px)] leading-[21.57px]">
                      Perfect for small businesses who prefer smaller, more frequent repayment cycles.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version (visible only on mobile) – clean vertical stack */}
            <div className="lg:hidden flex flex-col gap-5">
              {/* Daily Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#38A8A1] bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[#38A8A1] bg-[#E1FFFA]">
                  <img src="/assets/calendar-1.svg" alt="" className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-inter text-xl font-bold text-black">Daily Payment</h3>
                  <p className="font-inter text-sm text-[#636363] leading-relaxed">
                    Make small, manageable payments every day to stay on track without affecting your cash flow. Perfect for riders with daily income.
                  </p>
                </div>
              </div>

              {/* Monthly Card (with star) */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border-[3px] border-[#38A8A1] bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[#38A8A1] bg-[#E1FFFA]">
                    <img src="/assets/calendar-3.svg" alt="" className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-inter text-xl font-bold text-black">Monthly Payment</h3>
                    <p className="font-inter text-sm text-[#636363] leading-relaxed">
                      A simple plan that lets you spread your repayments across the month without stress.
                    </p>
                  </div>
                </div>
                <img src="/assets/star.svg" alt="" className="h-10 w-10 shrink-0" />
              </div>

              {/* Weekly Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#38A8A1] bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[#38A8A1] bg-[#E1FFFA]">
                  <img src="/assets/calendar-2.svg" alt="" className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-inter text-xl font-bold text-black">Weekly Payment</h3>
                  <p className="font-inter text-sm text-[#636363] leading-relaxed">
                    Perfect for small businesses who prefer smaller, more frequent repayment cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right text column - centered on mobile only */}
          <div className="flex w-full max-w-[490.43px] flex-col gap-[34px] order-1 lg:order-2 mobile-text-center">
            <div className="text-[#000000] font-inter font-normal text-[clamp(30px,3.6vw,48.37px)] leading-[100%]">
              Choose the payment plan that suits you
            </div>
            <div className="text-black/80 font-inter font-normal text-[18px] leading-[28px]">
              Whether you earn daily, weekly, or monthly, Jambo lets you repay your loan in a way that aligns with your hustle.
              <br />
              <br />
              We offer you income-tailored repayment plans that match your income circle.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-text-center {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}