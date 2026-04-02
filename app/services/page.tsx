import ServicesPageClient from "@/components/ServicesPageClient";
import { getAllServices } from "@/lib/services.server";

/**
 * Contenu éditable via Decap : collection « Services » → fichiers dans content/services/.
 */
export default function ServicesPage() {
  const services = getAllServices();
  return <ServicesPageClient services={services} />;
}
