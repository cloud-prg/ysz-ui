import cInput from "./input.vue";

// 为组件提供instal方法，按需引入
cInput.install = app => {
    app.component(cInput.name,cInput);
}

// 默认导出组件
export default cInput ;