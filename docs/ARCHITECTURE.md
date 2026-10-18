# 🏗️ ARCHITECTURE.md — Structure Technique du Projet

## Stack Technique

```
Vite (vanilla) + HTML + CSS + JavaScript (ES Modules)
├── Pas de framework frontend (React, Vue, etc.)
├── Pas de framework CSS (Tailwind, Bootstrap, etc.)
├── Pas de base de données
├── Pas de backend/API
└── Déploiement : Vercel ou Netlify (gratuit)
```

---

## Arborescence du Projet

```
starnetAutoTest/
│
├── AGENTS.md                    # Règles obligatoires pour agents IA
├── docs/
│   ├── PROJECT_BRIEF.md         # Brief projet et infos entreprise
│   ├── ARCHITECTURE.md          # Ce fichier — structure technique
│   ├── DESIGN_SYSTEM.md         # Direction artistique détaillée
│   ├── ROADMAP.md               # Features planifiées (ne pas modifier pour le suivi)
│   ├── PROGRESS.md              # Suivi d'avancement [x] / [ ]
│   └── SESSION_STATE.md         # État de la session courante (handoff agent)
│
├── public/                      # Assets statiques (copiés tels quels par Vite)
│   ├── images/                  # Photos, logo, favicon
│   │   ├── logo.webp
│   │   ├── favicon.ico
│   │   ├── hero/                # Images hero section
│   │   ├── services/            # Icônes/images services
│   │   └── gallery/             # Photos galerie
│   ├── fonts/                   # Polices locales (si pas CDN)
│   ├── sitemap.xml              # SEO
│   └── robots.txt               # SEO
│
├── src/
│   ├── main.js                  # Point d'entrée JS
│   ├── styles/
│   │   ├── main.css             # Entry point CSS (imports)
│   │   ├── _variables.css       # Variables CSS (couleurs, typo, espaces)
│   │   ├── _reset.css           # CSS Reset/Normalize
│   │   ├── _typography.css      # Styles typographiques
│   │   ├── _layout.css          # Grilles, conteneurs, responsive
│   │   ├── _components.css      # Boutons, cards, badges
│   │   ├── _nav.css             # Navigation / header
│   │   ├── _hero.css            # Section hero
│   │   ├── _services.css        # Section services
│   │   ├── _gallery.css         # Section galerie
│   │   ├── _booking.css         # Section réservation
│   │   ├── _contact.css         # Section contact
│   │   ├── _footer.css          # Footer
│   │   └── _animations.css      # Keyframes et transitions
│   │
│   ├── js/
│   │   ├── i18n.js              # Gestion internationalisation
│   │   ├── nav.js               # Navigation mobile, scroll spy
│   │   ├── gallery.js           # Lightbox galerie
│   │   ├── animations.js        # Intersection Observer, scroll animations
│   │   └── utils.js             # Fonctions utilitaires
│   │
│   └── i18n/
│       ├── fr.json              # Traductions françaises
│       └── en.json              # Traductions anglaises
│
├── index.html                   # Page principale (SPA scroll)
├── package.json                 # Dépendances npm
├── vite.config.js               # Configuration Vite
├── vercel.json                  # Config déploiement Vercel (headers sécurité)
├── .gitignore                   # Exclusions Git
└── README.md                    # Documentation projet
```

---

## Conventions de Nommage

| Élément           | Convention         | Exemple                    |
|--------------------|--------------------|----------------------------|
| **Fichiers CSS**   | `_kebab-case.css`  | `_hero.css`, `_nav.css`    |
| **Fichiers JS**    | `camelCase.js`     | `i18n.js`, `gallery.js`    |
| **Classes CSS**    | BEM                | `.hero__title--large`      |
| **IDs HTML**       | kebab-case         | `#section-services`        |
| **Variables CSS**  | `--category-name`  | `--color-accent-gold`      |
| **Fonctions JS**   | camelCase          | `initGallery()`            |
| **Constantes JS**  | UPPER_SNAKE        | `WHATSAPP_URL`             |
| **Images**         | kebab-case         | `hero-bg.webp`             |
| **JSON i18n**      | dot.notation       | `hero.title`               |

---

## Responsive Breakpoints

```css
/* Mobile first */
/* sm */  @media (min-width: 640px)  { ... }
/* md */  @media (min-width: 768px)  { ... }
/* lg */  @media (min-width: 1024px) { ... }
/* xl */  @media (min-width: 1280px) { ... }
```

---

## Performance Targets

| Métrique               | Objectif    |
|------------------------|-------------|
| Lighthouse Performance | > 90        |
| Lighthouse SEO         | > 95        |
| Lighthouse Accessibility | > 90      |
| First Contentful Paint | < 1.5s      |
| Total Bundle Size (JS) | < 50KB gzip |
| Images                 | Format WebP |

---

## Flux de Réservation

```
Visiteur → Clique "Réserver" (CTA)
         ├── Option 1 : WhatsApp (message pré-rempli)
         │   └── wa.me/37764062044?text=...
         └── Option 2 : Appel téléphonique direct
             └── tel:+37764062044
```

Aucun backend, aucune DB. Le flux est entièrement externe (WhatsApp/Téléphone).
