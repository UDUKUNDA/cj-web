import Image from "next/image";

export default function Activity() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div>
          <h2 className="mb-6 text-4xl font-medium leading-[1.04] text-black md:text-[4.5rem]">
            More activity means
            <br />
            higher limits
          </h2>
          <p className="mb-4 text-base leading-relaxed text-black/80 md:text-[1.7rem]">
            Build your credit history through consistent usage and timely repayments.
          </p>
          <p className="text-base leading-relaxed text-black/80 md:text-[1.7rem]">
            Unlock higher limits and enjoy improved financial flexibility as you grow with us.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-24 opacity-45"><Image src="/assets/hero-pir-chart.svg" alt="" width={42} height={42} /></div>
          <div className="absolute -left-5 bottom-20 opacity-45"><Image src="/assets/hero-time.svg" alt="" width={42} height={42} /></div>
          <div className="absolute -right-7 top-20 opacity-45"><Image src="/assets/hero-chart.svg" alt="" width={42} height={42} /></div>
          <div className="absolute -right-6 bottom-24 opacity-45"><Image src="/assets/hero-credit-card.svg" alt="" width={42} height={42} /></div>
          <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2 opacity-70">
            <Image src="/assets/confeti.png" alt="" width={190} height={190} />
          </div>
          <Image
            src="/assets/phone-group.png"
            alt="Credit Jambo app activity preview"
            width={500}
            height={980}
            className="relative z-20 mx-auto w-full max-w-[430px]"
          />
        </div>
      </div>
    </section>
  );
}
