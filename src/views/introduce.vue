<script setup>
import { useRouter } from "vue-router";
import logoImg from "../assets/logo.jpg";
import { ref, onMounted, reactive } from "vue";

let introduceHeight = ref(0);
const route = useRouter();
const toHome = () => {
    route.push("/home/button");
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

onMounted(() => {
    const navbarRef = document.getElementsByClassName("navbar")[0]
    const navbarHeight = navbarRef.clientHeight;
    introduceHeight.value = document.documentElement.clientHeight - navbarHeight;
})
</script>

<template>
    <div class="introduce" :style="{ height: introduceHeight + 'px' }">
        <img :src="logoImg" alt="介绍页logo" />
        <span class="title">个人组件库</span>
        <span class="describe">纯手工搭建,方便扩展</span>
        <c-button class="button-container" type="primary" @click="toHome">点击进入</c-button>
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
    </div>
</template>


<style lang="scss">
.introduce {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
        margin-top: 20px;
    }

    .title {
        color: $title-base-color;
        font-weight: bold;
        font-size: 40px;
        margin: 15px 0;
    }

    .describe {
        color: $describe-base-color;
        font-size: 20px;
    }

    .button-container {
        margin: 15px 0;
    }

    .feature-list {
        border-top: 1px solid $border-base-color;
        border-bottom: 1px solid $border-base-color;
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;

        .item {
            display: flex;
            flex-direction: column;
            width: 30%;

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
            padding-left: 15px;
            border-left: 1px solid #f0f0f0;
        }
    }
}
</style>