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
  base:"./", // 资源地址前缀
  build: {
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@use "./src/style/index.scss" as *;'
      }
    }
  }

})
