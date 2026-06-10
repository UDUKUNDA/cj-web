"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * CreateAccount Component
 * Features: 
 * - Background color: #E6FFFB
 * - Fixed Desktop: 1338.57px x 260.95px
 * - Responsive Mobile: Maintain overlap and centered alignment
 * - Device-specific centered toast notification for app availability
 */
export function CreateAccount() {
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
    <section className="w-full relative px-4 md:px-6 flex justify-center py-16 md:py-20 lg:py-0 lg:pb-24 bg-[#E6FFFB]">
      {/* Toast Notification - Centered with Backdrop */}
      <AnimatePresence>
        {showToast && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowToast(false)}
            />
            
            {/* Toast Modal - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-[#98F090] to-[#7DD87A] text-[#01382F] 
                         px-6 sm:px-10 py-6 sm:py-8 rounded-2xl shadow-2xl 
                         flex flex-col items-center text-center gap-4 sm:gap-5 max-w-[90vw] sm:max-w-md border border-white/20 backdrop-blur-sm"
            >
              {/* Device-specific icon */}
              <div className="flex-shrink-0">
                {toastMessage.icon === "ios" ? (
                  <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                ) : (
                  <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5a1.5 1.5 0 003 0V19h2v3.5a1.5 1.5 0 003 0V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.96 5.96 0 0012 1c-1.02 0-1.98.26-2.82.71L7.7.22c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3A5.98 5.98 0 006 7h12c0-1.54-.58-2.94-1.53-4.01zM12 3c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"/>
                  </svg>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-bold text-lg sm:text-xl mb-2">{toastMessage.title}</p>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">{toastMessage.message}</p>
              </div>
              
              <button 
                onClick={() => setShowToast(false)}
                className="mt-2 bg-[#01382F] text-white hover:bg-[#012520] transition-colors rounded-xl px-8 py-2.5 font-semibold text-sm"
              >
                Got it!
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full max-w-[1440px] flex justify-center">
        <div
          className="bg-[#004D40] rounded-[32px] md:rounded-[40px] mt-[40px] md:mt-[60px] lg:mt-[65px] relative w-full lg:w-[1338.57px] min-h-[340px] md:min-h-[380px] lg:min-h-[200px] lg:h-[260.95px] flex items-center z-10"
        >
          <div className="container mx-auto px-6 md:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10 py-10 md:py-12 lg:py-0 h-full">
            <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-6 md:mt-8 lg:mt-0 space-y-4 md:space-y-5">
              <h2 className="text-white font-inter font-bold text-[clamp(28px,3vw,36px)] leading-tight mb-3">
                Create account
              </h2>
              <p className="text-[#A5B9B6] font-inter text-[clamp(14px,1vw,16px)] leading-relaxed max-w-[480px] mb-8 mx-auto lg:mx-0">
                Our mobile app is built to give you quick access to credit, easy repayments, and a clear view of your financial activity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                <button 
                  onClick={() => handleDownloadClick("ios")}
                  className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-colors rounded-xl px-5 py-2.5 min-w-[160px] w-full sm:w-auto"
                >
                  <img src="/assets/Union-7.svg" alt="Apple" className="w-4 h-4" />
                  <span className="text-[#01382F] font-inter font-semibold text-xs">Download ios</span>
                </button>

                <button 
                  onClick={() => handleDownloadClick("android")}
                  className="flex items-center justify-center gap-3 bg-[#98F090] hover:bg-[#82e07a] transition-colors rounded-xl px-5 py-2.5 min-w-[160px] w-full sm:w-auto"
                >
                  <img src="/assets/Union-6.svg" alt="PlayStore" className="w-4 h-4" />
                  <span className="text-[#01382F] font-inter font-semibold text-xs">Download Android</span>
                </button>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center lg:justify-end items-center order-1 lg:order-2 overflow-visible h-[150px] lg:h-full">
              <div 
                className="absolute lg:top-[-110px] xl:top-[-140px] lg:right-0 top-[-100px] flex justify-center items-center"
                style={{
                  width: "var(--img-width, 280px)",
                  height: "auto"
                }}
              >
                {/* CSS Variable for responsive width without touching desktop clamp */}
                <style jsx>{`
                  div { --img-width: 280px; }
                  @media (min-width: 1024px) {
                    div { --img-width: clamp(300px, 40vw, 538.81px); }
                  }
                `}</style>
                <img 
                  src="/assets/image 445 (1).svg" 
                  alt="App Interface" 
                  className="w-[var(--img-width)] lg:w-[538.81px] lg:h-[399.42px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

          {/* Background decorative flare */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}