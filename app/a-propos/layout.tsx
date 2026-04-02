import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - Terre & Bijou | Notre Histoire et Nos Valeurs",
  description: "Découvrez l'histoire de Terre & Bijou, nos valeurs, notre engagement écologique et nos certifications. Votre expert en espaces verts.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

