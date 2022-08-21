
# 介绍
  这是一个基于`vite vue3`搭建的`PC端`组件库。它记录**日常开发**中遇到的需求组件,或是在**技术社区**中所遇到、值得去实现的组件。

<div style="'text-align':'center'">
    <img style="'height:100px'" src="./src/assets/logo.png">
    <img style="'height:100px'" src="./src/assets/navLogo.png">
</div>

# 全局安装
安装命令:
`npm install ysz-ui -S`


# 项目中引用(一次性引入)
`main.js`下,引入以下两行代码。

```js
 // src/main.js
 import yszUI from "ysz-ui";
 import "ysz-ui/dist/style.css";
 import "ysz-ui/dist/iconfont.css";

 app.use(yszUI)
```

# 按需引入
1. 在`src`目录下创建相关目录（如`yszui`)
2. 在相关目录下，创建`index.js`
3. 在`index.js`中引入需使用的组件。并以`install`作为函数表达式，作为对象的一员暴露出去。
4. 在`main.js`中的`Vue`实例中使用它。

## 引用文件示例

```js
// yszui/index.js
import { button, table } from 'ysz-ui'
const yszUI = {
  install: function (Vue) {
    Vue.use(button)
    Vue.use(table)
  }
}
export default yszUI

```


## 主文件示例

```js
// src/main.js
import yszUI from "./yszui";
import { createApp} from "vue";
import App from "./App.vue";
const app = createApp(App);

app.use(yszUI);
```

# 项目地址
[ysz-ui组件库](http://www.jiujiuwarehouse.com:5173)

# 注意事项
  该组件库仅用于个人学习，且处于开发阶段，切勿用于生产环境。
