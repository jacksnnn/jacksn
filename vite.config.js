import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: './',
  
  // CSS configuration
  css: {
    // Process CSS imports
    preprocessorOptions: {
      css: {
        importLoaders: 1,
      },
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['highlight.js/lib/core', 'highlight.js/lib/languages/javascript'],
  },
}); 