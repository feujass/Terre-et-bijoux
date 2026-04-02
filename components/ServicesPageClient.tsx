"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services.shared";

type Props = {
  services: Service[];
};

/**
 * Page Services : données issues du Markdown (éditables dans Decap).
 */
export default function ServicesPageClient({ services }: Props) {
  return (
    <div className="min-h-screen">
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
              en matière d&apos;espaces verts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {services.length === 0 ? (
            <p className="text-center text-primary/70">
              Aucun service à afficher pour le moment.
            </p>
          ) : (
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="text-6xl mb-4">{service.icone}</div>
                    <h2 className="text-3xl font-serif text-primary mb-4">
                      {service.titre}
                    </h2>
                    <p className="text-lg text-primary/80 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.points.map((feature) => (
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
                    {service.image ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light">
                        <Image
                          src={service.image}
                          alt={service.titre}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-90"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary/50 text-sm">
                        Ajoutez une photo dans l&apos;admin (Services)
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Besoin d&apos;un devis pour l&apos;un de ces services ?
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
