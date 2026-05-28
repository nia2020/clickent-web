import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { ServiceSection } from "@/components/ServiceSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WorksPreview } from "@/components/WorksPreview";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsSection />
      <ServiceSection />
      <ProcessSection />
      <WorksPreview />
      <CTASection />
    </>
  );
}
