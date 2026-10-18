# 🎨 DESIGN_SYSTEM.md — Direction Artistique "Monaco Black & Gold"

> **RÈGLE ABSOLUE** : Tout agent IA DOIT lire ce fichier avant de toucher au moindre CSS ou HTML.

---

## 1. Philosophie

**"Monaco Black & Gold"** — Un design sombre, sobre et raffiné qui reflète le positionnement premium de StarNetAuto à Monaco. Chaque élément visuel doit évoquer le luxe automobile sans tomber dans le clinquant.

### Mots-clés de la DA
- Luxe discret
- Élégance automobile
- Confiance et expertise
- Monaco / Riviera

---

## 2. Palette de Couleurs

### Couleurs Principales

| Variable CSS              | Hex        | Usage                        |
|---------------------------|------------|------------------------------|
| `--color-bg-primary`      | `#0a0a0b`  | Fond principal du site       |
| `--color-bg-secondary`    | `#141416`  | Sections alternées           |
| `--color-bg-card`         | `#1a1a1f`  | Cards, surfaces élevées      |
| `--color-bg-elevated`     | `#222228`  | Modales, menus déroulants    |

### Couleurs d'Accent (Or)

| Variable CSS              | Hex        | Usage                        |
|---------------------------|------------|------------------------------|
| `--color-accent-gold`     | `#C9A84C`  | Accent principal, CTA        |
| `--color-accent-light`    | `#E8D48B`  | Hover, highlights            |
| `--color-accent-dark`     | `#9A7B2E`  | Pressed, active              |

### Texte

| Variable CSS              | Hex        | Usage                        |
|---------------------------|------------|------------------------------|
| `--color-text-primary`    | `#F5F5F5`  | Texte principal              |
| `--color-text-secondary`  | `#A0A0A8`  | Texte secondaire, légendes   |
| `--color-text-muted`      | `#6B6B73`  | Placeholders, hints          |

### Utilitaires

| Variable CSS              | Valeur                          | Usage               |
|---------------------------|---------------------------------|----------------------|
| `--color-border`          | `rgba(201, 168, 76, 0.15)`     | Bordures subtiles    |
| `--color-glass`           | `rgba(255, 255, 255, 0.03)`    | Effet glassmorphism  |
| `--color-overlay`         | `rgba(0, 0, 0, 0.7)`          | Overlay images       |
| `--color-success`         | `#34D399`                      | Confirmation         |
| `--color-error`           | `#EF4444`                      | Erreurs              |

---

## 3. Typographie

### Polices

| Usage      | Famille            | Import                                  |
|------------|--------------------|-----------------------------------------|
| **Titres** | Playfair Display   | Google Fonts (serif, élégant)            |
| **Corps**  | Inter              | Google Fonts (sans-serif, lisible)       |

### Échelle Typographique

| Élément   | Taille (desktop) | Taille (mobile) | Font          | Weight  |
|-----------|------------------|-----------------|---------------|---------|
| `h1`      | 3.5rem           | 2.25rem         | Playfair      | 700     |
| `h2`      | 2.5rem           | 1.75rem         | Playfair      | 600     |
| `h3`      | 1.5rem           | 1.25rem         | Playfair      | 600     |
| `body`    | 1rem             | 1rem            | Inter         | 400     |
| `small`   | 0.875rem         | 0.875rem        | Inter         | 400     |
| `label`   | 0.75rem          | 0.75rem         | Inter         | 600     |
| `button`  | 0.875rem         | 0.875rem        | Inter         | 600     |

### Règles Typographiques
- `line-height` : 1.6 pour le corps, 1.2 pour les titres
- `letter-spacing` : 0.05em pour les boutons et labels uppercase
- Pas de texte ALL CAPS sauf boutons CTA et labels courts

---

## 4. Composants

### Boutons

```css
/* Bouton Principal (Gold) */
.btn-primary {
  background: linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-dark));
  color: var(--color-bg-primary);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-md) var(--space-xl);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent-gold));
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.3);
}

/* Bouton Secondaire (Outline) */
.btn-secondary {
  background: transparent;
  color: var(--color-accent-gold);
  border: 1px solid var(--color-border);
  /* ... même structure ... */
}
```

### Cards

```css
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: all var(--transition-normal);
}

.card:hover {
  border-color: rgba(201, 168, 76, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}
```

### Navigation

- **Desktop** : Barre fixe en haut, fond `--color-bg-primary` avec glassmorphism au scroll
- **Mobile** : Hamburger menu, slide-in depuis la droite
- **Logo** : À gauche, taille max 48px de hauteur
- **Liens** : `--color-text-secondary`, hover → `--color-accent-gold`
- **CTA nav** : Bouton "Réserver" en `--color-accent-gold`

---

## 5. Effets & Animations

### Micro-animations Autorisées
- **Hover lift** : `transform: translateY(-2px)` sur les cards et boutons
- **Fade in up** : Éléments apparaissent au scroll (Intersection Observer)
- **Shimmer** : Effet de brillance doré subtil sur les titres principaux
- **Smooth scroll** : `scroll-behavior: smooth` sur le `html`
- **Parallax léger** : Sur l'image hero uniquement (optionnel)

### Keyframes de Base

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

### Règles d'Animation
- **Duration** : 300ms → 600ms max (pas de lenteur)
- **Easing** : `ease` ou `cubic-bezier(0.4, 0, 0.2, 1)` — jamais `linear` sauf loaders
- **Reduced motion** : Respecter `@media (prefers-reduced-motion: reduce)` — désactiver les animations

---

## 6. Images & Assets

### Format
- **Photos** : WebP avec fallback JPG
- **Logo** : SVG (vectoriel, scalable)
- **Icônes** : SVG inline ou Lucide Icons
- **Favicon** : ICO (16x16, 32x32) + PNG (192x192 pour PWA)

### Traitement des Photos
- **Ratio** : 16:9 pour hero, 4:3 pour galerie, 1:1 pour thumbnails
- **Overlay** : Les images de fond doivent avoir un overlay sombre `rgba(0, 0, 0, 0.5)` minimum pour la lisibilité du texte
- **Lazy loading** : `loading="lazy"` sur toutes les images sauf hero
- **Alt text** : Descriptif en français ET anglais via i18n

---

## 7. Spacing & Layout

### Conteneur Principal
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```

### Sections
- Padding vertical : `var(--space-3xl)` minimum (4rem) entre sections
- Fond alternant : `--color-bg-primary` / `--color-bg-secondary`

### Grilles
- Utiliser CSS Grid ou Flexbox natif
- Galerie : Grid auto-fill, min 280px
- Services : Grid 3 colonnes (desktop), 1 colonne (mobile)

---

## 8. Anti-Patterns (INTERDIT)

| ❌ Interdit                                  | ✅ Faire à la place                           |
|----------------------------------------------|-----------------------------------------------|
| Couleurs vives (rouge, bleu électrique)      | Palette "Monaco Black & Gold" uniquement       |
| `border: 1px solid black`                    | `border: 1px solid var(--color-border)`        |
| Fond blanc `#FFFFFF`                         | Fond sombre `var(--color-bg-*)`                |
| `box-shadow: 0 2px 4px black`               | Ombres diffuses avec opacité                   |
| Padding/margin en px hardcodé                | Variables `--space-*`                           |
| `!important`                                 | Spécificité CSS correcte                       |
| `font-family: Arial`                         | `var(--font-heading)` ou `var(--font-body)`    |
| Images sans `alt`                            | Alt descriptif, traduit                        |
| Animations > 600ms                           | 300ms — 600ms max                              |
| Ignorer `prefers-reduced-motion`             | Toujours respecter                             |
