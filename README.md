# Saving.Careers - SEO, AEO & GEO Challenge

Outcome-driven digital marketing learning challenge by Saving.Careers with Nikhil Sir.

## Quick Start & Local Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This compiles optimized assets to the `/dist` directory.

## Deploying to Vercel

### Option 1: Via GitHub (Recommended)
1. Create a new repository on [GitHub](https://github.com/new).
2. Push this project:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel Dashboard](https://vercel.com/new) -> **Import Git Repository**.
4. Vercel will automatically detect **Vite** and configure the build settings using `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the on-screen prompts (accept default Vite settings).

