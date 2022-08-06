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
      fileName: format=> `ysz-ui-${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@use "./src/style/index.scss" as *;'
      }
    }
  }

})
