"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par une vraie API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Réinitialiser le message après 5 secondes
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90">
              Demandez votre devis gratuit et discutons de votre projet
              d'espaces verts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">
                Demandez un devis gratuit
              </h2>
              <p className="text-primary/70 mb-8">
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs délais pour discuter de votre projet.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-primary font-semibold mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-primary font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-primary font-semibold mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-primary font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    Merci ! Votre message a été envoyé. Nous vous recontacterons
                    rapidement.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                    Une erreur s'est produite. Veuillez réessayer ou nous
                    contacter directement.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif text-primary mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:terreetbijou@gmail.com"
                        className="text-primary/70 hover:text-accent transition-colors"
                      >
                        terreetbijou@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:0695425434"
                        className="text-primary/70 hover:text-accent transition-colors"
                      >
                        06 95 42 54 34
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/33695425434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/70 hover:text-accent transition-colors inline-flex items-center gap-2"
                      >
                        Nous écrire sur WhatsApp
                        <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="font-semibold text-primary mb-4 text-xl">
                  Zone d'intervention
                </h3>
                <p className="text-primary/70 mb-4">
                  Nous intervenons dans la région lyonnaise et ses environs :
                </p>
                <ul className="space-y-2 text-primary/70">
                  <li>✓ Lyon et agglomération</li>
                  <li>✓ Villeurbanne, Caluire, Vénissieux</li>
                  <li>✓ Oullins, Sainte-Foy-lès-Lyon</li>
                  <li>✓ Et communes environnantes</li>
                </ul>
                <p className="text-primary/70 mt-4 text-sm italic">
                  N'hésitez pas à nous contacter pour vérifier si nous
                  intervenons dans votre secteur.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h3 className="font-semibold text-primary mb-4 text-xl">
                  ⭐ Devis gratuit
                </h3>
                <p className="text-primary/70">
                  Tous nos devis sont gratuits et sans engagement. Nous nous
                  déplaçons pour évaluer votre projet et vous proposer une
                  solution adaptée à vos besoins et à votre budget.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

