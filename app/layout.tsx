import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetlifyIdentityRedirect from "@/components/NetlifyIdentityRedirect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Terre et Bijou - Entretien et Aménagement de Jardins | Espaces Verts",
  description: "Terre et Bijou, votre expert en entretien et aménagement de jardins. Création, taille, tonte, élagage et remise en état d'espaces verts. Devis gratuit.",
  keywords: "jardin, espaces verts, entretien jardin, aménagement jardin, taille, tonte, élagage, paysagiste, création jardin",
  authors: [{ name: "Terre et Bijou" }],
  openGraph: {
    title: "Terre et Bijou - Entretien et Aménagement de Jardins",
    description: "Expert en entretien et aménagement de jardins. Création, taille, tonte, élagage et remise en état d'espaces verts.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Terre et Bijou",
              "description": "Expert en entretien et aménagement de jardins",
              "url": "https://terre-et-bijou.fr",
              "telephone": "+33-XX-XX-XX-XX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
              },
              "geo": {
                "@type": "GeoCoordinates",
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Redirection post-login Netlify Identity → /admin/ (Decap CMS). */}
        <NetlifyIdentityRedirect />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

