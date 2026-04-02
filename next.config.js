/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100 % statique pour Netlify (fichiers générés + /admin en HTML statique).
  output: "export",

  images: {
    // L’optimisation d’images Next nécessite un serveur ; avec `output: "export"`, on désactive.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
