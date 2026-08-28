import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//
// IMPORTANT for GitHub Pages:
// This deploys to https://svm04.github.io/Portfolio/ (a project page for the
// repo named "Portfolio"), so base must match that repo name exactly,
// including case. If you ever rename the repo, update this to match.
// If you deploy to https://svm04.github.io/ directly (a user page, repo named
// exactly "svm04.github.io"), change base to '/'.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
