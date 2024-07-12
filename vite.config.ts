import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createRoutesFromFolders } from '@remix-run/v1-route-convention';
import { vercelPreset } from '@vercel/remix/vite';

export default defineConfig({
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: ['**/.*'],
      routes: (defineRoutes) => {
        return Promise.resolve(
          createRoutesFromFolders(defineRoutes, {
            ignoredFilePatterns: ['**/*.css'],
          })
        );
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
