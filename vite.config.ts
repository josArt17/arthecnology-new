import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        principal: resolve(__dirname, "src/principal/main.html"),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})