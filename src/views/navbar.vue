<script setup>
import logoImg from "../assets/logo.jpg";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const route = useRouter();

const nav = reactive({
    list: [
        {
            name: "首页",
            path: "/",
        },
        {
            name: "组件",
            path: "/home/button"
        },
        {
            name: "博客",
            path: "blank",
            url: "https://yunshangzhou.github.io/js-book/"
        },
    ]
})

// 转到首页
const toHome = () => {
    route.push("/")
}

// 转到其他页
const toOther = (item, index) => {
    if (item.path != "blank") {
        route.push(item.path);
    } else {
        window.open(item.url);
    }
}



</script>


<template>
    <!-- 组件库导航栏 -->
    <!-- 该有的结构: flex布局,水平布局按照中间空白隔开的方式。左侧logo,右侧导航菜单。 -->
    <div class="navbar">
        <div class="left-part">
            <div class="logo-container">
                <a href="javascript:;" class="top-part" @click="toHome">
                    <img :src="logoImg" class="logo" alt="导航栏左侧logo图标" />
                    <span>ysz-ui</span>
                </a>
                <!-- <div class="bottom-part">
                    ver 0.0.1
                </div> -->
            </div>
        </div>

        <div class="right-part">
            <a v-for="(item, index) in nav.list" :key="index" href="javascript:;" @click="toOther(item, index)"
                class="nav-item">
                {{ item.name }}
            </a>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.navbar {
    // border: 1px solid red;
    background-color: white;
    box-shadow: 0px 1px 5px 0px #f0f0f0;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;

    .left-part {
        .logo-container {
            margin-left: 30px;
            cursor: pointer;

            .top-part {
                padding-bottom: 5px;
                width: 110px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    letter-spacing: 1px;
                    font-weight: bold;
                    font-size: 20px;

                }

                .logo {
                    width: 40px;
                }

                &:hover {
                    box-shadow: 0 2px 4px -3px rgb(199, 199, 199);
                    text-shadow: 1px 1px 10px #c0baba;
                }
            }

            // .bottom-part {
            //     width: 100%;
            //     text-align: center;
            //     letter-spacing: 2px;
            //     font-size: 12px;
            // }
        }
    }

    .right-part {
        display: flex;
        height: 100%;

        .nav-item {
            padding: 0 10px;
            height: calc(100% - 2px);
            font-size: 20px;
            line-height: 2.7;
            border-bottom: 2px solid transparent;
            width: 50px;
            text-align: center;

            &:hover {
                border-bottom: 2px solid $primary;
                cursor: pointer;
                background: linear-gradient(to top, $primary 0%, white 5%);
                transition: all 0.2s ease;
            }
        }

        .nav-item + .nav-item{
            border-left: 1px solid $border-base-color;
        }
    }
}
</style>