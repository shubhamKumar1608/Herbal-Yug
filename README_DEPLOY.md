# Deployment Guide — Vercel (Frontend, Admin) + Backend

This repository contains three projects: `frontend/` (Vite React), `admin/` (Vite React admin panel), and `backend/` (Express API). This guide walks through preparing and deploying them to Vercel.

IMPORTANT: Secrets must never be committed. `backend/.env` has been sanitized; fill real values locally before running.

1) Prepare repository

```bash
# (from repo root)
git add .gitignore
git add backend/.env.example
git commit -m "Add .gitignore and env example"
# If backend/.env was previously tracked, remove it from git index
git rm --cached backend/.env || true
git commit -m "Remove backend .env from repository" || true
git push origin main
```

If secrets were previously committed you should rotate them and consider rewriting history.

2) Deploy Backend to Vercel

- Go to https://vercel.com → New Project → Import Git Repository → select this repo.
- Set the **Root Directory** for this project to `backend`.
- In Project Settings → Environment Variables, add the following keys and their values:
  - `MONGO_URI` → MongoDB Atlas connection string (without trailing `/e-commerce`)
  - `CLOUDINARY_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_SECRET_KEY`
  - `JWT_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
  - `STRIPE_SECRET_KEY` (optional)
- Deploy. Note the generated backend URL (e.g., `https://your-backend.vercel.app`).

3) Deploy Frontend and Admin to Vercel

For each (two separate projects):

- Import the same Git repository but set **Root Directory** to `frontend` (first) and `admin` (second).
- In each Project Settings → Environment Variables add:
  - `VITE_BACKEND_URL` → `https://<your-backend-vercel-domain>`
- Build command: `npm run build` (Vercel will detect Vite automatically). Output will be deployed to a static site URL.

4) Post-deploy checks

- Open `frontend` and `admin` URLs.
- Verify login/register, product listing, image uploads (Cloudinary), cart and orders.
- If any API 404/CORS issues occur, confirm `VITE_BACKEND_URL` and ensure backend is running.

5) Local dev commands

Backend:
```bash
cd backend
npm install
cp .env.example .env   # fill values
npm run server
```

Frontend/Admin:
```bash
cd frontend
npm install
npm run dev

cd ../admin
npm install
npm run dev
```

6) Notes & security

- Rotate any secrets you committed previously. Use the Vercel dashboard for env vars — do not store secrets in repo.
- If you want, I can prepare a GitHub Actions workflow to deploy automatically when pushing to specific branches.
