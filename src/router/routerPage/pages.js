export default [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
        children: [
            // 通用
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
                path: "checkbox",
                name: "checkbox 选项",
                type: "common",
                component: () => import("/packages/checkbox/doc/doc.md"),
            },
            {
                path: "gap",
                name: "gap 间距",
                type: "common",
                component: () => import("/packages/gap/doc/doc.md"),
            },
            {
                path: "tree",
                name: "tree 树",
                type: "common",
                component: () => import("/packages/tree/doc/doc.md"),
            },
            // 交互
            {
                path: "backtop",
                name: "backtop 回到顶部",
                type: "interactive",
                component: () => import("/packages/backtop/doc/doc.md"),
            },

            {
                path: "popup",
                name: "popup 弹框",
                type: "interactive",
                component: () => import("/packages/popup/doc/doc.md"),
            },
            {
                path: "message",
                name: "message 消息框",
                type: "interactive",
                component: () => import("/packages/message/doc/doc.md"),
            },
            {
                path: "tip",
                name: "tip 消息提示",
                type: "interactive",
                component: () => import("/packages/tip/doc/doc.md"),
            },
            {
                path: "drawer",
                name: "drawer 抽屉",
                type: "interactive",
                component: () => import("/packages/drawer/doc/doc.md"),
            },
            // 前言
            {
                path: "prologue",
                name: "前言",
                type: "prologue",
                component: () => import("/packages/prologue/doc/prologue.md"),
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
                path: "notice",
                name: "注意事项",
                type: "prologue",
                component: () => import("/packages/prologue/doc/notice.md"),
            },
            // {
            //     path: "test",
            //     name: "测试页面",
            //     type: "prologue",
            //     component: () => import("../../views/testPage.vue"),
            // },
            // 更新日志
            {
                path: "journal",
                name: "更新日志",
                type: "journal",
                isUnique: true,
                component: () => import("/packages/journal/doc/index.md"),
            },

            // 初始化
            {
                path: "color",
                name: "color 颜色",
                type: "initial",
                component: () => import("/packages/prologue/doc/color.md"),
            },
            {
                path: "icon",
                name: "icon 图标",
                type: "initial",
                component: () => import("/packages/icon/doc/doc.md"),
            },
            {
                path: "layout",
                name: "layout 布局",
                type: "initial",
                component: () => import("/packages/layout/doc/doc.md"),
            },
        ]
    },
    {
        path: "/",
        name: "entry",
        component: () => import("@/views/entry.vue"),
    }

]