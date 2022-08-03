<script setup>
import logoImg from "../assets/logo.jpg";
import { ref, onMounted, reactive } from "vue";
let entryHeight = ref(0);
const toHome = () => {
    // 调用父级的方法
    toOther();
}

const feature = reactive({
    List: [
        {
            title: "手工搭建",
            describe: "维护组件,更新拓展项目更方便"
        },
        {
            title: "知识分享",
            describe: ""
        },
        {
            title: "",
            describe: ""
        },
    ]
})

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
</script>

<template>
    <div class="entry" :style="{ height: entryHeight + 'px' }">
        <img :src="logoImg" alt="介绍页logo" />
        <span class="title">个人组件库</span>
        <span class="describe">纯手工搭建,方便扩展</span>
        <c-button size="xl" class="button-container" type="primary" @click="toHome">快速上手🚀</c-button>
        <div class="feature-list">
            <div class="item">
                <span class="title">手工搭建</span>
                <span class="describe">维护组件,更新拓展项目更方便</span>
            </div>
            <div class="item">
                <span class="title">项目框架支持</span>
                <span class="describe">基于vue3.x开发,支持vue3使用</span>
            </div>
            <div class="item">
                <span class="title">想法记录</span>
                <span class="describe">记录日常开发或游览社区时的灵感。</span>
            </div>
        </div>

        <div class="right-clare">
            MIT Licensed | Copyright © 2022-present
        </div>

        <div>
            <i class="c-icon-backtop1"></i>
            <i class="c-icon-download"></i>
        </div>
    </div>
</template>


<style lang="scss">
.entry {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0 25px 0;
    box-sizing: border-box;

    img {
        width: 300px;
    }

    .title {
        color: $title-base-color;
        font-weight: bold;
        font-size: 40px;
    }

    .describe {
        color: $describe-base-color;
        font-size: 20px;
    }

    .feature-list {
        border-top: 1px solid $border-base-color;
        border-bottom: 1px solid $border-base-color;
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;

        .item {
            display: flex;
            flex-direction: column;
            width: auto;
            height: 70%;
            justify-content: space-around;

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

        .item+.item {
            padding-left: 55px;
            border-left: 1px solid $border-deep-color;
        }
    }

    .right-clare{
        color: $clare;
    }
}
</style>