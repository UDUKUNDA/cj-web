"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Social media icon SVGs as components
const SocialIcons = {
  whatsapp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

export function ContactCard() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, email, message } = formData;
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `Contact Form Submission from ${fullName || email}`;
    const body = `Name: ${fullName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:hello@creditjambo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const iconVariants: Variants = {
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
    floating: {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: SocialIcons.whatsapp, 
      href: 'https://wa.me/250788268451',
      color: 'text-[#25D366] hover:text-[#25D366]'
    },
    { 
      name: 'Instagram', 
      icon: SocialIcons.instagram, 
      href: 'https://www.instagram.com/creditjambo?igshid=YmMyMTA2M2Y%3D',
      color: 'text-[#E4405F] hover:text-[#E4405F]'
    },
    { 
      name: 'LinkedIn', 
      icon: SocialIcons.linkedin, 
      href: 'https://linkedin.com/company/credit-jambo/',
      color: 'text-[#0A66C2] hover:text-[#0A66C2]'
    },
    { 
      name: 'Facebook', 
      icon: SocialIcons.facebook, 
      href: 'https://www.facebook.com/creditjambo',
      color: 'text-[#1877F2] hover:text-[#1877F2]'
    },
    { 
      name: 'X (Twitter)', 
      icon: SocialIcons.x, 
      href: 'https://x.com/CreditJambo',
      color: 'text-gray-900 hover:text-gray-900'
    }
  ];

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
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  variants={iconVariants}
                  animate={["animate", "floating"]}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -8,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-1 transition-all ${social.color}`}
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                  {/* Glow ring on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              );
            })}
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
        <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1">
              <label className="text-xs md:text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs md:text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium text-gray-700">Email *</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium text-gray-700">Message</label>
            <textarea 
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F0FDFA] border border-[#A5D1CD] rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-[#1D3D37] transition-all duration-300 resize-none md:rows-6"
            />
          </div>

          <div className="flex justify-end pt-2">
            <motion.button 
              type="submit"
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