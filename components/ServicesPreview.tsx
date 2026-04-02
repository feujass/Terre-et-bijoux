"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/services.shared";

type Props = {
  services: Service[];
};

const ServicesPreview = ({ services }: Props) => {
  const ordered = [...services].sort((a, b) => a.ordre - b.ordre);

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
            matière d&apos;espaces verts
          </p>
        </motion.div>

        {ordered.length === 0 ? (
          <p className="text-center text-primary/60 mb-12">
            Les services seront affichés ici après configuration.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ordered.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icone}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.titre}
                </h3>
                <p className="text-primary/70">{service.resume}</p>
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
