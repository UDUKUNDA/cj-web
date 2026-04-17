import { HeroSection } from "@/components/landing/HeroSection";
import { JamboNav } from "@/components/landing/JamboNav";
import { DecorIconsSection } from "@/components/landing/DecorIconsSection";
import { PaymentPlanSection } from "@/components/landing/PaymentPlanSection";
import Footer from "@/components/landing/footer";
import { WhatNeeded } from "@/components/landing/WhatNeeded";
import { WhyUs } from "@/components/landing/whyus";
import { OurService } from "@/components/landing/ourservice";
import { DigitalFinance } from "@/components/landing/digitalfinance";
import { GetStarted } from "@/components/landing/GetStarted";
import { LoanOptionsSection } from "@/components/landing/LoanOptionsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#004D40] snap-y snap-mandatory md:snap-none">
      <JamboNav />
      <HeroSection />
       
      <DecorIconsSection />
      <LoanOptionsSection />
       <WhatNeeded />
       <WhyUs/>
       <OurService />
       <DigitalFinance />
       <GetStarted />
      <Footer />
     
    </main>
  );
}
