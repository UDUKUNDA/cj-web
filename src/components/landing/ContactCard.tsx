"use client";
import React from 'react';

export function ContactCard() {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[40px] shadow-sm border border-blue-50/50 p-8 md:p-16 flex flex-col md:flex-row gap-16 md:gap-24">
      
      {/* Left Column: Contact Info */}
      <div className="flex-1 space-y-12">
        {/* Address */}
        <div className="space-y-3">
          <div className="w-8 h-8 relative">
            <img src="/assets/map.svg" alt="Map icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Visit us at Head Office</p>
            <p className="text-[#1D3D37] text-xl font-semibold">NM 233 St, Nyamagumba, Musanze, Rwanda</p>
          </div>
          <hr className="border-t border-gray-100 pt-4" />
        </div>

        {/* Phone */}
        <div className="space-y-3">
          <div className="w-8 h-8 relative">
            <img src="/assets/phone.svg" alt="Phone icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Phone</p>
            <p className="text-[#1D3D37] text-xl font-semibold">+250 788 268 451</p>
          </div>
          <hr className="border-t border-gray-100 pt-4" />
        </div>

        {/* Email */}
        <div className="space-y-3">
          <div className="w-8 h-8 relative">
            <img src="/assets/gmail.svg" alt="Email icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Email</p>
            <p className="text-[#1D3D37] text-xl font-semibold">hello@creditjambo.com</p>
          </div>
          <hr className="border-t border-gray-100 pt-4" />
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">Follow us on social media for updates</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/linked.svg" alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/instagram.svg" alt="Instagram" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/facebook.svg" alt="Facebook" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/twitter.svg" alt="Twitter" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/x.svg" alt="X" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D3D37]/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D3D37]/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Email *</label>
            <input 
              type="email" 
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D3D37]/20 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Add subject *</label>
            <input 
              type="text" 
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D3D37]/20 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea 
              rows={6}
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D3D37]/20 transition-all resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button className="bg-[#1D3D37] text-white px-8 py-3.5 rounded-xl font-medium flex items-center gap-3 hover:bg-[#152e2a] transition-colors">
              Send message
              <svg 
      className="w-5 h-5 rotate-90" 
      fill="none" 
      viewBox="0 0 24 24"
      stroke="#82FB8E" /* Green stroke color */
      style={{ 
        /* The unique "Bright Glow" filter effect */
        filter: "drop-shadow(0 0 10px rgba(130, 251, 142, 0.85)) drop-shadow(0 0 20px rgba(130, 251, 142, 0.6))"
      }}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2.5" /* Increased stroke width slightly to stand out against the glow */
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
      />
    </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}