import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { structuredClone } from 'structured-clone';  // Import the polyfill

// Polyfill structuredClone if not available
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = structuredClone;
}

// Vite configuration
export default defineConfig({
  plugins: [react()],
});
