import fs from "fs";
import path from "path";

/**
 * Si le Markdown pointe vers /images/services/fichier.jpg mais que le fichier
 * est en réalité dans public/images/fichier.jpg (upload avec config globale),
 * on corrige l’URL au build pour éviter les 404.
 */
export function resolvePublicImagePath(src: string): string {
  if (!src.trim() || /^https?:\/\//i.test(src)) return src;

  const rel = src.replace(/^\/+/, "");
  const absolute = path.join(process.cwd(), "public", rel);
  if (fs.existsSync(absolute)) return src.startsWith("/") ? src : `/${rel}`;

  const services = rel.match(/^images\/services\/(.+)$/);
  if (services) {
    const flat = path.join(process.cwd(), "public", "images", services[1]);
    if (fs.existsSync(flat)) return `/images/${services[1]}`;
  }

  const realisations = rel.match(/^images\/realisations\/(.+)$/);
  if (realisations) {
    const flat = path.join(process.cwd(), "public", "images", realisations[1]);
    if (fs.existsSync(flat)) return `/images/${realisations[1]}`;
  }

  return src.startsWith("/") ? src : `/${rel}`;
}
