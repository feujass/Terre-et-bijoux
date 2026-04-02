import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import RealizationsPreview from "@/components/RealizationsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { getAllRealisations } from "@/lib/realisations.server";

export default function Home() {
  const realisations = getAllRealisations();

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <RealizationsPreview items={realisations} />
      <Testimonials />
      <CTA />
    </>
  );
}
