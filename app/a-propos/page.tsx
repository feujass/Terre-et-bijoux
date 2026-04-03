"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
              À propos de Terre & Bijou
            </h1>
            <p className="text-xl text-white/90">
              Votre partenaire de confiance pour tous vos projets d'espaces verts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-primary/80">
                <p>
                  Terre & Bijou est née de la passion pour les jardins et le
                  désir de créer des espaces verts qui allient beauté, fonctionnalité
                  et respect de l'environnement. Depuis notre création, nous
                  accompagnons particuliers et professionnels dans la réalisation
                  de leurs projets d'espaces verts.
                </p>
                <p>
                  Notre équipe, composée de professionnels expérimentés et
                  passionnés, met son savoir-faire au service de vos envies.
                  Chaque projet est unique et nous prenons le temps de comprendre
                  vos besoins pour vous proposer des solutions sur mesure.
                </p>
                <p>
                  Nous croyons qu'un jardin bien conçu et entretenu est un véritable
                  bijou qui embellit votre quotidien et contribue à votre bien-être.
                  C'est cette vision qui guide notre travail au quotidien.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement écologique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Notre Engagement Écologique
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-secondary p-8 rounded-lg space-y-4"
            >
              <p className="text-lg text-primary/80">
                Chez Terre & Bijou, nous sommes profondément engagés dans la
                préservation de l'environnement. Cet engagement se traduit par :
              </p>
              <ul className="space-y-3 text-primary/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span>
                    <strong>Utilisation de méthodes écologiques :</strong> Nous
                    privilégions le désherbage manuel, le paillage naturel et les
                    traitements biologiques.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span>
                    <strong>Favorisation de la biodiversité :</strong> Nous
                    sélectionnons des plantes locales et créons des espaces
                    propices à la faune et la flore.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span>
                    <strong>Gestion responsable des déchets :</strong> Recyclage
                    et compostage de tous les déchets verts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span>
                    <strong>Économie d'eau :</strong> Installation de systèmes
                    d'arrosage économes et conseils pour une gestion optimale de
                    l'eau.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-primary mb-6">
              Certifications & Assurances
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-left">
              <p className="text-lg text-primary/80">
                Terre & Bijou est une entreprise certifiée et assurée pour votre
                tranquillité d'esprit :
              </p>
              <ul className="space-y-2 text-primary/70">
                <li>✓ Assurance responsabilité civile professionnelle</li>
                <li>✓ Assurance décennale pour les travaux d'aménagement</li>
                <li>✓ Certification en techniques de taille et d'élagage</li>
                <li>✓ Formation continue aux méthodes écologiques</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous pour discuter de votre projet
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}

