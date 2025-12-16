# Herbal-Yug


Structure
- `backend` — Express API
- `frontend` — Vite + React storefront
- `admin` — Vite + React admin panel

Quick local start
1. Copy environment template and fill values:

```bash
cp backend/.env.example backend/.env
```

2. Start services for development:

```bash
# backend
cd backend && npm install && npm run server

# frontend
cd ../frontend && npm install && npm run dev

# admin (optional)
cd ../admin && npm install && npm run dev
```

Deployment
- See [README_DEPLOY.md](README_DEPLOY.md) for Vercel deployment and CI.

Notes
- Do not commit secrets. Use `backend/.env.example` as a template.
- Add Vercel-related secrets to GitHub (see `README_DEPLOY.md`) for automated deploys.

