<template>
    <div class="preview-container" v-highlight>
        <transition name="slide-fade">
            <pre class="language-html" v-show="isShowCode">
           <code class=" language-html">{{ sourceCode }}</code>  
        </pre>

        </transition>

        <div class="footer" @click="handleToggleShow">
            <span>{{ isShowCode ? '隐藏代码' : '显示代码' }}</span>
            &lt;/
            &gt;
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DownArrow from "@/assets/DownArrow.png";
import UpArrow from "@/assets/UpArrow.png";

let isShowCode = ref(false);

const sourceCode = ref("")
const { comName, demoName } = defineProps({
    comName: {
        type: String
    },
    demoName: {
        type: String
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
            const { default: df } = res;
            sourceCode.value = df;
        })
    } else {
        fetch(url).then(res => {
            const result = res.text();
            Promise.resolve(result).then(r => {
                sourceCode.value = r;
            })
        })
    }

}
function handleToggleShow() {
    isShowCode.value = !isShowCode.value;
}

getCode(comName, demoName)



</script>

<style lang="scss" scoped>
.slide-fade-enter-from {
    opacity: 0;
}

.slide-fade-enter-to {
    opacity: 1;
    transition: all 0.5s ease;
}

.slide-fade-leave-from {
    opacity: 1;
}

.slide-fade-leave-to {
    opacity: 0;
    transition: all 0.3s ease;
}

.preview-container {
    width: auto;
    height: auto;
    margin: 10px 0;
    border: 1px solid #dad7d7;

    .footer {
        border-top: 1px solid #f0f0f0;
        cursor: pointer;
        text-align: center;
        background-color: rgb(252, 251, 251);
        font-weight: 100;

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

pre {
    margin: 0;
    padding: 5px 0;
    display: flex;

    code{
        flex:1;
    }
}

pre code.hljs {
    padding: 0 20px;
}
</style>