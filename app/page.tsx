import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import RealizationsPreview from "@/components/RealizationsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { getAllRealisations } from "@/lib/realisations.server";
import { getAllServices } from "@/lib/services.server";

export default function Home() {
  const realisations = getAllRealisations();
  const services = getAllServices();

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview services={services} />
      <RealizationsPreview items={realisations} />
      <Testimonials />
      <CTA />
    </>
  );
}
