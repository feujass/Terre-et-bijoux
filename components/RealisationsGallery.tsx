"use client";

import { motion } from "framer-motion";
import type { Realisation } from "@/lib/realisations.shared";

type Props = {
  items: Realisation[];
};

/**
 * Galerie des réalisations : grille responsive (1 / 2 / 3 colonnes).
 * Les données proviennent du Markdown (build) — pas d’appel API.
 */
export default function RealisationsGallery({ items }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-white/90">
              Découvrez quelques-unes de nos créations et transformations
              d&apos;espaces verts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille : 1 col mobile, 2 tablette, 3 desktop */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <p className="text-center text-primary/70 text-lg">
              Aucune réalisation pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((realization, index) => (
                <motion.article
                  key={realization.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="group relative overflow-hidden cursor-pointer rounded-lg shadow-sm bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {realization.image ? (
                      <img
                        src={realization.image}
                        alt={realization.titre}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-primary/15 flex items-center justify-center text-primary/50 text-sm"
                        aria-hidden
                      >
                        Image à venir
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-accent text-sm font-semibold mb-2">
                        {realization.categorie}
                      </span>
                      <h2 className="text-white text-xl font-semibold mb-2">
                        {realization.titre}
                      </h2>
                      <p className="text-white/90 text-sm line-clamp-4">
                        {realization.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
