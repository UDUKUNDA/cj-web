import { HeroSection } from "@/components/landing/HeroSection";
import { JamboNav } from "@/components/landing/JamboNav";
import { DecorIconsSection } from "@/components/landing/DecorIconsSection";
import { LoanOptionsSection } from "@/components/landing/LoanOptionsSection";
import { PaymentPlanSection } from "@/components/landing/PaymentPlanSection";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#004D40] snap-y snap-mandatory md:snap-none">
      <JamboNav />
      <HeroSection />
      <PaymentPlanSection />
      <DecorIconsSection />
      <LoanOptionsSection />
      <Footer />
    </main>
  );
}
