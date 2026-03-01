import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary pb-12 pt-14 text-white md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.02] md:text-8xl">
            Small Loans.
            <br />
            Big Impact.
            <br />
            <span className="border-b-4 border-white/90 pb-1">Real Growth.</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/85 md:text-[1.95rem]">
            Fast, affordable, and flexible micro-loans tailored to your needs.
          </p>
          <Link
            href="#start"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-primary transition-opacity hover:opacity-95 md:px-10 md:py-4 md:text-[1.65rem]"
          >
            Get started
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/assets/mobile device.png"
            alt="Loan request approved hero illustration"
            width={980}
            height={760}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
