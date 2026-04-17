export function DecorIconsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 pb-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-[520px]">
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

          <div className="relative mx-auto w-full max-w-[760px] h-[clamp(420px,55vw,640px)] overflow-visible">
            <img
              src="/assets/phone-group.png"
              alt=""
              className="absolute left-1/2 bottom-0 h-[86%] w-auto max-w-[clamp(280px,46vw,560px)] -translate-x-1/2 select-none"
            />
            <img
              src="/assets/confeti.png"
              alt=""
              className="pointer-events-none absolute left-1/2 top-[12%] w-[clamp(260px,42vw,520px)] -translate-x-1/2 select-none"
            />

            <div className="pointer-events-none absolute left-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between pl-2 sm:flex">
              <img src="/assets/Union-33.svg" alt="" className="select-none" style={{ width: "clamp(32px, 4.2vw, 70px)" }} />
              <img src="/assets/Union-23.svg" alt="" className="select-none" style={{ width: "clamp(38px, 4.6vw, 78px)" }} />
              <img src="/assets/Union-3ee.svg" alt="" className="select-none" style={{ width: "clamp(40px, 5vw, 86px)" }} />
            </div>

            <div className="pointer-events-none absolute right-0 top-[28%] bottom-[6%] hidden flex-col items-center justify-between pr-2 sm:flex">
              <img src="/assets/Union-43.svg" alt="" className="select-none" style={{ width: "clamp(40px, 5vw, 88px)" }} />
              <img src="/assets/Vector-34.svg" alt="" className="select-none" style={{ width: "clamp(32px, 4.2vw, 70px)" }} />
              <img src="/assets/Union-133.svg" alt="" className="select-none" style={{ width: "clamp(38px, 5vw, 86px)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
