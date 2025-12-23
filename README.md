# MBID Express - Marketplace

Site web marketplace statique construit avec Next.js, React, TypeScript et Tailwind CSS.

## Structure du projet

```
/src
  /app
    ├─ layout.tsx              - Layout principal
    ├─ page.tsx                - Page d'accueil
    ├─ search/page.tsx         - Résultats de recherche
    ├─ products/[id]/page.tsx  - Détails produit
    ├─ categories/[slug]/page.tsx - Catégories
    ├─ sellers/[id]/page.tsx   - Profil vendeur
    └─ contact/page.tsx        - Contact
  /components
    ├─ Navbar.tsx              - Barre de navigation
    ├─ Footer.tsx              - Pied de page
    ├─ Hero.tsx                - Section héro
    ├─ SearchBar.tsx           - Barre de recherche
    ├─ Services.tsx            - Services proposés
    └─ FeaturedProducts.tsx    - Produits en vedette
```

## Caractéristiques

- ✅ UI statique complète
- ✅ Design responsive
- ✅ Données mockées localement
- ✅ Navigation entre pages
- ✅ Composants réutilisables
- ✅ Images depuis Pexels

## Pages disponibles

- **Homepage** (`/`) - Page d'accueil avec héro, recherche et produits en vedette
- **Search** (`/search`) - Recherche de produits avec filtres
- **Product Details** (`/products/[id]`) - Détails d'un produit
- **Categories** (`/categories/[slug]`) - Produits par catégorie
- **Seller Profile** (`/sellers/[id]`) - Profil vendeur
- **Contact** (`/contact`) - Formulaire de contact

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Technologies

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

## Notes importantes

- ⚠️ **UI statique uniquement** - Aucune fonctionnalité backend
- ⚠️ **Données mockées** - Toutes les données sont définies localement
- ⚠️ **Pas d'authentification** - Interface uniquement
- ⚠️ **Pas de paiement** - Interface uniquement
