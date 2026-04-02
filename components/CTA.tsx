"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Prêt à transformer votre jardin ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Obtenez un devis gratuit et personnalisé pour votre projet
            d'espaces verts. Notre équipe est à votre écoute pour concrétiser
            vos rêves de jardin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-light transition-all transform hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0695425434"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

