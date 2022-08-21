import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown()
  ],
  build: {
    lib: {
      entry: "./packages/index.js",
      name: "ysz-ui",
      fileName: format => `ysz-ui-${format}.js`
    },
    rollupOptions: {
      // 排除不要的依赖
      external: ["vue",
        "vue3-perfect-scrollbar",
        "highlight.js",
        "@vitejs/plugin-vue",
        "sass-loader",
        "@vitejs/plugin-vue",
        "vite-plugin-vue-markdown",
        "@highlightjs/vue-plugin"
      ],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/style/index.scss" as *;'
      }
    }
  }

})
