import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import { RouteManifest, validateRoutes } from './vite/validateRoutes';
import { createRoutesFromFolders } from './vite/createRoutesFromFolders';

export default defineConfig({
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: ['**/.*'],
      routes: async (defineRoutes) => {
        const routes = createRoutesFromFolders(defineRoutes, {
          ignoredFilePatterns: ['**/*.css'],
        });

        await validateRoutes(routes as RouteManifest);

        return Promise.resolve(routes);
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
