import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations - Terre & Bijou | Galerie de nos Projets",
  description: "Découvrez nos réalisations : jardins créés, aménagements paysagers, transformations d'espaces verts. Galerie photos de nos projets.",
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

