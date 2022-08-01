
<template>
    <div class="container" :style="{ height: homeHeight + 'px' }">
        <perfect-scrollbar class="left-menu">
            <div class="entire-item" v-for="(v, k) in entireList" :key="k">
                <span :class="{ active: activeIndex == k, 'clickable-title': true }" v-if="v.clickable"
                    @click="handleChangeActive(v.name, k)">{{ v.name
                    }}</span>
                <span v-else class="unclickable-title">{{ v.name }}</span>
                <li v-for="(item, index) in v.children" :key="`${k}-${index}`"
                    :class="{ active: activeIndex == `${k}-${index}` }"
                    @click="handleChangeActive(item, `${k}-${index}`)">
                    {{ item }}
                </li>
            </div>
        </perfect-scrollbar>
        <perfect-scrollbar class="router-view">
            <router-view  v-slot="{ Component }">
                <transition name="slide-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
                <img @click="toTop" :src="toTopImg" class="to-top" />
            </router-view>
        </perfect-scrollbar>

    </div>

</template>
<script setup>
import menuList from "@/router/routerPage/pages.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import toTopImg from "../assets/toTop.png"
let homeHeight = ref(0); // 主页高度
let activeIndex = ref("prologue-0"); // 导航下标
const router = useRouter(); // 实例化路由
const docList = menuList[0].children; // 文档列表
const routerViewRef = ref(null); // 子路由的文本对象


let entireList = { // 文档标题，内容列表(完整列表)
    journal: { name: "更新日志", clickable: true, children: [] },
    prologue: { name: "快速上手", clickable: false, children: [] },
    common: { name: "通用组件", clickable: false, children: [] },
}
// 完整列表拿到对应路径
docList.forEach(item => {
    !item?.isCatagory && entireList[item.type].children.push(item.name);
})

// 左侧栏点击，右侧内容变化
const handleChangeActive = (name, index) => {
    console.log(name, index)
    activeIndex.value = index;
    router.push({ name })
}


onMounted(() => {
    // 挂载时初始化页面的主页面的高度
    const navbarRef = document.getElementsByClassName("navbar")[0]
    const navbarHeight = navbarRef.clientHeight;
    homeHeight.value = document.documentElement.clientHeight - navbarHeight;

    console.log(JSON.parse(JSON.stringify(routerViewRef.value)))
    // const rRef = document.querySelectorAll(".router-view")[0];
    // console.log(rRef);
})

</script>



<style lang="scss" >
html {
    overflow: hidden;
}

.ps {
    height: 500px;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-45px);

}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transition: all 0.8s ease;

}



.container {
    width: 100%;
    display: flex;

    .left-menu {
        width: 300px;
        height: 100%;
        overflow-y: auto;
        border-right: 1px solid #f0f0f0;
        position: fixed;

        .entire-item {

            .unclickable-title,
            .clickable-title {
                margin: 10px 25px;
                padding: 10px 0;
                display: block;
                color: black;
                font-weight: bold;
                font-size: $font-size-ml;
            }

            .clickable-title:hover,
            .clickable-title.active {
                color: $primary;
                cursor: pointer;
            }

            .unclickable-title {
                border-bottom: 1px solid #e2dede;
            }

            li {
                line-height: 40px;
                font-size: $font-size-md;
                list-style: none;
                color: $item;
                padding: 0 20px;
                border-left: 5px solid transparent;
                cursor: pointer;
            }

            li:hover {
                color: #0e88eb;
                transition: all 0.2s ease-out;
            }

            li.active {
                border-left: 5px solid #0e88eb;
                color: #0e88eb;
                background-color: rgba(14, 128, 235, .1);
            }
        }
    }

    .router-view {
        flex: 1;
        height: auto;
        padding: 0 70px;
        margin-left: 300px;
        position: relative;

        .to-top {
            width: 50px;
            position: fixed;
            right: 60px;
            bottom: 60px;
            cursor: pointer;
        }
    }
}
</style>