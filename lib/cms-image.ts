/**
 * Extrait une chaîne utilisable depuis la valeur du widget « image » Decap
 * (souvent une string, parfois un objet selon la version / le média).
 */
export function pickCmsImageSrc(raw: unknown): string {
  if (raw == null) return "";
  if (typeof raw === "string") return raw.trim();
  if (typeof raw === "object" && raw !== null) {
    const o = raw as Record<string, unknown>;
    if (typeof o.path === "string") return o.path.trim();
    if (typeof o.publicURL === "string") return o.publicURL.trim();
    if (typeof o.url === "string") return o.url.trim();
  }
  return String(raw).trim();
}

/**
 * Normalise les chemins d’images venant de Decap.
 * - URLs http(s) : inchangées
 * - Retire un préfixe erroné `public/`
 * - Découpe le chemin en segments puis décode puis ré-encode pour éviter
 *   le double encodage (%20 → %2520) qui casse les fichiers sur Netlify.
 */
export function normalizeCmsImagePath(
  src: string,
  options?: { filenameOnlyFolder?: string }
): string {
  const s = src.trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("//")) return `https:${s}`;

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

  const safe = segments.map((seg) => {
    let decoded = seg;
    try {
      decoded = decodeURIComponent(seg);
    } catch {
      /* segment déjà « brut » */
    }
    return encodeURIComponent(decoded);
  });

  return "/" + safe.join("/");
}
