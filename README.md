# 🌌 Dragusheen Studio - Portfolio 2026

Bienvenue sur le code source de mon portfolio interactif. Plus qu'un simple CV en ligne, ce projet est un "Studio" démontrant ma double compétence : l'exigence de l'architecture logicielle couplée à l'esthétique du design UI/UX et du motion design.

## ✨ Fonctionnalités Clés

- **Glassmorphism & UI Moderne** : Thème sombre immersif avec effets de flou, gradients animés et bordures lumineuses.
- **Animations Avancées** : Intégration profonde de `framer-motion` pour des transitions de pages fluides, des révélations au scroll et des composants interactifs complexes (comme le `LiveRender`).
- **Génération Dynamique** : Récupération en temps réel de mes projets GitHub via l'API officielle, avec un système de cache et de tri intelligent.
- **Sécurité** : Appels API GitHub masqués derrière une **Netlify Serverless Function** pour ne jamais exposer de tokens côté client.
- **Architecture Scalable** : Séparation stricte des données (dossier `configs/`), de la logique (`services/`, `store/`) et de l'UI (`components/`).

## 🛠️ Stack Technique

- **Cœur** : `React 19` + `TypeScript`
- **Build Tool** : `Vite 8` (avec SWC)
- **Styling** : `Tailwind CSS v4` (Nouveau moteur unifié)
- **Animations** : `Framer Motion 12`
- **Routing** : `React Router v7`
- **Déploiement & Backend** : `Netlify` (Hébergement + Edge Functions)
- **Package Manager** : `pnpm`

---

## 🚀 Installation & Démarrage local

### Prérequis
- `Node.js` (v22 recommandée, le script de démarrage le gère automatiquement via NVM si installé).
- `pnpm` (installable via `npm install -g pnpm`).

### 1. Cloner le projet
```bash
git clone https://github.com/dragusheen-studio/portfolio.git
cd portfolio
```

### 2. Installer les dépendances
```bash
pnpm install
```

### 3. Lancer le serveur de développement
Le projet inclut un script bash personnalisé qui vérifie la version de Node, la présence de pnpm, la disponibilité du port, et ouvre un terminal dédié :

```bash
bash ./bin/start
```

*Alternativement, vous pouvez utiliser la commande standard :*
```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:5173` (ou le port spécifié par Vite).

---

## 🔐 Configuration des Variables d'Environnement (API GitHub)

Pour que la récupération automatique des projets GitHub (`store/Projects.tsx`) fonctionne sans être bloquée par les limites de l'API publique (Rate Limit), vous devez configurer un token.

**⚠️ Ne placez jamais le token dans le code source mais dans un fichier `.env` préfixé par `VITE_`.**

1. Générez un **Personal Access Token (classic)** sur GitHub (avec les droits de lecture basiques).
2. Sur votre interface **Netlify** (Site settings > Environment variables), ajoutez une variable nommée exactement :
   - Clé : `GITHUB_TOKEN`
   - Valeur : `ghp_votreTokenSecretIci...`

La Netlify Function (`netlify/functions/github-api.js`) se chargera d'utiliser ce token côté serveur de manière sécurisée. En développement local via Netlify CLI, vous pouvez utiliser `netlify dev` pour injecter cette variable.

---

## 📂 Architecture du Projet

```text
src/
├── components/       # Composants réutilisables (Layout, UI, Pages)
├── configs/          # Données statiques (Projets, Timeline, Liens) -> Facile à mettre à jour !
├── pages/            # Vues principales routées
├── services/         # Logique métier (Fetch API, Typewriter, Scroll)
├── store/            # Gestion d'état et cache (Projets GitHub)
├── style/            # Fichiers CSS globaux et configuration Tailwind
└── types/            # Définitions des interfaces TypeScript
```

---

## ✏️ Mettre à jour le contenu

L'architecture est pensée pour que le contenu puisse être mis à jour sans toucher à la structure complexe des composants React.
Allez simplement dans le dossier `src/configs/` :

- `Projects.tsx` : Ajoutez ou modifiez vos projets manuels (ceux non récupérés via GitHub).
- `TimelineChapter.tsx` : Ajoutez de nouvelles expériences scolaires ou professionnelles.
- `ContactLinks.tsx` : Modifiez vos réseaux sociaux, numéros, et emails.
- `PageData.tsx` : Gérez l'arborescence des pages et la NavBar.

---

## 🚀 Déploiement

Ce projet est optimisé pour un déploiement continu sur **Netlify**.

1. Connectez votre dépôt GitHub à Netlify.
2. Paramètres de Build :
   - Build command : `pnpm run build`
   - Publish directory : `dist`
3. Assurez-vous d'avoir ajouté la variable d'environnement `GITHUB_TOKEN`.
4. Le fichier `public/_redirects` (déjà inclus) gère le routage côté client pour éviter les erreurs 404 lors du rafraîchissement d'une page.

---

## 👨‍💻 Auteur

**Nathan TIROLF**
- Email : nathan.tirolf@epitech.eu
- LinkedIn : [nathan-tirolf](https://www.linkedin.com/in/nathan-tirolf/)
- GitHub : [@Dragusheen](https://github.com/Dragusheen)

*(„• ֊ •„)❤  <  Have a good day !*