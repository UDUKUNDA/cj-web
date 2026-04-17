"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
};

export function MobileMenuOverlay({ open, items, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={[
        "fixed left-0 top-0 z-[60] h-[100dvh] w-[100vw] md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div
        className={[
          "absolute inset-0",
          "bg-[radial-gradient(60%_60%_at_50%_0%,rgba(130,251,142,0.16)_0%,rgba(0,77,64,1)_55%),linear-gradient(180deg,rgba(0,77,64,1)_0%,rgba(0,37,31,1)_85%)]",
          open ? "opacity-100" : "opacity-0",
          "transition-opacity duration-200",
        ].join(" ")}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={[
          "absolute inset-x-0 top-0",
          "mx-auto h-full w-full",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          "transition-all duration-200",
        ].join(" ")}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="block flex-shrink-0" onClick={onClose}>
              <img
                src="/creditJambo.png"
                alt="Credit Jambo"
                className="object-cover object-center drop-shadow-[0_0_22px_rgba(130,251,142,0.18)]"
                style={{ width: "min(var(--cj-logo-w), calc(100vw - 104px))", height: "var(--cj-logo-h)" }}
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#82FB8E]/50"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-10 flex flex-1 flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="grid gap-3">
                {items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-lg font-medium text-white backdrop-blur transition hover:border-[#82FB8E]/40"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(80%_140%_at_50%_0%,rgba(130,251,142,0.25)_0%,rgba(0,0,0,0)_70%)]" />
                  </Link>
                ))}
              </div>

              <Link
                href="/"
                onClick={onClose}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#04EA6C] bg-[#82FB8E] px-6 py-3 text-base font-semibold text-[#01382F] shadow-[0_0_40px_rgba(130,251,142,0.25)] transition hover:bg-[#6CFF7B]"
              >
                Get started
              </Link>

              <div className="mt-8 text-center text-xs tracking-[0.25em] text-white/60">CREDIT JAMBO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
