"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Entretien de jardins",
    description: "Tonte, taille, désherbage et soins réguliers pour maintenir votre jardin en parfait état toute l'année.",
    icon: "🌿",
  },
  {
    title: "Création & Aménagement",
    description: "Conception et réalisation de jardins sur mesure selon vos envies et votre espace.",
    icon: "🌳",
  },
  {
    title: "Taille & Élagage",
    description: "Taille douce, élagage sécurisé et mise en forme de vos arbres et arbustes.",
    icon: "✂️",
  },
  {
    title: "Plantations",
    description: "Installation de massifs, haies, arbres et plantes adaptées à votre sol et climat.",
    icon: "🌱",
  },
  {
    title: "Nettoyage & Remise en état",
    description: "Nettoyage complet, débroussaillage et remise en beauté de vos espaces verts.",
    icon: "🧹",
  },
  {
    title: "Conseil & Suivi",
    description: "Accompagnement personnalisé pour l'entretien et l'évolution de votre jardin.",
    icon: "💡",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins en
            matière d'espaces verts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-primary/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Voir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;

