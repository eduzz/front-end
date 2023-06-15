import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default () => {
  return defineConfig({
    plugins: [react(), tsConfigPaths()]
  });
};
