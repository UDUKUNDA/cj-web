import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-[#7fd47f40] bg-[linear-gradient(135deg,rgba(8,48,37,0.98)_0%,rgba(10,58,45,0.95)_100%)] px-7 py-[0.9rem] backdrop-blur-[12px]">
      <div className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <div className="pointer-events-none absolute bottom-[-0.9rem] left-[8%] right-[8%] h-[2px] rounded-[2px] bg-[linear-gradient(90deg,transparent,rgba(127,212,127,0.6)_30%,rgba(127,212,127,0.7)_70%,transparent)] shadow-[0_0_12px_rgba(127,212,127,0.5)]" />

        <Link
          href="/"
          className="relative z-10 inline-flex items-center whitespace-nowrap text-[clamp(1.3rem,2vw,1.9rem)] leading-none font-black tracking-[0.02em]"
          aria-label="Credit Jambo"
        >
          <span className="text-[#7fd47f]">CREDI</span>
          <span className="ml-[2px] text-white">JAMBO</span>
        </Link>

        <div role="navigation" className="relative z-10 flex items-center gap-[1.1rem]">
          <Link href="/" className="inline-flex min-h-[42px] items-center px-[0.8rem] py-[0.5rem] text-[0.9rem] text-white/90 transition hover:text-[#7fd47f]">
            Home
          </Link>
          <Link href="/about" className="inline-flex min-h-[42px] items-center px-[0.8rem] py-[0.5rem] text-[0.9rem] text-white/90 transition hover:text-[#7fd47f]">
            About Us
          </Link>
          <Link href="/services" className="inline-flex min-h-[42px] items-center px-[0.8rem] py-[0.5rem] text-[0.9rem] text-white/90 transition hover:text-[#7fd47f]">
            Services
          </Link>
          <Link href="/contact" className="inline-flex min-h-[42px] items-center px-[0.8rem] py-[0.5rem] text-[0.9rem] text-white/90 transition hover:text-[#7fd47f]">
            Contact us
          </Link>
          <a
            href="#start"
            className="ml-2 inline-flex min-h-[44px] items-center justify-center rounded-[25px] bg-[linear-gradient(135deg,#7fd47f,#5cb85c)] px-[1.55rem] py-[0.72rem] text-[0.9rem] font-bold text-[#0d4d3d] shadow-[0_4px_15px_rgba(127,212,127,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(127,212,127,0.5)]"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
