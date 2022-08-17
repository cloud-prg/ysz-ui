<script setup>
import logoImg from "../assets/logo.png";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
let entryHeight = ref(0);
const router = useRouter();
const toNext = (name) => {

    // 调用父级的方法
    name == 'home' && toOther();
    name == 'github' && window.open("https://github.com/YunShangZhou/ysz-ui");
}

// 引用类型数据
const state = reactive({
    entry: {
        title: "一款支持vue3的组件库",
        describe: "基于vite+vue3开发的Pc端组件库,组件简易实用，有一定的色系审美、交互支撑。"
    },

    featureList: [
        {
            title: "手工搭建",
            describe: "脱离vitepress、vuepress脚手架,更易于维护代码、拓展内容。"
        },
        {
            title: "项目框架支持",
            describe: "基于vue3.x开发,支持vue3使用"
        },
        {
            title: "使用方式灵活",
            describe: "可以按需导入组件,也可一次性导入全部。"
        },
        {
            title: "交互处理",
            describe: "渐进增强使用CSS3 animation和transition,增强组件交互体验。"
        }
    ]
})

const { featureList, entry } = state;

// props
const { toOther } = defineProps({
    toOther: {
        type: Function,
        default: () => { }
    }
})

onMounted(() => {
    const navbarRef = document.getElementsByClassName("navbar")[0]
    const navbarHeight = navbarRef.clientHeight;
    entryHeight.value = document.documentElement.clientHeight - navbarHeight;
})

router.beforeEach((to, from, next) => {
    if (to.path.includes("/home/")) {
        sessionStorage.clear();
    }
    next();
});
</script>

<template>
    <div class="entry" :style="{ height: entryHeight + 'px' }">
        <img :src="logoImg" alt="介绍页logo" />
        <span class="title">{{ entry.title }}</span>
        <span class="describe">{{ entry.describe }}</span>
        <div class="entry-button-container">
            <c-button size="xl" class="entry-button" type="primary" @click="toNext('home')">
                快速上手</c-button>
            <c-button size="xl" class="entry-button" type="other" plain @click="toNext('github')">
                github
                <i class="c-icon-share3"></i>
            </c-button>
        </div>

        <div class="feature-list">
            <div class="item" v-for="(item, index) in featureList" :key="index">
                <span class="title">{{ item.title }}</span>
                <span class="describe">{{ item.describe }}</span>
            </div>
        </div>
        <div class="right-clare">
            MIT Licensed | Copyright © 2022-present
        </div>

    </div>
</template>


<style lang="scss">
.entry {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 4% 0 0 0;
    box-sizing: border-box;
    background-color: $entry-bg-color;

    img {
        width: auto;
        height: 150px;
    }

    .title {
        color: $entry-title-color;
        font-weight: bold;
        font-size: 40px;
    }

    .describe {
        color: $entry-describe-color;
        font-size: 20px;
    }

    .entry-button-container {
        display: flex;
        justify-content: center;


        .entry-button {
            button {
                padding: 18px 28px !important;
            }

            i {
                font-size: 28px;
            }
        }

        .entry-button+.entry-button {
            margin-left: 20px;
        }
    }


    .feature-list {
        border-top: 1px solid $border-base-color;
        border-bottom: 1px solid $border-base-color;
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;

        .item {
            display: flex;
            flex-direction: column;
            width: auto;
            height: 70%;
            justify-content: space-around;
            flex: 1;
            margin: 0 15px;

            .title {
                font-size: $font-size-xl;
            }

            .describe {
                font-size: $font-size-base;
            }

            &:hover {
                background-color: wheat;
                transition: all 0.5s ease;
            }
        }

    }

    .right-clare {
        color: $clare;
    }
}
</style>