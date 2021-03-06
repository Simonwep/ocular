import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite';
import manifest from './assets/manifest.json';

export default defineConfig(({mode}) => ({
  envPrefix: ['OAUTH'],

  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[local]_[hash:base64:5]' : (() => {
        let index = 0;
        return () => {
          const hash = (index++).toString(36);
          return /^\d/.test(hash[0]) ? `_${hash}` : hash;
        };
      })()
    }
  },

  define: {
    'import.meta.env.APP_BUILD_TIMESTAMP': Date.now()
  },

  plugins: [
    tsconfigPaths({loose: true}),
    vue(),
    VitePWA({manifest})
  ]
}));
