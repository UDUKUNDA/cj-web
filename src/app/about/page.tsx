"use client";
import { CreateAccount } from "@/components/landing/CreateAccount";
import { CreateAccountforbusiness } from "@/components/landing/CreateAccountforbusiness";
import Footer from "@/components/landing/footer";
import { GetStarted } from "@/components/landing/GetStarted";
import { JamboNav } from "@/components/landing/JamboNav";
import { MoveRight } from "lucide-react";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      <JamboNav />

      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center py-12 md:py-24 px-4 overflow-hidden">
        <div className="relative w-full max-w-[1420px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex justify-start">
            <h1 
              className="font-extrabold leading-tight transition-all duration-300 text-[#004D40]"
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
              }}
            >
              Bridging Africa's financial gap for the unbanked.
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-base leading-relaxed text-[#343434] max-w-[616px]">
              <p>
                Credit Jambo, licensed NDFSP by the National Bank of Rwanda,
                offers affordable and accessible financial services to low-income
                earners and SMEs across Rwanda and Africa, fostering financial
                inclusion and supporting the continent's economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full relative pb-12 lg:pb-24 overflow-hidden">
        
        {/* Background Image Container */}
        <div className="w-full  flex justify-center px-3">
          <div className="relative w-full max-w-[2990px] h-[700px] md:h-[900px] lg:h-[700px] overflow-hidden rounded-[12px]">
            <img 
              src="/assets/Maskgroup.svg" 
              alt="Team" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Cards Container */}
        <div className="max-w-[1440px] mx-auto px-4 relative z-20 -mt-16 md:-mt-32 lg:-mt-48">
          <div className="flex flex-row gap-2 md:gap-5 items-stretch justify-center">
            
            {/* Our Mission Card */}
            <div className="flex flex-col items-start gap-4 md:gap-8 p-4 md:p-12 shadow-2xl bg-[#E6FFFB] w-1/2 max-w-[600px] rounded-[15px] md:rounded-[24px] border border-black/5">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <img src="/assets/ssaffaa.svg" alt="Mission" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
              </div>
              <div className="space-y-1 md:space-y-4">
                <h3 className="text-sm md:text-2xl font-bold text-[#01382F]">Our Mission</h3>
                <p className="text-[#343434] text-[10px] md:text-base font-medium leading-tight md:leading-relaxed">
                  To bridge the gap between millions of unbanked Africans and accessibility of tailored finances to fulfil their dreams of prosperity.
                </p>
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="flex flex-col items-start gap-4 md:gap-8 p-4 md:p-12 shadow-2xl bg-[#004D40] w-1/2 max-w-[600px] rounded-[15px] md:rounded-[24px]">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#12CFA7] rounded-full flex items-center justify-center shadow-md shrink-0">
                <img src="/assets/fgshshs.svg" alt="Vision" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
              </div>
              <div className="space-y-1 md:space-y-4">
                <h3 className="text-sm md:text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-gray-100 text-[10px] md:text-base font-medium leading-tight md:leading-relaxed">
                  To become the leading financial services provider in Africa, empowering individuals and businesses to achieve their financial goals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Our Values Section */}
      {/* Our Values Section */}
      <section className="w-full py-16 md:py-24 px-6 bg-[#003F35] flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Our Values</h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <ValueCard 
            span="lg:col-span-3" 
            title="Innovation" 
            icon="/assets/BULBLE.svg" 
            desc="Lorem ipsum dolor sit amet consectetur. Volutpat ultrices et et " 
          />
          <ValueCard 
            span="lg:col-span-3" 
            title="Customer centric" 
            icon="/assets/headphone.svg" 
            desc="facilisis vel morbi ut at faucibus. Convallis arcu quam ac auctor." 
          />
          <ValueCard 
            span="lg:col-span-2" 
            title="Transparency" 
            icon="/assets/search.svg" 
            desc="Lorem ipsum dolor sit amet consectetur. Massa amet feugiat vel vulputate integer." 
            small 
          />
          <ValueCard 
            span="lg:col-span-2" 
            title="Swift & Flexible" 
            icon="/assets/flash.svg" 
            desc="Lorem ipsum dolor sit amet consectetur. Consectetur et mauris quis diam. Tellus proin." 
            small 
          />
          <ValueCard 
            span="lg:col-span-2" 
            title="Community & Teamwork" 
            icon="/assets/people.svg" 
            desc="Lorem ipsum dolor sit amet consectetur. Sit vehicula ut bibendum in dolor." 
            small 
          />
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="w-full bg-[#003028] py-16 lg:py-32 px-6 overflow-hidden relative lg:min-h-[800px]">
        <div className="max-w-[1420px] mx-auto flex flex-col lg:flex-row items-start relative">
          
          <div 
            className="flex flex-col gap-4 mb-12 lg:mb-0 lg:absolute"
            style={{
              width: "var(--title-w, 100%)",
              height: "var(--title-h, auto)",
              top: "var(--title-top, 0)",
              left: "var(--title-left, 0)",
            }}
          >
            <style jsx>{`
              div {
                --title-w: 100%;
                --title-h: auto;
                --title-top: 0;
                --title-left: 0;
              }
              @media (min-width: 1024px) {
                div {
                  --title-w: 398px;
                  --title-h: 217px;
                  --title-top: 0px; 
                  --title-left: 125.3px;
                }
              }
            `}</style>
            
            <h2 
              className="text-white font-bold leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(50px, 6vw, 90px)" }}
            >
              Terms & <br /> Conditions
            </h2>
            <p className="text-[#82FB8E] text-lg md:text-xl font-medium tracking-wide">
              Click Doc to View
            </p>
          </div>

          <div 
            className="flex flex-col w-full lg:absolute"
            style={{
              width: "var(--list-w, 100%)",
              height: "var(--list-h, auto)",
              top: "var(--list-top, 0)",
              left: "var(--list-left, 0)",
            }}
          >
            <style jsx>{`
              div {
                --list-w: 100%;
                --list-h: auto;
                --list-top: 0;
                --list-left: 0;
              }
              @media (min-width: 1024px) {
                div {
                  --list-w: 662px;
                  --list-h: 348px;
                  --list-top: 0px; 
                  --list-left: 719.62px;
                }
              }
            `}</style>
            
            <ul className="flex flex-col gap-6 md:gap-8">
              {[
                { label: "Lending Terms & Conditions", sub: "(Kinyarwanda)" },
                { label: "Social Media Policy" },
                { label: "Acceptable Use Policy" },
                { label: "Customer Service Charter" },
                { label: "Workplace Anti-bullying Policy" },
                { label: "Privacy & Cookies Policy" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 md:gap-6 group cursor-pointer">
                  <span className="text-white text-2xl md:text-4xl font-light opacity-90 min-w-[30px]">
                    {index + 1}.
                  </span>
                  
                  <div className="flex flex-wrap items-baseline gap-2 border-b-[1px] border-white/30 pb-1 group-hover:border-[#82FB8E] transition-all duration-300">
                    <span 
                      className="text-white font-normal group-hover:text-[#82FB8E] transition-colors leading-tight"
                      style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                    >
                      {item.label}
                    </span>
                    {item.sub && (
                      <span className="text-white text-[10px] md:text-xs font-light opacity-60">
                        {item.sub}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>
      <CreateAccountforbusiness />
      <GetStarted />
      <Footer />
    </div>
    
  );
}

// Helper Component for Values
function ValueCard({ span, title, desc, icon, small }: { span: string, title: string, desc: string, icon?: string, small?: boolean }) {
  return (
    <div className={`${span} bg-[#003028] p-8 md:p-10 rounded-[32px] flex flex-col items-center text-center space-y-6 border border-white/5 transition-all hover:bg-[#003a31]`}>
      <div className="text-[#82FB8E] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
        {icon ? (
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        ) : (
          <div className="w-8 h-8 bg-[#82FB8E] rounded-full opacity-20" />
        )}
      </div>
      <h3 className={`${small ? 'text-xl' : 'text-2xl'} font-bold text-white`}>{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}