import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import install from "../packages/index";
import router from "./router";

// # highlight 的样式，依赖包，组件
import 'highlight.js/styles/color-brewer.css'
import 'highlight.js/lib/common'
import hljs from "highlight.js";

// 引用第三方组件 vue3-perfect-scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

// 创造app实例
const appInstance = createApp(App);

// 代码高亮自定义指令
appInstance.directive("highlight",el=>{
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach(block=>{
        hljs.highlightBlock(block);
    })
})

// 全局注册组件
appInstance.use(install);
appInstance.use(PerfectScrollbar);
appInstance.use(router);
appInstance.mount('#app')
