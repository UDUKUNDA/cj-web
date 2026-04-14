import { ContactCard } from "@/components/landing/ContactCard";
import { CreateAccount } from "@/components/landing/CreateAccount";
import Footer from "@/components/landing/footer";
import { GetStarted } from "@/components/landing/GetStarted";
import { JamboNav } from "@/components/landing/JamboNav";
import { MapSection } from "@/components/landing/MapSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <JamboNav />

      {/* Header Section */}
      <section 
        className="w-full bg-[#003F35] flex justify-center transition-all duration-300" 
        style={{ maxWidth: "1812px" }}
      >
        {/* CHANGED: max-w-[1200px] to match the components below */}
        <div 
          className="w-full max-w-[1200px] px-6 md:px-0 pt-10 md:pt-20 pb-48 md:pb-80 min-h-[400px] md:min-h-[654px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* Left Side: Title */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight">
              Talk to us
            </h1>
          </div>

          {/* Right Side: Description */}
          <div className="flex justify-center md:justify-end">
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-md text-center md:text-left">
              If you have questions or need any general information, 
              please complete this form to request the information you 
              need. It will be an honor to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Light Mint Section */}
      <section 
        className="w-full bg-[#E6FFFB] flex flex-col items-center pb-24"
        style={{ maxWidth: "1812px" }}
      >
        {/* Contact Card Overlap (Using 1200px) */}
        <div className="w-full max-w-[1200px] px-6 md:px-0 -mt-40 md:-mt-80 relative z-10">
          <ContactCard />
        </div>

        {/* Map Section (Using 1200px) */}
        <div className="w-full mt-12">
          <MapSection />
          <CreateAccount />
        </div>
        
      </section>
      <GetStarted />
      <Footer />
    </main>
  );
}