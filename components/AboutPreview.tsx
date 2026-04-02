"use client";

import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Terre & Bijou, votre partenaire de confiance
            </h2>
            <p className="text-lg text-primary/80 mb-4">
              Depuis plusieurs années, Terre & Bijou accompagne particuliers et
              professionnels dans la création, l'aménagement et l'entretien de
              leurs espaces verts. Notre équipe passionnée allie savoir-faire
              traditionnel et techniques modernes pour transformer chaque jardin
              en un véritable écrin de verdure.
            </p>
            <p className="text-lg text-primary/80 mb-6">
              Nous nous engageons à respecter l'environnement en utilisant des
              méthodes écologiques et en favorisant la biodiversité dans tous
              nos projets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Jardin entretenu par Terre & Bijou"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

