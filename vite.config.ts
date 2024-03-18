import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import directoryExporter from './plugins/directory-exporter';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { createHtmlPlugin } from 'vite-plugin-html';

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    Buffer: ['buffer', 'Buffer'],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: isProduction ? 'robots.prod.txt' : 'robots.dev.txt',
          dest: '',
          rename: 'robots.txt',
        },
      ],
    }),
    createHtmlPlugin({
      inject: {
        data: {
          metaRobots: isProduction
            ? ''
            : '<meta name="robots" content="noindex,nofollow"/>',
        },
      },
    }),
    directoryExporter([
      {
        directoryPath: 'src/assets/img/*',
        fileExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico'],
        namingConvention: 'camel',
      },
      {
        directoryPath: 'src/components',
        fileExtensions: ['.tsx'],
        exportType: 'default_to_named',
        isOmitExtension: true,
      },
      {
        directoryPath: 'src/components',
        fileExtensions: ['.ts'],
        exportType: 'named',
        isOmitExtension: true,
        rootDirectory: 'src/components',
      },
      {
        directoryPath: 'src/apis',
        fileExtensions: ['.ts'],
        exportType: 'named',
        isOmitExtension: true,
        rootDirectory: 'src/apis',
      },
    ]),
  ],
});
