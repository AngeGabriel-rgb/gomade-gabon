# GOMADE GABON - Site Web

Site web officiel de **GOMADE GABON**, cabinet d'Études de Marchés et de Sondages d'Opinion au Gabon.

## 📋 Description

GOMADE GABON est un cabinet spécialisé dans les Études de Marchés et les Sondages d'Opinion qui accompagne les entreprises et institutions dans la connaissance approfondie de leurs marchés et de leurs cibles, afin de les orienter vers des prises de décisions marketing stratégiques.

## 🏗️ Architecture du Projet

### Structure des Dossiers

```
gomade-gabon/
├── app/                          # Pages Next.js (App Router)
│   ├── about/                    # Page À propos
│   ├── contact/                  # Page Contact
│   ├── services/                 # Page Services
│   ├── politique-cookies/        # Page Politique des cookies
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   └── globals.css               # Styles globaux
│
├── components/                   # Composants React
│   ├── about/                    # Composants de la page À propos
│   │   ├── mission-section.tsx
│   │   ├── story-section.tsx
│   │   └── team-section.tsx
│   ├── contact/                  # Composants de contact
│   │   ├── contact-form.tsx
│   │   └── contact-info.tsx
│   ├── services/                 # Composants des services
│   │   ├── service-detail.tsx
│   │   └── services-list.tsx
│   ├── sections/                 # Sections réutilisables
│   │   ├── hero-section.tsx
│   │   ├── partners-section.tsx
│   │   ├── quick-contact.tsx
│   │   ├── services-preview.tsx
│   │   ├── testimonials-section.tsx
│   │   └── values-section.tsx
│   ├── ui/                       # Composants UI (shadcn/ui)
│   │   └── [50+ composants UI]
│   ├── cookie-consent.tsx        # Bandeau de consentement cookies
│   ├── footer.tsx                # Pied de page
│   ├── header.tsx                # En-tête avec navigation
│   ├── go-back-button.tsx        # Bouton retour
│   ├── scroll-to-top.tsx         # Bouton scroll to top
│   └── theme-provider.tsx        # Gestion du thème
│
├── lib/                          # Utilitaires et configurations
│   ├── emailjs-config.ts         # Configuration EmailJS
│   └── utils.ts                  # Fonctions utilitaires
│
├── hooks/                        # Hooks React personnalisés
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── public/                       # Assets statiques
│   ├── gomade.png                # Logo principal
│   ├── gomades.svg               # Logo SVG
│   ├── contact/                  # Images contact
│   ├── partenaires/              # Logos partenaires
│   └── service/                  # Images services
│
├── styles/                       # Styles additionnels
│   └── globals.css
│
├── package.json                  # Dépendances du projet
├── tsconfig.json                 # Configuration TypeScript
├── next.config.mjs               # Configuration Next.js
├── components.json               # Configuration shadcn/ui
└── postcss.config.mjs            # Configuration PostCSS
```

## 🛠️ Technologies Utilisées

### Framework & Core
- **Next.js 16.0.3** - Framework React avec App Router
- **React 19.2.0** - Bibliothèque UI
- **TypeScript 5** - Typage statique

### Styling
- **Tailwind CSS 4.1.9** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI (style "new-york")
- **Lucide React** - Bibliothèque d'icônes
- **Motion** - Animations

### Formulaires & Validation
- **React Hook Form** - Gestion de formulaires
- **Zod** - Validation de schémas
- **@hookform/resolvers** - Résolveurs de validation

### Services Externes
- **EmailJS** - Envoi d'emails depuis le frontend
- **Vercel Analytics** - Analytics du site

### UI Components (Radix UI)
- Accordion, Alert Dialog, Avatar, Checkbox, Dialog
- Dropdown Menu, Navigation Menu, Popover, Select
- Tabs, Toast, Tooltip, et bien plus...

### Autres
- **Three.js** - Graphiques 3D (si nécessaire)
- **Recharts** - Graphiques et visualisations
- **next-themes** - Gestion des thèmes (dark/light)

## 📄 Pages du Site

### 1. **Page d'Accueil** (`/`)
- Section Hero avec call-to-action
- Section Partenaires
- Aperçu des Services
- Contact rapide

### 2. **Services** (`/services`)
- Études de Marché
- Sondages d'Opinion
- Enquêtes Marketing
- Détails de chaque service avec bénéfices

### 3. **À Propos** (`/about`)
- Histoire de l'entreprise
- Mission et valeurs
- Équipe

### 4. **Contact** (`/contact`)
- Formulaire de contact (EmailJS)
- Informations de contact
- Intégration WhatsApp

### 5. **Politique des Cookies** (`/politique-cookies`)
- Informations sur l'utilisation des cookies

## 🎨 Design System

### Palette de Couleurs
- **Primary**: Bleu marine professionnel (`oklch(0.15 0.08 250)`)
- **Accent**: Bleu clair (`oklch(0.55 0.12 220)`)
- **Secondary**: Bleu moyen (`oklch(0.6 0.08 220)`)
- Support du mode sombre

### Typographie
- **Font Sans**: Geist (Google Fonts)
- **Font Mono**: Geist Mono

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ 
- pnpm (gestionnaire de paquets)

### Installation

```bash
# Installer les dépendances
pnpm install
```

### Configuration

Créer un fichier `.env.local` à la racine du projet :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_clé_publique
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
```

**Note**: Voir `lib/emailjs-config.ts` pour les instructions détaillées de configuration EmailJS.

### Commandes Disponibles

```bash
# Démarrer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Démarrer le serveur de production
pnpm start

# Linter
pnpm lint
```

## 📱 Fonctionnalités

### Navigation
- Header fixe avec navigation responsive
- Menu mobile avec animation
- Bouton WhatsApp pour contact rapide
- Breadcrumbs sur les pages internes
- Bouton "Retour" sur les pages

### Formulaires
- Formulaire de contact avec validation
- Intégration EmailJS pour l'envoi d'emails
- Newsletter dans le footer

### Cookies & Conformité
- Bandeau de consentement cookies
- Gestion des préférences (nécessaires, analytiques, marketing)
- Page de politique des cookies

### UX/UI
- Animations fluides (fade-in, slide-in)
- Scroll to top automatique
- Design responsive (mobile-first)
- Support du mode sombre
- Transitions et effets hover

### Analytics
- Intégration Vercel Analytics

## 🔧 Configuration Next.js

- **TypeScript**: Strict mode activé
- **Images**: Non optimisées (configurable)
- **Build Errors**: Ignorés en build (à configurer pour production)

## 📦 Dépendances Principales

Voir `package.json` pour la liste complète. Principales catégories :

- **UI Framework**: Next.js, React
- **Styling**: Tailwind CSS, shadcn/ui
- **Formulaires**: React Hook Form, Zod
- **Icons**: Lucide React
- **Animations**: Motion
- **Email**: EmailJS
- **Analytics**: Vercel Analytics

## 🌐 Déploiement

Le site est configuré pour être déployé sur **Vercel** (recommandé pour Next.js).

### Étapes de déploiement :
1. Connecter le repository à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement à chaque push

## 📞 Contact

- **Email**: goodmarketingdecisionsgabon@gmail.com
- **Téléphone**: +241 04 51 11 72
- **WhatsApp**: 066 73 19 76 (disponible via le bouton dans le header)
- **Adresse**: Dernière Kar motors, bas de Guegue, Libreville, Gabon
- **Facebook**: [https://www.facebook.com/profile.php?id=100085517989223](https://www.facebook.com/profile.php?id=100085517989223)

## 📝 Notes de Développement

- Le projet utilise l'App Router de Next.js 13+
- Tous les composants sont en TypeScript
- Les composants UI sont basés sur Radix UI via shadcn/ui
- Le styling utilise Tailwind CSS avec des variables CSS personnalisées
- Les erreurs TypeScript sont ignorées en build (à corriger pour production)

## 🔄 Améliorations Futures

- [ ] Corriger les erreurs TypeScript
- [ ] Optimiser les images
- [ ] Ajouter des tests
- [ ] Améliorer le SEO
- [ ] Ajouter un blog/actualités
- [ ] Intégrer un CMS pour le contenu

---

**© 2025 GOMADE GABON. Tous droits réservés.**
