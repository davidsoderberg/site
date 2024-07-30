import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import { createRoutesFromFolders } from './vite/createRoutesFromFolders';

export default defineConfig({
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: ['**/.*'],
      routes: async (defineRoutes) => {
        try {
          const routes = createRoutesFromFolders(defineRoutes, {
            ignoredFilePatterns: ['**/*.css'],
          });

          return routes;
        } catch (e) {
          console.error(e);
        }
        return {};
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
