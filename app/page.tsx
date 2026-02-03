import HeroSection from "@/components/home/HeroSection";
import TrustedUniversitiesSection from "@/components/home/TrustedUniversitiesSection";
import WhyStudySection from "@/components/home/WhyStudySection";
import FlagshipProgramsSection from "@/components/home/FlagshipProgramsSection";
import PartnerUniversitiesSection from "@/components/home/PartnerUniversitiesSection";
import CampusLifeSection from "@/components/home/CampusLifeSection";
import LiveAdmissionMap from "@/components/home/LiveAdmissionMap";
import MentorsSection from "@/components/home/MentorsSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import StepsSection from "@/components/home/StepsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedUniversitiesSection />
      <WhyStudySection />
      <LiveAdmissionMap />
      <FlagshipProgramsSection />
      <PartnerUniversitiesSection />
      <CampusLifeSection />
      <MentorsSection />
      <SuccessStoriesSection />
      <CtaSection />
      <StepsSection />
    </main>
  );
}
