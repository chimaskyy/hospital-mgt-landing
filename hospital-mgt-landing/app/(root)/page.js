import Image from "next/image";
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/Hero";
import TargetAudienceSection from "@/components/target/TargetAudience";
import RequirementsSection from "@/components/requirement/RequirementSection";
import HowToStart from "@/components/starting/HowToStart";
import SolutionsSection from "@/components/solution/Solution";
import FAQSection from "@/components/faq/Faq";

export default function Home() {
  return (
    <div className=""> 
        <HeroSection />
        <TargetAudienceSection />
        <SolutionsSection />
        <RequirementsSection />
        <HowToStart />
        {/* <SolutionsSection /> */}
        {/* <FAQSection /> */}
    </div>
  );
}
