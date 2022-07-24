import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import testUI from "../packages/index";
import router from "./router";

// # highlight 的样式，依赖包，组件
import 'highlight.js/styles/color-brewer.css'
import 'highlight.js/lib/common'
import hljs from "highlight.js";


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
appInstance.use(testUI);
appInstance.use(router);
appInstance.mount('#app')
