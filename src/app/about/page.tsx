"use client";
import Footer from "@/components/landing/footer";
import { GetStarted } from "@/components/landing/GetStarted";
import { JamboNav } from "@/components/landing/JamboNav";
import { motion } from "framer-motion";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      <JamboNav />

      {/* Hero Section - Eye Catching & Unique (As provided) */}
      <section className="w-full bg-white flex justify-center py-16 md:py-28 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#98F090]/10 blur-[100px] pointer-events-none" />
        <div className="relative w-full max-w-[1420px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-start"
          >
            <h1 
              className="font-extrabold leading-[1.05] transition-all duration-300 text-[#004D40] tracking-tighter"
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                textShadow: "0 2px 15px rgba(0,77,64,0.05)"
              }}
            >
              Bridging Africa's <br />
              <span className="text-[#219653] drop-shadow-sm">financial gap</span> <br />
              for the unbanked.
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="text-lg leading-relaxed text-[#343434] max-w-[616px] border-l-4 border-[#98F090] pl-6 py-2">
              <p>
                Credit Jambo, licensed NDFSP by the National Bank of Rwanda,
                offers <span className="font-semibold text-black">affordable and accessible</span> financial services to low-income
                earners and SMEs across Rwanda and Africa, fostering financial
                inclusion and supporting the continent's economic growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission & Vision Section - As provided */}
      <section className="w-full relative pb-12 lg:pb-24 overflow-hidden">
        <div className="w-full flex justify-center px-3">
          <div className="relative w-full max-w-[2990px] h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[24px] shadow-2xl">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/assets/Maskgroup.svg" 
              alt="Team" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01382F]/40 to-transparent" />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 relative z-10 -mt-10 md:-mt-32 lg:-mt-48">
          <div className="flex flex-row gap-2 md:gap-8 items-stretch justify-center">
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-start gap-4 md:gap-8 p-5 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/95 backdrop-blur-md w-1/2 max-w-[600px] rounded-[20px] md:rounded-[32px] border border-white"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#E6FFFB] rounded-2xl flex items-center justify-center shadow-inner group transition-colors">
                <img src="/assets/ssaffaa.svg" alt="Mission" className="w-6 h-6 md:w-10 md:h-10 object-contain" />
              </div>
              <div className="space-y-1 md:space-y-4">
                <h3 className="text-sm md:text-3xl font-black text-[#01382F] uppercase tracking-tighter">Our Mission</h3>
                <p className="text-[#343434] text-[10px] md:text-lg font-medium leading-tight md:leading-relaxed">
                  To bridge the gap between millions of unbanked Africans and accessibility of tailored finances to fulfil their dreams of prosperity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-start gap-4 md:gap-8 p-5 md:p-14 shadow-2xl bg-[#004D40] w-1/2 max-w-[600px] rounded-[20px] md:rounded-[32px] border border-[#12CFA7]/20 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#12CFA7]/10 blur-[40px] rounded-full" />
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#12CFA7] rounded-2xl flex items-center justify-center shadow-lg shadow-[#12CFA7]/20 shrink-0">
                <img src="/assets/fgshshs.svg" alt="Vision" className="w-6 h-6 md:w-10 md:h-10 object-contain brightness-0 invert" />
              </div>
              <div className="space-y-1 md:space-y-4 relative z-10">
                <h3 className="text-sm md:text-3xl font-black text-white uppercase tracking-tighter">Our Vision</h3>
                <p className="text-gray-100 text-[10px] md:text-lg font-medium leading-tight md:leading-relaxed opacity-90">
                  To become the leading financial services provider in Africa, empowering individuals and businesses to achieve their financial goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section - UNTOUCHED */}
      <section className="w-full py-16 md:py-24 px-6 bg-[#003F35] flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Our Values</h2>
        </div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <ValueCard span="lg:col-span-3" title="Innovation" icon="/assets/BULBLE.svg" desc="Lorem ipsum dolor sit amet consectetur. Volutpat ultrices et et " />
          <ValueCard span="lg:col-span-3" title="Customer centric" icon="/assets/headphone.svg" desc="facilisis vel morbi ut at faucibus. Convallis arcu quam ac auctor." />
          <ValueCard span="lg:col-span-2" title="Transparency" icon="/assets/search.svg" desc="Lorem ipsum dolor sit amet consectetur. Massa amet feugiat vel vulputate integer." small />
          <ValueCard span="lg:col-span-2" title="Swift & Flexible" icon="/assets/flash.svg" desc="Lorem ipsum dolor sit amet consectetur. Consectetur et mauris quis diam. Tellus proin." small />
          <ValueCard span="lg:col-span-2" title="Community & Teamwork" icon="/assets/people.svg" desc="Lorem ipsum dolor sit amet consectetur. Sit vehicula ut bibendum in dolor." small />
        </div>
      </section>

      {/* Section 4: Terms & Conditions Section - ENHANCED & EYE-CATCHING */}
      <section id="terms-and-conditions"  className="w-full bg-[#003028] py-16 lg:py-32 px-6 overflow-hidden relative lg:min-h-[800px]">
        {/* Subtle ambient glow for section separation */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#82FB8E]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[1420px] mx-auto flex flex-col lg:flex-row items-start relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 mb-12 lg:mb-0 lg:absolute" 
            style={{ width: "var(--title-w, 100%)", height: "var(--title-h, auto)", top: "var(--title-top, 0)", left: "var(--title-left, 0)" }}
          >
            <style jsx>{`
              div { --title-w: 100%; --title-h: auto; --title-top: 0; --title-left: 0; }
              @media (min-width: 1024px) { div { --title-w: 398px; --title-h: 217px; --title-top: 0px; --title-left: 125.3px; } }
            `}</style>
            <h2 className="text-white font-bold leading-[0.9] tracking-tight" style={{ fontSize: "clamp(50px, 6vw, 90px)" }}>Terms & <br /> Conditions</h2>
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[#82FB8E] text-lg md:text-xl font-medium tracking-wide"
            >
              Click Doc to View
            </motion.p>
          </motion.div>

          <div className="flex flex-col w-full lg:absolute" style={{ width: "var(--list-w, 100%)", height: "var(--list-h, auto)", top: "var(--list-top, 0)", left: "var(--list-left, 0)" }}>
            <style jsx>{`
              div { --list-w: 100%; --list-h: auto; --list-top: 0; --list-left: 0; }
              @media (min-width: 1024px) { div { --list-w: 662px; --list-h: 348px; --list-top: 0px; --list-left: 719.62px; } }
            `}</style>
            <motion.ul 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {[
                { label: "Lending Terms & Conditions", sub: "(Kinyarwanda)", pdf: "/assets/Credit Jambo T&Cs.pdf" },
                { label: "Social Media Policy", pdf: "/assets/CreditJambo - Social Media Policy.pdf" },
                { label: "Acceptable Use Policy", pdf: "/assets/CreditJambo - Acceptable Use Policy.pdf" },
                { label: "Customer Service Charter", pdf: "/assets/CreditJambo - Customer Service Charter.pdf" },
                { label: "Workplace Anti-bullying Policy", pdf: "/assets/CreditJambo - Workplace Anti-Bullying Policy.pdf" },
                { label: "Privacy & Cookies Policy", pdf: "/assets/CreditJambo_Privacy and Cookies Policy.pdf" },
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 md:gap-6 group cursor-pointer transition-all duration-300"
                >
                  <a 
                    href={item.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 md:gap-6 w-full no-underline"
                  >
                    <span className="text-white text-2xl md:text-4xl font-light opacity-30 group-hover:opacity-100 group-hover:text-[#82FB8E] min-w-[40px] transition-all duration-300">
                      {(index + 1).toString().padStart(2, '0')}.
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2 border-b-[1px] border-white/20 pb-1 group-hover:border-[#82FB8E] transition-all duration-300 w-full">
                      <span className="text-white font-normal group-hover:text-[#82FB8E] transition-colors leading-tight" style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}>
                        {item.label}
                      </span>
                      {item.sub && <span className="text-white text-[10px] md:text-xs font-light opacity-60 group-hover:opacity-100">{item.sub}</span>}
                    </div>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
  
      </section>
      
      <GetStarted />
      <Footer />
    </div>
  );
}

function ValueCard({ span, title, desc, icon, small }: { span: string, title: string, desc: string, icon?: string, small?: boolean }) {
  return (
    <div className={`${span} group relative overflow-hidden bg-[#003028] p-8 md:p-10 rounded-[32px] flex flex-col items-center text-center space-y-6 border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(130,251,142,0.1)]`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(130,251,142,0.08) 0%, transparent 70%)' }} />
      <div className="text-[#82FB8E] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_10px_rgba(130,251,142,0.5)]">
        {icon ? <img src={icon} alt={title} className="w-full h-full object-contain" /> : <div className="w-8 h-8 bg-[#82FB8E] rounded-full opacity-20" />}
      </div>
      <div className="relative z-10 space-y-4">
        <h3 className={`${small ? 'text-xl' : 'text-2xl'} font-bold text-white transition-colors duration-300 group-hover:text-[#82FB8E]`}>{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base transition-colors duration-300 group-hover:text-gray-200">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#82FB8E]/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
}
