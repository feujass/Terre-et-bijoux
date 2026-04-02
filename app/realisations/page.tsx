import RealisationsGallery from "@/components/RealisationsGallery";
import { getAllRealisations } from "@/lib/realisations.server";

/**
 * Page statique : les réalisations sont lues depuis `content/realisations/*.md` au build
 * (Decap CMS pousse les fichiers sur Git → Netlify rebuild).
 */
export default function RealisationsPage() {
  const realisations = getAllRealisations();

  return <RealisationsGallery items={realisations} />;
}
