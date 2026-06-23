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
  currentPath: string;
  onGetStartedClick: () => void; // Added new prop callback
};

export function MobileMenuOverlay({ open, items, onClose, currentPath, onGetStartedClick }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Handle mobile CTA action gracefully
  const handleMobileCta = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop routing redirection
    onClose();          // Dismiss mobile slide panel
    onGetStartedClick(); // Open the premium launch card
  };

  return (
    <>
      <style>{`
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: none;
          pointer-events: none;
        }
        @media (max-width: 767px) {
          .mob-overlay { display: block; }
        }
        .mob-overlay.open { pointer-events: auto; }

        .mob-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 15, 10, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .mob-overlay.open .mob-backdrop { opacity: 1; }

        .mob-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(300px, 85vw);
          background: #011f18;
          border-left: 1px solid rgba(130,251,142,0.1);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -24px 0 64px rgba(0,0,0,0.5);
        }
        .mob-overlay.open .mob-panel { transform: translateX(0); }

        .mob-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .mob-close {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .mob-close:hover {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        .mob-nav {
          flex: 1;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 1px;
          overflow-y: auto;
        }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 12px;
          border-radius: 9px;
          text-decoration: none;
          color: rgba(255,255,255,0.65);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          opacity: 0;
          transform: translateX(10px);
          transition:
            background 0.15s,
            color 0.15s,
            opacity 0.28s ease,
            transform 0.28s ease;
        }
        .mob-overlay.open .mob-link:nth-child(1) { opacity:1; transform:none; transition-delay:0.10s; }
        .mob-overlay.open .mob-link:nth-child(2) { opacity:1; transform:none; transition-delay:0.14s; }
        .mob-overlay.open .mob-link:nth-child(3) { opacity:1; transform:none; transition-delay:0.18s; }
        .mob-overlay.open .mob-link:nth-child(4) { opacity:1; transform:none; transition-delay:0.22s; }

        .mob-link:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
        }
        .mob-link.is-active {
          background: rgba(130,251,142,0.09);
          color: #82FB8E;
        }

        .mob-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #82FB8E;
          box-shadow: 0 0 7px rgba(130,251,142,0.8);
          flex-shrink: 0;
        }

        .mob-sep {
          margin: 6px 12px;
          height: 1px;
          background: rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .mob-cta-wrap {
          padding: 14px 12px;
          flex-shrink: 0;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.28s ease 0.26s, transform 0.28s ease 0.26s;
        }
        .mob-overlay.open .mob-cta-wrap { opacity:1; transform:none; }

        .mob-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 13px;
          border-radius: 9px;
          background: #82FB8E;
          color: #011f18;
          font-size: 15px;
          font-weight: 700;
          border: none;
          outline: none;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: filter 0.15s;
        }
        .mob-cta:hover { filter: brightness(1.07); }

        .mob-footer {
          padding: 12px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.28s ease 0.30s;
        }
        .mob-overlay.open .mob-footer { opacity:1; }
        .mob-footer-text {
          font-size: 11px;
          color: rgba(255,255,255,0.18);
          text-align: center;
          letter-spacing: 0.03em;
        }
      `}</style>

      <div className={`mob-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mob-backdrop" onClick={onClose} />

        <div role="dialog" aria-modal="true">
          <div className="mob-panel">

            {/* Header */}
            <div className="mob-header">
              <Link href="/" onClick={onClose}>
                <img
                  src="/creditJambo.png"
                  alt="Credit Jambo"
                  style={{ height: 96, width: "auto", objectFit: "contain" }}
                />
              </Link>
              <button className="mob-close" onClick={onClose} aria-label="Close menu">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="mob-nav">
              {items.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={`mob-link${isActive ? " is-active" : ""}`}
                  >
                    {item.label}
                    {isActive && <span className="mob-active-dot" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mob-sep" />

            {/* CTA (Changed from Link to button and wired to handleMobileCta) */}
            <div className="mob-cta-wrap">
              <button onClick={handleMobileCta} className="mob-cta">
                Get started
              </button>
            </div>

           {/* Footer */}
           <div className="mob-footer">
             <p className="mob-footer-text">
               © {new Date().getFullYear()} Credit Jambo
             </p>
           </div>

          </div>
        </div>
      </div>
    </>
  );
}