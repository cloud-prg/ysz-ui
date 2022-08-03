<script>
export default {
    name: "preview",
}
</script>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";

let isShowCode = ref(isShow);
let context = ref(null); // 待渲染的html模板
const { proxy } = getCurrentInstance(); // proxy就是vue实例
const { comName, demoName, isShow } = defineProps({
    comName: {
        type: String
    },
    demoName: {
        type: String
    },
    isShow: {
        type: Boolean,
        default: true,
    }
})

/**
 * ?raw作用： 去解析*.vue这个文件
 * import返回的是一个异步结果,因此需要使用Promise then的方式去获取
 * 也可以使用Async await的方式去获取
*/
function getCode(comName, demoName) {
    const isDev = import.meta.env.MODE === 'development'
    const url = `../../packages/${comName}/doc/${demoName}.vue?raw`;

    // 开发环境和生产环境使用不同的预浏览代码回值
    if (isDev) {
        Promise.resolve(import(/* @vite-ignore */url)).then(res => {
            const { default: df } = res; // 返回的default并不能用v-html去解析，因为它并没有完全解析成原生代码。

            // hljs.highlightAuto可以让default转为原生html,通过取值value即可。
            context.value = proxy.$hljs.highlightAuto(df).value;
        })
    } else {
        fetch(url).then(res => {
            const result = res.text();
            Promise.resolve(result).then(r => {
                context.value = proxy.$hljs.highlightAuto(r).value;
            })
        })
    }

}
function handleToggleShow() {
    isShowCode.value = !isShowCode.value;
}

getCode(comName, demoName)

</script>

<template>
    <div class="preview-container" v-highlight>
        <transition name="slide-fade">
            <pre class="language-html" v-show="isShowCode">
           <code class=" language-html" v-html="context" ></code>  
        </pre>

        </transition>

        <div class="footer" @click="handleToggleShow">
            <span>{{ isShowCode ? '隐藏代码' : '显示代码' }}</span>
            &lt;/
            &gt;
        </div>
    </div>
</template>


<style lang="scss" scoped>
.slide-fade-enter-to {
    opacity: 1;
    transition: all 0.2s ease;
}

.slide-fade-leave-from {
    opacity: 1;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-25px);
    transition: all 0.2s ease;
}

.preview-container {
    width: auto;
    height: auto;
    box-shadow: 0px 0px 1px 1px $footer-base-color;
    .footer {
        cursor: pointer;
        text-align: center;
        background-color: rgb(252, 251, 251);
        font-weight: 100;
        box-shadow: 0px 0px 1px 1px $footer-base-color;

        .arrow {
            width: 15px;
            height: 15px;
        }

        &:hover {
            background-color: rgb(232, 243, 249);
            color: rgb(75, 133, 249);
        }
    }
}
</style>