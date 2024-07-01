import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ],
  assetsInclude: ["**/*.md", "**/*.JPG"],
  base: "https://akhilbisht798.github.io/blogs/"
})
