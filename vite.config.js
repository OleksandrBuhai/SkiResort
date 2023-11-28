import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      reduxStore : `${path.resolve(__dirname, "./src/reduxStore/")}`,
      reusableComponents : `${path.resolve(__dirname, "./src/reusableComponents/")}`,
     
    },
  },
})
