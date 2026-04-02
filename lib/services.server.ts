import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Service, ServicePoint } from "@/lib/services.shared";

const CONTENT_DIR = path.join(process.cwd(), "content", "services");

function normalizePoints(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (typeof item === "string") return item;
      const o = item as ServicePoint;
      if (o?.ligne != null) return String(o.ligne);
      return "";
    })
    .filter(Boolean);
}

/**
 * Charge les fiches service depuis `content/services/*.md` (build / export statique).
 */
export function getAllServices(): Service[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const items: Service[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
    const { data } = matter(raw);
    const ordre = Number(data.ordre);
    return {
      slug,
      titre: String(data.titre ?? ""),
      ordre: Number.isFinite(ordre) ? ordre : 999,
      icone: String(data.icone ?? "🌿"),
      resume: String(data.resume ?? "").trim() || String(data.description ?? "").slice(0, 160),
      description: String(data.description ?? ""),
      image: String(data.image ?? ""),
      points: normalizePoints(data.points),
    };
  });

  items.sort((a, b) => a.ordre - b.ordre || a.titre.localeCompare(b.titre));
  return items;
}
