"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function ContactCard() {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  // Animation for the social icons row to orchestrate children
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1, // This creates the "one by one" effect
      }
    }
  };

  // Animation for individual social icons
  const iconVariants = {
    initial: { opacity: 0, scale: 0, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    },
    // Gentle floating effect to keep them "alive"
    floating: {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[1200px] mx-auto bg-white rounded-[24px] md:rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50/50 p-6 md:p-16 flex flex-col md:flex-row gap-10 md:gap-24 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-teal-50/30 blur-[80px] rounded-full pointer-events-none" />

      {/* Left Column: Contact Info */}
      <div className="flex-1 space-y-6 md:space-y-12">
        {[
          { icon: "/assets/map.svg", label: "Visit us at Head Office", value: "NM 233 St, Nyamagumba, Musanze, Rwanda" },
          { icon: "/assets/phone.svg", label: "Phone", value: "+250 788 268 451" },
          { icon: "/assets/gmail.svg", label: "Email", value: "hello@creditjambo.com" }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="group space-y-2 md:space-y-3"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 relative transition-transform duration-300 group-hover:scale-110">
              <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-gray-500 text-xs md:text-sm font-medium">{item.label}</p>
              <p className="text-[#1D3D37] text-lg md:text-xl font-semibold group-hover:text-teal-700 transition-colors duration-300 cursor-default">
                {item.value}
              </p>
            </div>
            <hr className="border-t border-gray-100 pt-2 md:pt-4 transition-all duration-500 group-hover:border-teal-100" />
          </motion.div>
        ))}

        {/* Socials Section */}
        <div className="space-y-3 md:space-y-4">
          <p className="text-gray-600 text-xs md:text-sm font-medium">Follow us on social media</p>
          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center gap-4 md:gap-5"
          >
            {['linked', 'instagram', 'facebook', 'twitter', 'x'].map((social) => (
              <motion.a 
                key={social}
                href="#" 
                variants={iconVariants}
                animate={["animate", "floating"]} // Combines entry bounce + floating loop
                whileHover={{ 
                    scale: 1.2, 
                    y: -8,
                    filter: "drop-shadow(0 0 12px rgba(29,61,55,0.4))" 
                }}
                whileTap={{ scale: 0.9 }}
                className="relative p-1 transition-all"
              >
                <img src={`/assets/${social}.svg`} alt={social} className="w-6 h-6 md:w-7 md:h-7" />
                {/* Glow ring that appears only on hover */}
                <motion.div 
                   className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100"
                   initial={false}
                   whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Column: Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-1"
      >
        <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1">
              <label className="text-xs md:text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs md:text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium text-gray-700">Email *</label>
            <input 
              type="email" 
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium text-gray-700">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300 resize-none md:rows-6"
            />
          </div>

          <div className="flex justify-end pt-2">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(130, 251, 142, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group w-full md:w-auto justify-center bg-[#1D3D37] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg md:rounded-xl font-medium flex items-center gap-3 hover:bg-[#152e2a] transition-all"
            >
              Send message
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 rotate-90 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="#82FB8E"
                style={{ 
                  filter: "drop-shadow(0 0 10px rgba(130, 251, 142, 0.85))"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}