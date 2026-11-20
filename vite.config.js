import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('/@mui/') || id.includes('/@emotion/')) return 'mui-vendor';
          if (id.includes('/framer-motion/')) return 'motion-vendor';
          if (id.includes('/gsap/') || id.includes('/animejs/')) return 'animation-vendor';
          if (id.includes('/react-router')) return 'router-vendor';
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
});
