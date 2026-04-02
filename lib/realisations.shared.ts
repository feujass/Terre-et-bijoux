/** Catégories alignées sur le select de `public/admin/config.yml` (importable côté client). */
export const REALISATION_CATEGORIES = [
  "Jardin",
  "Terrasse",
  "Clôture",
  "Allée",
  "Autre",
] as const;

export type RealisationCategorie = (typeof REALISATION_CATEGORIES)[number];

export type Realisation = {
  slug: string;
  titre: string;
  description: string;
  image: string;
  categorie: string;
  date: string;
};
