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

function copyCode() {
    const range = document.createRange(); // 创建range对象
    range.selectNode(document.querySelector(".hljs")); //获取复制内容的 id 选择器
    const selection = window.getSelection();  //创建 selection对象
    if (selection.rangeCount > 0) selection.removeAllRanges(); //如果页面已经有选取了的话，会自动删除这个选区，没有选区的话，会把这个选取加入选区
    selection.addRange(range); //将range对象添加到selection选区当中，会高亮文本块
    document.execCommand('copy'); //复制选中的文字到剪贴板
    // this.$toast('复制成功')
    console.log("复制成功!");
    selection.removeRange(range); // 移除选中的元素
}

getCode(comName, demoName)

</script>

<template>
    <div class="preview-container" v-highlight>
        <transition name="slide-fade">
            <pre class="language-html" v-show="isShowCode">
           <code class=" language-html" v-html="context" ></code>
            <i class="c-icon-copy copy" @click="copyCode"></i>
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
    border-top: 1px solid #f0f0f0;
    border-left: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    position: relative;

    .copy {
        font-size: $font-size-lg;
        position: absolute;
        top: 3%;
        right: 2%;
        cursor: pointer;

        &:hover {
            color: $primary;
            border-color: $primary;
            box-shadow: 1px 2px 3px 0px $primary;
        }


    }

    .footer {
        cursor: pointer;
        text-align: center;
        background-color: rgb(252, 251, 251);
        font-weight: 100;

        &:hover {
            box-shadow: 0px 2px 6px -2px $footer-base-color;
            transition: box-shadow 0.2s ease;
        }

        .arrow {
            width: 15px;
            height: 15px;
        }

        &:hover {
            color: rgb(75, 133, 249);
        }
    }
}
</style>