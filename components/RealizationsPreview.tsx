"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Realisation } from "@/lib/realisations.shared";

type Props = {
  /** Les 4 (ou moins) dernières réalisations, fournies par la page d’accueil (build). */
  items: Realisation[];
};

const RealizationsPreview = ({ items }: Props) => {
  const preview = items.slice(0, 4);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos créations et transformations
            d&apos;espaces verts
          </p>
        </motion.div>

        {preview.length === 0 ? (
          <p className="text-center text-primary/60 mb-12">
            Les réalisations seront bientôt affichées ici.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {preview.map((realization, index) => (
              <motion.div
                key={realization.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group overflow-hidden cursor-pointer rounded-lg"
              >
                <div className="aspect-square relative overflow-hidden">
                  {realization.image ? (
                    <Image
                      src={realization.image}
                      alt={realization.titre}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/40 text-sm">
                      Photo
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-accent text-sm font-semibold">
                        {realization.categorie}
                      </span>
                      <h3 className="text-white text-xl font-semibold">
                        {realization.titre}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/realisations"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Voir toutes nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RealizationsPreview;
