import cButton from "./button/";
import input from "./input/";
import backtop from "./backtop/";

// 非功能类组件(用于代码显示)
import preview from "../src/components/preview.vue";
import previewBox from "../src/components/previewBox.vue";


// 组件列表，在app实例上注册
const components = [cButton, input, backtop , preview,previewBox];

// 表达式写成函数的好处：能在return前添加额外的执行语句。
const install = app => {
    // 如果已安装，则不继续执行。
    if (install.installed) return;
    // 按个人所需添加东西...
    components.forEach(component => {
        app.component(component.name, component);
    })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
const yszUI = { install };
export default yszUI;