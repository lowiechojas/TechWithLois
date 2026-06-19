# TechWithLois

A personal portfolio website showcasing projects in Electronics, Automotive, and Programming.

## 🚀 Live Demo

Coming soon

## ✨ Features

- **Project Showcase** — filterable grid by category (Electronics, Automotive, Programming)
- **Project Detail Pages** — tech stack, features, links for each project
- **Admin Panel** — hidden CMS at `/admin` to generate project entries
- **Responsive Design** — mobile-friendly with clean minimal aesthetics
- **Fast** — built with Vite for instant hot reload and optimized builds

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router DOM 7](https://reactrouter.com/)

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/lowiechojas/techwithlois.git
cd techwithlois

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## ➕ Adding a New Project

1. Go to `/admin` in your browser
2. Fill in the project details
3. Click "Generate JSON"
4. Copy the output into `src/data/projects.js`
5. Rebuild or let hot reload pick it up

## 📁 Project Structure

```
techwithlois/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Admin.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📄 License

MIT

## 👤 Author

**Lowie Hojas** — Electronics Engineer & Creative Builder
