/**
 * Normalise les chemins d’images venant de Decap (ou d’une édition manuelle du Markdown).
 * Corrige un préfixe erroné `public/`, les chemins relatifs, et encode les espaces dans l’URL.
 */
export function normalizeCmsImagePath(
  src: string,
  options?: { filenameOnlyFolder?: string }
): string {
  const s = src.trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;

  let p = s.replace(/^\/+/, "");
  if (p.startsWith("public/")) {
    p = p.slice("public/".length);
  }
  p = p.replace(/^\/+/, "");

  const folder = options?.filenameOnlyFolder?.replace(/\/$/, "");
  if (folder && !p.includes("/") && /\.[a-z0-9]+$/i.test(p)) {
    p = `${folder}/${p}`;
  }

  const segments = p.split("/").filter(Boolean);
  if (segments.length === 0) return "";
  return "/" + segments.map((seg) => encodeURIComponent(seg)).join("/");
}
