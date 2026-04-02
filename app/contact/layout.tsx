import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Terre & Bijou | Demandez votre Devis Gratuit",
  description: "Contactez Terre & Bijou pour un devis gratuit. Formulaire de contact, téléphone, email. Zone d'intervention : région lyonnaise.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

