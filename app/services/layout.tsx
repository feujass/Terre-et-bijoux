import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Terre & Bijou | Entretien et Aménagement de Jardins",
  description: "Découvrez tous nos services : entretien de jardins, création et aménagement, taille et élagage, plantations, nettoyage. Devis gratuit.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

