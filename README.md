<div align="center">
  <img src="assets/favicon.ico" alt="Flectone Logo" width="120" />
  
  # ⚡️ Flectone Web
  
  🚀 Modern web platform for Flectone Network

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Powered by Bun](https://img.shields.io/badge/Powered%20by-Bun-orange)](https://bun.sh)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fflectone.net)](https://flectone.net)
[![License](https://img.shields.io/badge/license-GPLv3-blue)](LICENSE)

</div>

## 🧱 Project structure

FlectoneWeb
├─ src
│ ├─ assets # Static assets and resources
│ ├─ components # Reusable UI components
│ ├─ layouts # Page layout templates
│ ├─ pages # Application pages/routes
│ └─ styles # Global styles and CSS
│
└─ pulse
├─ .vitepress # VitePress configuration
├─ docs # Documentation content
│ ├─ command # Command reference docs
│ ├─ config # Configuration guides
│ ├─ integration # Integration documentation
│ └─ message # Messaging system docs
└─ public # Public static files

## 🎯 Overview

Modern, fast and responsive web platform built for Flectone Network using cutting-edge technologies.

## ✨ Features

🎨 **Modern Design**

- Dark/Light theme support
- Responsive layout
- Sleek animations

🌍 **Internationalization**

- English and Russian support
- Easy language switching
- SEO-friendly URLs

⚡️ **Performance**

- Lightning-fast page loads
- Optimized assets
- Superior Core Web Vitals

## 🛠️ Tech Stack

| Category | Technologies                                                                                                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core     | [![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build) [![Vue](https://img.shields.io/badge/Vue-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org) |
| Styling  | [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)                                                                                      |
| Runtime  | [![Bun](https://img.shields.io/badge/Bun-000000?style=flat&logo=bun&logoColor=white)](https://bun.sh)                                                                                                                        |

## 🚀 Quick Start

### Clone repository

```bash
git clone https://github.com/Flectone/FlectoneWeb.git
```

### Install dependencies

- Nodejs
- Bun

```bash
npm i -g bun
```

### Main frontend (Astro)

```bash
# Move to astro project
cd FlectoneWeb

# Install project dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview build
bun preview
```

### Second frontend (VitePress)

```bash
# Move to vitepress project
cd FlectoneWeb/pulse

# Install project dependencies
npm i

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview build
bun preview
```
