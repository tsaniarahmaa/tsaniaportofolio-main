# Tsania Portfolio

Static-ready portfolio website for Vercel hosting.

## Local Build

```bash
npm install --include=dev
npm run build
```

The final hosting folder is `dist/`.

## Deploy To Vercel From GitHub

Use these settings in Vercel:

- Framework Preset: `Vite`
- Install Command: `npm install --include=dev`
- Build Command: `npm run build`
- Output Directory: `dist`

The root `vercel.json` already contains these deployment settings.

## Upload To GitHub

```bash
git init
git add .
git commit -m "Initial Tsania portfolio deploy"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME/REPOSITORY` with your GitHub repository path.
