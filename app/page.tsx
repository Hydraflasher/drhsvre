import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WalletVerificationSection from "@/components/sections/WalletVerificationSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <FeaturesSection />
      <WalletVerificationSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}
