"use client";
import React from "react";

/**
 * Footer Component
 * Background Color: #00362D
 * Accent Green Color: #82FB8E
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[#00362D] text-white font-inter">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
  <img
    src="/assets/ACCESS_DENIED-04.svg"
    alt="Credit Jambo Logo"
    className="w-[255px] h-[46px] object-contain opacity-100"
  />
</div>
            <p className="text-[#82FB8E] font-semibold text-lg italic">
              Growing with you...
            </p>
            <p className="text-gray-300 leading-relaxed max-w-xs mt-4">
              Committed to providing secure, transparent, and inclusive financial services for all.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[#82FB8E] font-bold text-xl">Contact us</h3>
            
            <div className="space-y-1">
              <p className="text-[#82FB8E] font-medium">Address:</p>
              <p className="text-gray-300">NM 233 St, Nyamagumba | Musanze - Rwanda</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-9">
              <div className="space-y-1">
                <p className="text-[#82FB8E] font-medium">General Inquiries:</p>
                <a href="tel:+250788268451" className="text-gray-300 border-b border-gray-500 hover:text-[#82FB8E] transition-colors block w-fit">
                  +250 788 268 451
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[#82FB8E] font-medium">Customer Care:</p>
                <a href="mailto:hello@creditjambo.com" className="text-gray-300 border-b border-gray-500 hover:text-[#82FB8E] transition-colors block w-fit">
                  hello@creditjambo.com
                </a>
              </div>
            </div>

            <p className="text-[#82FB8E] text-sm font-medium mt-4">
              Licensed NDSFP by National Bank of Rwanda
            </p>
          </div>

          {/* Column 3: Newsletter & Socials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#82FB8E] font-bold text-xl">Our Privacy & Cookies Policy</h3>
            <p className="text-gray-300">Sign up to get the latest news on our products.</p>
            
            {/* Subscription Form */}
            <div className="border border-[#82FB8E] rounded-xl overflow-hidden mt-2 max-w-[340px]">
              <div className="p-3 bg-[#002B24] flex flex-col">
                <label className="text-xs text-gray-400 px-1">Email:</label>
                <input 
                  type="email" 
                  placeholder="youremail@gmail.com" 
                  className="bg-transparent border-none outline-none text-white text-sm p-1 placeholder:text-gray-500"
                />
              </div>
              <button className="w-full bg-[#82FB8E] text-[#00362D] font-bold py-3.5 flex items-center justify-center gap-2 hover:bg-[#a2ffad] transition-colors">
                Subscribe 
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <p className="text-[#82FB8E] font-medium mb-4">Social Media:</p>
              <div className="flex gap-4">
                {/* Replace src paths with your actual asset locations */}
                <SocialIcon src="/assets/whatsapp.svg" alt="WhatsApp" />
                <SocialIcon src="/assets/instagram.svg" alt="Instagram" />
                <SocialIcon src="/assets/linked.svg" alt="LinkedIn" />
                <SocialIcon src="/assets/facebook.svg" alt="Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black py-6 border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white border-b border-gray-700">Terms & Conditions</a>
          <span className="hidden md:inline">|</span>
          <p>Credit Jambo Ltd © 2025</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Local Icon Helper
 */
function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:bg-[#82FB8E] transition-all transform hover:-translate-y-1 active:scale-95"
    >
      <img
  src={src}
  alt={alt}
  className="w-6 h-6 object-contain brightness-0"
/>
    </a>
  );
}