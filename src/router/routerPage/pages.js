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
                path: "table",
                name: "table 表格",
                type: "common",
                component: () => import("/packages/table/doc/doc.md"),
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
                path: "test",
                name: "测试页面",
                type: "prologue",
                component: () => import("../../views/testPage.vue"),
            },
            {
                path: "journal",
                name: "更新日志",
                type: "journal",
                isUnique: true,
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