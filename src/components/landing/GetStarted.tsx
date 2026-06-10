"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GetStarted Component
 * Features:
 * - Glowing green buttons with hover scale.
 * - Subtle background radial glow.
 * - Responsive layout.
 * - Device-specific toast notification for app availability.
 */
export function GetStarted() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", message: "", icon: "" });

  const handleDownloadClick = (platform: string) => {
    if (platform === "ios") {
      setToastMessage({
        title: "iOS App Coming Soon!",
        message: "Our iOS app is currently in development and will be available on the App Store soon. Stay tuned!",
        icon: "ios"
      });
    } else {
      setToastMessage({
        title: "Android App Coming Soon!",
        message: "Our Android app is currently in development and will be available on Google Play soon. Stay tuned!",
        icon: "android"
      });
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section 
      className="relative w-full bg-[#004D40] flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "219.41px", 
      }}
    >
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#98F090]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-8 left-1/2 z-50 bg-gradient-to-br from-[#98F090] to-[#7DD87A] text-[#01382F] px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl 
                       flex items-start gap-3 sm:gap-4 max-w-[90vw] sm:max-w-md border border-white/20 backdrop-blur-sm"
          >
            {/* Device-specific icon */}
            <div className="flex-shrink-0 mt-0.5">
              {toastMessage.icon === "ios" ? (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              ) : (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5a1.5 1.5 0 003 0V19h2v3.5a1.5 1.5 0 003 0V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.96 5.96 0 0012 1c-1.02 0-1.98.26-2.82.71L7.7.22c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3A5.98 5.98 0 006 7h12c0-1.54-.58-2.94-1.53-4.01zM12 3c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"/>
                </svg>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm sm:text-base">{toastMessage.title}</p>
              <p className="text-xs sm:text-sm opacity-80 mt-0.5">{toastMessage.message}</p>
            </div>
            
            <button 
              onClick={() => setShowToast(false)}
              className="ml-1 text-[#01382F] hover:text-[#01382F]/70 transition-colors flex-shrink-0 mt-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="relative z-10 w-full max-w-[1521.63px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[10px] 
                   px-6 md:px-12 lg:px-[122px] py-12 md:py-[58px]"
      >
        {/* Text Content Area */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-white font-inter font-bold text-[clamp(28px,4vw,48px)] leading-tight tracking-tight">
            Get started Today
          </h2>
          <p className="text-[#A5B9B6] font-inter text-base md:text-lg mt-2">
            Download our app now and start your journey!
          </p>
        </div>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          
          {/* iOS Button */}
          <button 
            onClick={() => handleDownloadClick("ios")}
            className="group relative flex items-center justify-center gap-3 bg-[#98F090] transition-all duration-300 
                             hover:bg-[#b0ffaa] hover:scale-105 hover:shadow-[0_0_25px_rgba(152,240,144,0.4)] 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            
            <img src="/assets/Union-7.svg" alt="Apple" className="w-5 h-5 relative z-10" />
            <span className="text-[#01382F] font-inter font-bold text-sm md:text-base relative z-10">
              Download iOS
            </span>
          </button>

          {/* Android Button */}
          <button 
            onClick={() => handleDownloadClick("android")}
            className="group relative flex items-center justify-center gap-3 bg-[#98F090] transition-all duration-300 
                             hover:bg-[#b0ffaa] hover:scale-105 hover:shadow-[0_0_25px_rgba(152,240,144,0.4)] 
                             active:scale-95 rounded-xl px-8 py-4 min-w-[180px] lg:min-w-[210px] w-full sm:w-auto overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            
            <img src="/assets/Union-6.svg" alt="PlayStore" className="w-4 h-4 relative z-10" />
            <span className="text-[#01382F] font-inter font-bold text-sm md:text-base relative z-10">
              Download Android
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}