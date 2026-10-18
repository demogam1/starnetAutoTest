# 🤖 AGENTS.md — Règles Obligatoires pour Agents IA (StarNetAuto)

> **Ce fichier est la LOI pour tout agent IA travaillant sur ce projet.**
> Chaque section est contraignante. Aucune exception sauf validation explicite de l'utilisateur.

---

## 📋 1. INITIALISATION DE L'AGENT (BOOT UP)

Dès ton premier message dans une nouvelle session :

1. **Lis `docs/SESSION_STATE.md`** — C'est ta source de vérité pour la tâche en cours.
2. **Lis `docs/PROJECT_BRIEF.md`** — Pour comprendre le contexte métier et la DA.
3. **Lis `docs/ARCHITECTURE.md`** — Pour comprendre la stack et la structure du projet.
4. **Ne code RIEN** avant d'avoir lu ces 3 fichiers.

---

## 🎯 2. VISION & SCOPE

- **Projet** : Site vitrine professionnel pour **StarNetAuto** — Société de nettoyage et rénovation automobile basée à Monaco.
- **Type** : Site statique (aucune base de données, aucun backend).
- **Public cible** : Clientèle haut de gamme (véhicules de luxe), Monaco et environs.
- **Langue** : Bilingue FR / EN.
- **Fonctionnalité clé** : Réservation via lien WhatsApp et appel téléphonique direct.

### ❌ HORS SCOPE (INTERDIT)
- Pas de base de données
- Pas d'authentification utilisateur
- Pas de système de paiement en ligne
- Pas de CMS ou back-office admin
- Pas de framework CSS lourd (pas de TailwindCSS sauf demande explicite)
- Pas de dépendance lourde non justifiée

---

## 🛠️ 3. TECH STACK & ARCHITECTURE

| Couche         | Technologie                          | Notes                                    |
|----------------|--------------------------------------|------------------------------------------|
| **Bundler**    | Vite (latest)                        | Mode vanilla (HTML/CSS/JS)               |
| **Langage**    | JavaScript (ES Modules)             | Pas de TypeScript (garder simple)        |
| **Style**      | Vanilla CSS                          | Variables CSS custom, pas de framework   |
| **Structure**  | Multi-page (sections en SPA scroll) | Une seule page avec navigation anchor    |
| **Fonts**      | Google Fonts (Inter, Playfair Display) | CDN link                              |
| **Icônes**     | Lucide Icons (CDN) ou SVG inline     | Léger, accessible                        |
| **i18n**       | JSON fichiers (fr.json / en.json)    | Switch dynamique côté client             |
| **Formulaire** | Lien WhatsApp + tel: direct          | Aucun backend nécessaire                 |
| **Déploiement**| Vercel ou Netlify                    | Plan gratuit, HTTPS auto                 |
| **SEO**        | Meta tags, Open Graph, sitemap.xml   | Optimisé pour Google Local               |

### Règles Architecturales Strictes
- **Aucun `node_modules` committé** — Le `.gitignore` doit les exclure.
- **Aucune dépendance npm inutile** — Chaque `npm install` doit être justifié.
- **Fichiers CSS** — Un seul fichier principal `src/styles/main.css` qui importe les partials.
- **Fichiers JS** — Modules ES6 organisés dans `src/js/`. Un module par responsabilité.
- **Assets** — Toutes les images dans `public/images/`, optimisées (WebP si possible).

---

## 🎨 4. DIRECTION ARTISTIQUE (DA)

> **Lire obligatoirement `docs/DESIGN_SYSTEM.md` avant de toucher au moindre CSS.**

### Identité Visuelle : "Monaco Black & Gold"
- **Ambiance** : Luxe sobre, élégance automobile, confiance professionnelle.
- **Mode** : Dark mode uniquement (cohérent avec l'univers automobile premium).

### Palette de Couleurs (Variables CSS)
```css
:root {
  /* --- Fond --- */
  --color-bg-primary:    #0a0a0b;      /* Noir profond */
  --color-bg-secondary:  #141416;      /* Noir carbone */
  --color-bg-card:       #1a1a1f;      /* Surface élevée */
  --color-bg-elevated:   #222228;      /* Modales, dropdowns */

  /* --- Accent (Or) --- */
  --color-accent-gold:   #C9A84C;      /* Or principal */
  --color-accent-light:  #E8D48B;      /* Or clair (hover) */
  --color-accent-dark:   #9A7B2E;      /* Or foncé (pressed) */

  /* --- Texte --- */
  --color-text-primary:  #F5F5F5;      /* Blanc cassé */
  --color-text-secondary:#A0A0A8;      /* Gris neutre */
  --color-text-muted:    #6B6B73;      /* Gris discret */

  /* --- Utilitaires --- */
  --color-border:        rgba(201, 168, 76, 0.15);  /* Bordure dorée subtile */
  --color-glass:         rgba(255, 255, 255, 0.03);  /* Glassmorphism */
  --color-success:       #34D399;
  --color-error:         #EF4444;

  /* --- Typographie --- */
  --font-heading:        'Playfair Display', serif;
  --font-body:           'Inter', sans-serif;

  /* --- Espacements --- */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  1.5rem;
  --space-xl:  2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* --- Rayons --- */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
  --radius-xl:  16px;
  --radius-full: 9999px;

  /* --- Transitions --- */
  --transition-fast:   150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow:   500ms ease;
}
```

### Typographie
- **Titres** : `Playfair Display` — serif élégant, tailles 2rem → 4rem.
- **Corps** : `Inter` — sans-serif lisible, taille base 1rem, line-height 1.6.
- **Boutons/Labels** : `Inter` semi-bold, uppercase avec letter-spacing 0.05em.

### Anti-Patterns (INTERDIT)
- ❌ Pas de couleurs vives/criardes (rouge vif, bleu électrique, vert fluo)
- ❌ Pas de bordures `1px solid black` brutes — utiliser `var(--color-border)`
- ❌ Pas de blanc pur `#FFFFFF` comme fond — toujours `var(--color-text-primary)` pour le texte
- ❌ Pas de box-shadow dures — ombres diffuses uniquement
- ❌ Pas de padding/margin en pixels hardcodés — utiliser les variables `--space-*`
- ❌ Pas de `!important` sauf reset CSS critique
- ❌ Pas de text en ALL CAPS sauf boutons CTA et labels courts

---

## 🛑 5. MODE OPÉRATOIRE & ANTI-HALLUCINATION

### Règles Absolues

1. **Validation avant commit** : Ne commit/push JAMAIS sans avoir demandé la validation explicite de l'utilisateur.

2. **Zéro Fausse Complétion** : Ne déclare JAMAIS une tâche terminée si le code contient des `TODO`, `FIXME`, des placeholders visuels (lorem ipsum, images cassées), ou si la fonctionnalité n'est pas testable.

3. **Anti-Boucle Infinie** : Si une erreur persiste après **2 tentatives** de réparation, ARRÊTE. Explique l'impasse et demande du contexte. Interdiction d'essayer au hasard.

4. **Dette Technique Zéro** : Après un refactoring ou une suppression de fichier, vérifie et nettoie systématiquement les imports orphelins et les fichiers morts.

5. **Intégrité Architecturale** : Ne modifie JAMAIS la structure racine du projet, les fichiers de configuration Vite, ou les meta SEO sans validation explicite.

6. **Hypothèses Silencieuses (INTERDIT)** : Ne devine JAMAIS ce qu'un fichier contient. Lis-le avant de le modifier. Si un asset n'existe pas, signale-le.

7. **Boussole Cognitive** : Pour tout travail multi-fichiers, maintiens et affiche un mini-plan numéroté dans ta réponse. Ne continue pas si l'étape en cours est floue.

8. **Auto-Validation** : Demande systématiquement à l'utilisateur de tester et dresse la liste des étapes exactes pour valider.

9. **Accessibilité Minimum** : Tout élément interactif doit avoir un `aria-label` ou un texte visible. Les images doivent avoir un `alt`. Les liens doivent avoir un `title`.

10. **Performance** : Les images doivent être en format optimisé (WebP). Le CSS et JS doivent être minifiés en production par Vite (automatique). Pas de librairies JS lourdes.

---

## 🛡️ 6. SÉCURITÉ (Site Statique)

Même sur un site statique, ces règles s'appliquent :

1. **Pas de secrets dans le code** : Aucune clé API, mot de passe, ou token dans le code source. Si nécessaire, utiliser des variables d'environnement Vite (`import.meta.env.VITE_*`).

2. **Liens externes** : Tous les liens `target="_blank"` doivent inclure `rel="noopener noreferrer"`.

3. **Sanitization** : Si du contenu dynamique est injecté dans le DOM via JS, utiliser `textContent` au lieu de `innerHTML` pour prévenir les XSS.

4. **Headers de sécurité** : Configurer via le fichier de déploiement (`vercel.json` ou `netlify.toml`) :
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `Referrer-Policy: strict-origin-when-cross-origin`

5. **HTTPS** : Le site doit être servi uniquement en HTTPS (automatique sur Vercel/Netlify).

6. **Dépendances** : Exécuter `npm audit` avant chaque mise en production. Aucune vulnérabilité critique tolérée.

---

## 🌍 7. INTERNATIONALISATION (i18n)

- Les textes sont stockés dans `src/i18n/fr.json` et `src/i18n/en.json`.
- Le switch de langue est géré côté client (JS), pas de rechargement de page.
- La langue par défaut est le **français**.
- La langue sélectionnée est persistée dans `localStorage`.
- Les attributs `lang` et `dir` du `<html>` doivent être mis à jour dynamiquement.
- Les meta descriptions doivent exister en FR et EN.
- Structure des fichiers JSON :
```json
{
  "nav": { "home": "...", "services": "...", ... },
  "hero": { "title": "...", "subtitle": "...", "cta": "..." },
  "services": { "title": "...", "items": [...] },
  ...
}
```

---

## 🔄 8. RÈGLE DE HANDOFF (SESSION STATE)

À la fin de chaque tâche ou session, tu DOIS mettre à jour `docs/SESSION_STATE.md` avec :

- ✅ Ce qui a été accompli
- 🐛 Bugs résiduels ou problèmes connus
- ➡️ Prochaine tâche immédiate
- 📁 Fichiers modifiés

**Ne demande pas la permission, fais-le automatiquement.**

Mets également à jour `docs/PROGRESS.md` quand une section/feature est terminée.

> ⚠️ **RÈGLE D'OR** : Ne JAMAIS modifier `docs/ROADMAP.md` pour marquer des tâches finies. Seul `PROGRESS.md` sert au suivi.
