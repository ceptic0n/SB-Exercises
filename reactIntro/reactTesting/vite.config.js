import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: defineVitestConfig({
    environment: 'jsdom', // Use jsdom for testing
    globals: true,        // Enable global test functions like describe, it, etc.
    // Remove the setupFiles line if you don't need it
  }),
});
