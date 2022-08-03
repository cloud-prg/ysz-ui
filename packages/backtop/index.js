import backtop from "./backtop.vue";

// 为组件提供instal方法，按需引入
backtop.install = app => {
    app.component(backtop.name,backtop);
}

// 默认导出组件
export default backtop ;