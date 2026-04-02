"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Entretien de jardins",
    description: "Un jardin bien entretenu est un jardin qui respire la santé et la beauté. Nous proposons des prestations d'entretien régulier adaptées à vos besoins : tonte de pelouse, taille des haies, désherbage, arrosage, fertilisation et soins des plantes.",
    features: [
      "Tonte régulière de la pelouse",
      "Taille et mise en forme des haies",
      "Désherbage manuel et écologique",
      "Arrosage et fertilisation",
      "Soins des plantes et arbustes",
      "Nettoyage des allées et terrasses",
    ],
    icon: "🌿",
  },
  {
    title: "Création & Aménagement",
    description: "De la conception à la réalisation, nous créons des jardins sur mesure qui reflètent votre personnalité et s'adaptent à votre environnement. Chaque projet est unique et pensé dans les moindres détails.",
    features: [
      "Conception personnalisée",
      "Aménagement paysager complet",
      "Installation de systèmes d'arrosage",
      "Création de terrasses et allées",
      "Mise en place de clôtures et bordures",
      "Éclairage extérieur",
    ],
    icon: "🌳",
  },
  {
    title: "Taille & Élagage",
    description: "La taille et l'élagage nécessitent savoir-faire et précision. Nous pratiquons une taille douce respectueuse des arbres, assurant leur santé et leur esthétique tout en garantissant la sécurité.",
    features: [
      "Taille douce des arbres",
      "Élagage sécurisé",
      "Mise en forme des arbustes",
      "Taille de fructification",
      "Taille de rajeunissement",
      "Évacuation des déchets verts",
    ],
    icon: "✂️",
  },
  {
    title: "Plantations",
    description: "Nous sélectionnons et installons les plantes les plus adaptées à votre sol, votre climat et vos envies. Massifs fleuris, haies persistantes, arbres d'ornement : nous créons des compositions harmonieuses.",
    features: [
      "Conseil en choix de plantes",
      "Installation de massifs",
      "Plantation de haies",
      "Mise en place d'arbres",
      "Création de potagers",
      "Conseils d'entretien",
    ],
    icon: "🌱",
  },
  {
    title: "Nettoyage & Remise en état",
    description: "Votre jardin a besoin d'un grand nettoyage ? Nous intervenons pour remettre en beauté vos espaces verts : débroussaillage, nettoyage des massifs, remise en état de la pelouse, évacuation des déchets.",
    features: [
      "Débroussaillage complet",
      "Nettoyage des massifs",
      "Remise en état de pelouse",
      "Évacuation des déchets verts",
      "Nettoyage des allées",
      "Désherbage intensif",
    ],
    icon: "🧹",
  },
  {
    title: "Conseil & Suivi",
    description: "Notre expertise ne s'arrête pas à la réalisation. Nous vous accompagnons dans l'entretien et l'évolution de votre jardin avec des conseils personnalisés et un suivi régulier.",
    features: [
      "Conseils personnalisés",
      "Suivi régulier de votre jardin",
      "Planification des travaux",
      "Conseils en aménagement",
      "Diagnostic de santé des plantes",
      "Accompagnement personnalisé",
    ],
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-white/90">
              Une gamme complète de services professionnels pour tous vos besoins
              en matière d'espaces verts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-serif text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-primary/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-primary/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light">
                    <img
                      src={`https://images.unsplash.com/photo-${1416879595882 + index}?w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Besoin d'un devis pour l'un de ces services ?
          </h2>
          <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé selon
            vos besoins
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}

