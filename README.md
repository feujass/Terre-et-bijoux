# Terre & Bijou - Site Vitrine

Site vitrine moderne et responsive pour Terre & Bijou, entreprise spécialisée en entretien et aménagement d'espaces verts.

## 🚀 Technologies utilisées

- **Next.js 14** avec App Router
- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **SEO optimisé** avec métadonnées et balises structurées

## 📁 Structure du projet

```
terre-et-bijou/
├── app/
│   ├── a-propos/          # Page À propos
│   ├── contact/           # Page Contact avec formulaire
│   ├── realisations/      # Page Réalisations avec galerie
│   ├── services/          # Page Services détaillée
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx        # Layout principal avec Header/Footer
│   └── page.tsx          # Page d'accueil
├── components/
│   ├── AboutPreview.tsx   # Aperçu À propos (accueil)
│   ├── CTA.tsx           # Call-to-action
│   ├── Footer.tsx        # Footer avec liens et contact
│   ├── Header.tsx        # Header avec navigation
│   ├── Hero.tsx          # Section hero de l'accueil
│   ├── Logo.tsx          # Logo SVG avec feuilles stylisées
│   ├── RealizationsPreview.tsx  # Aperçu réalisations
│   ├── ServicesPreview.tsx      # Aperçu services
│   └── Testimonials.tsx         # Avis clients
├── package.json
├── tailwind.config.ts    # Configuration Tailwind avec palette
└── tsconfig.json
```

## 🎨 Palette de couleurs

- **Vert principal** : `#2E5E46` (primary)
- **Beige** : `#F4EEDC` (secondary)
- **Doré léger** : `#C8A96A` (accent)
- **Blanc** : `#FFFFFF`

## 🛠️ Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 📄 Pages disponibles

- **/** - Accueil avec hero, services, réalisations, avis
- **/services** - Liste détaillée de tous les services
- **/realisations** - Galerie de réalisations avec filtres
- **/a-propos** - Histoire, valeurs, engagement écologique
- **/contact** - Formulaire de contact et coordonnées

## ✨ Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Animations légères avec Framer Motion
- ✅ SEO optimisé (métadonnées, balises structurées)
- ✅ Formulaire de contact fonctionnel
- ✅ Navigation fluide
- ✅ Logo SVG personnalisé
- ✅ Galerie de réalisations filtrable
- ✅ Section avis clients
- ✅ Intégration WhatsApp

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuration

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: "#2E5E46",
    light: "#3A6B52",
    dark: "#1F3F2F",
  },
  // ...
}
```

### Modifier les informations de contact

Les coordonnées sont définies dans :
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (balises structurées)

### Ajouter des réalisations

Modifier le tableau `realizations` dans :
- `components/RealizationsPreview.tsx` (accueil)
- `app/realisations/page.tsx` (page complète)

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le site sera déployé automatiquement

### Autres plateformes

```bash
npm run build
npm start
```

## 📝 Notes

- Les images utilisent actuellement Unsplash en placeholder. Remplacez-les par vos propres images.
- Le formulaire de contact nécessite une configuration backend pour fonctionner (actuellement en simulation).
- Les balises structurées (schema.org) sont configurées pour le référencement local.

## 📧 Contact

- **Email** : terreetbijou@gmail.com
- **Téléphone** : 06 95 42 54 34

## 📄 Licence

Propriété de Terre & Bijou - Tous droits réservés.

