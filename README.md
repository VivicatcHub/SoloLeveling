# ⚔️ Solo Leveling Dashboard

Application desktop moderne pour explorer l'univers Solo Leveling.

## 🎮 Fonctionnalités

- **Dashboard interactif** avec thème orange/violet
- **3 sections principales** : Chasseurs, Guildes, Donjons
- **Interface responsive** et moderne
- **Application desktop native** avec Tauri

## 🛠️ Stack technique

- **Frontend** : React + TypeScript + Tailwind CSS
- **Desktop** : Tauri (Rust)
- **Build** : Vite
- **UI** : ShadCN/UI

## � Démarrage rapide

```bash
git clone <url-du-repo>
cd SoloLeveling
```

2. Installer les dépendances :

```bash
pnpm install
# Installation des dépendances
npm install

# Lancer l'application desktop
npm run dev:tauri

# Ou lancer en mode web seulement
npm run dev
```

## 📊 Données

L'application affiche :

- **6 chasseurs** avec leurs statistiques complètes
- **3 guildes** avec informations détaillées
- **3 donjons** avec récompenses et difficultés

## 🎨 Design

- **Thème** : Orange & Violet avec dégradés
- **Interface** : Cards modernes avec glassmorphism
- **Navigation** : Onglets intuitifs
- **Responsive** : S'adapte à tous les écrans

## 📁 Structure

```
src/
├── components/ui/     # Composants ShadCN
├── App.tsx           # Application principale
├── App.css           # Styles Tailwind
└── main.tsx          # Point d'entrée

public/
└── data.json         # Données des chasseurs/guildes/donjons
```

## 🔧 Scripts disponibles

```bash
npm run dev          # Mode web (Vite)
npm run dev:tauri    # Mode desktop (Tauri)
npm run build        # Build web
npm run build:tauri  # Build desktop
```

---

🎮 **Solo Leveling Dashboard** - Interface moderne pour l'univers des chasseurs
└── main.tsx # Point d'entrée React

public/
└── data.json # Données de l'application

src-tauri/ # Code Rust pour Tauri

```

## 🔧 Configuration

- `tailwind.config.js` : Configuration Tailwind CSS
- `components.json` : Configuration ShadCN
- `vite.config.ts` : Configuration Vite avec alias
- `tsconfig.json` : Configuration TypeScript

## 📝 Licence

Ce projet est à des fins éducatives et de démonstration.
```
