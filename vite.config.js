import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Import the default export for CommonJS module
// @ts-ignore
import structuredClone from 'structured-clone';

// Polyfill structuredClone if it's not available in the environment
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = structuredClone;
}

export default defineConfig({
  plugins: [react()],
});
