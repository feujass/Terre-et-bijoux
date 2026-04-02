import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { normalizeCmsImagePath, pickCmsImageSrc } from "@/lib/cms-image";
import { resolvePublicImagePath } from "@/lib/resolve-public-image";
import type { Realisation } from "@/lib/realisations.shared";

/** Dossier Markdown des réalisations (synchronisé avec Decap CMS / Git). */
const CONTENT_DIR = path.join(process.cwd(), "content", "realisations");

/**
 * Charge toutes les réalisations depuis le Markdown (build time / export statique).
 * À importer uniquement depuis des Server Components ou `page.tsx` (utilise `fs`).
 */
export function getAllRealisations(): Realisation[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const items: Realisation[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      titre: String(data.titre ?? ""),
      description: String(data.description ?? ""),
      image: resolvePublicImagePath(
        normalizeCmsImagePath(pickCmsImageSrc(data.image), {
          filenameOnlyFolder: "images/realisations",
        })
      ),
      categorie: String(data.categorie ?? "Autre"),
      date: String(data.date ?? ""),
    };
  });

  items.sort((a, b) => {
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    return (Number.isNaN(tb) ? 0 : tb) - (Number.isNaN(ta) ? 0 : ta);
  });

  return items;
}
