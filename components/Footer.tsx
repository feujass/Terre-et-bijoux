import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-serif font-semibold">
                Terre & Bijou
              </span>
            </div>
            <p className="text-white/80 mb-4">
              Votre expert en entretien et aménagement de jardins. Nous créons
              et entretenons vos espaces verts avec passion et respect de
              l'environnement.
            </p>
            <div className="flex flex-col gap-2 text-white/90">
              <a
                href="mailto:terreetbijou@gmail.com"
                className="hover:text-accent transition-colors"
              >
                terreetbijou@gmail.com
              </a>
              <a
                href="tel:0695425434"
                className="hover:text-accent transition-colors"
              >
                06 95 42 54 34
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="hover:text-accent transition-colors"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-accent transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-white/80">
              <li>Entretien de jardins</li>
              <li>Création & aménagement</li>
              <li>Taille & élagage</li>
              <li>Plantations</li>
              <li>Nettoyage</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Terre & Bijou. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

