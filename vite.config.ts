import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import directoryExporter from './plugins/directory-exporter';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    Buffer: ['buffer', 'Buffer'],
  },
  plugins: [
    react(),
    tsconfigPaths(),
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
    ]),
  ],
});
