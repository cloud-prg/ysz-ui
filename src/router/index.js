import { createRouter, createWebHashHistory } from "vue-router";
import routePages from "./routerPage/pages";
// 页面路径数组
const routes = routePages;

// 路由实例
const router = createRouter({
    routes,
    history: createWebHashHistory(),
    /**
     * 单页面路由跳转，滚动条置顶
     * 由于浏览器特性，在页面切换时，滚动条会保留在原来的位置。因此需要用路由守卫去矫正
    */
    scrollBehavior(to, from, savePosition) {
        document.title = to.name;
        if (to.fullPath != '/') {
            document.querySelectorAll(".rightView").scrollTop = 0;
        }
    }
})

export default router;

