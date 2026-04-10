/// <reference types="vitest" />
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    threads: false,
  },
  plugins: [
    react({}),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@infinityloop.labs/frontend-vite-lib-template',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
