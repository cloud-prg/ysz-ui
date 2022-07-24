import { createRouter, createWebHashHistory } from "vue-router";
import routePages from "./routerPage/pages";
// 页面路径数组
const routes = routePages;

// 路由实例
const router = createRouter({
    routes,
    history: createWebHashHistory(),
    scrollBehavior: (to, from, savedPosition) => {
        document.title = to.name;
        if (to.fullPath != "/") {
            document.querySelector(".yunuirightView").scrollTop = 0;
        }
    },

})

export default router;

