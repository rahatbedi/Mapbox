import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep the REACT_APP_ prefix from Create React App so existing .env files still work.
  envPrefix: 'REACT_APP_',
  resolve: {
    alias: {
      // react-mapbox-gl's ESM build assigns to a namespace import
      // (`MapboxGl.accessToken = ...`), which Rolldown rejects; use its CJS build.
      'react-mapbox-gl': 'react-mapbox-gl/lib/index.js',
    },
  },
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
