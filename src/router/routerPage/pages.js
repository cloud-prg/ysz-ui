export default [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: "button",
                name: "button 按钮",
                type: "common",
                component: () => import("/packages/button/doc/doc.md"),
            },
            {
                path: "input",
                name: "input 输入框",
                type: "common",
                component: () => import("/packages/input/doc/doc.md"),
            },
            {
                path: "introduce",
                name: "介绍",
                type: "prologue",
                component: () => import("/packages/prologue/doc/introduce.md"),
            },
            {
                path: "install",
                name: "安装",
                type: "prologue",
                component: () => import("/packages/prologue/doc/install.md"),
            },
            {
                path: "journal",
                name: "更新日志",
                type: "journal",
                isCatagory: true,
                component: () => import("/packages/journal/doc/index.md"),
            }
        ]
    },
    {
        path: "/",
        name: "entry",
        component: () => import("@/views/entry.vue"),
    }

]