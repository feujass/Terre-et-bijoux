"use client";

import { useEffect } from "react";

/**
 * Charge le widget Netlify Identity sur tout le site pour que, après connexion
 * depuis la modale Identity, l’utilisateur soit renvoyé vers /admin/ (flux Decap CMS).
 * Ne s’active que côté client ; aucun backend applicatif.
 */
export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    let cancelled = false;

    function attachHandlers() {
      const ni = (
        window as Window & {
          netlifyIdentity?: {
            on: (event: string, cb: (user?: unknown) => void) => void;
          };
        }
      ).netlifyIdentity;
      if (!ni || cancelled) return;

      ni.on("init", (user) => {
        if (!user) {
          ni.on("login", () => {
            window.location.href = "/admin/";
          });
        }
      });
    }

    if (
      (window as Window & { netlifyIdentity?: unknown }).netlifyIdentity
    ) {
      attachHandlers();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    script.onload = attachHandlers;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
