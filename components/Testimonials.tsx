"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie D.",
    location: "Lyon",
    text: "Terre & Bijou a transformé notre jardin en un véritable havre de paix. L'équipe est professionnelle, à l'écoute et respectueuse de l'environnement. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Pierre L.",
    location: "Villeurbanne",
    text: "Service d'entretien régulier impeccable. Notre jardin n'a jamais été aussi beau. L'équipe est ponctuelle et le travail est soigné. Un grand merci !",
    rating: 5,
  },
  {
    name: "Sophie M.",
    location: "Caluire",
    text: "Création d'un jardin sur mesure qui correspond exactement à nos attentes. Le suivi est excellent et les conseils très pertinents. Une entreprise de confiance.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-primary/70">
            La satisfaction de nos clients est notre priorité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-secondary p-8 rounded-lg shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-primary/80 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-primary/60 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

