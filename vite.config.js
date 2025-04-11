import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages
  // If deploying to https://<USERNAME>.github.io/, set base to '/'
  // If deploying to https://<USERNAME>.github.io/<REPO-NAME>/, set base to '/<REPO-NAME>/'
  base: '/github_portfolio/',
  
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