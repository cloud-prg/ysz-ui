<script setup>
import menuList from "@/router/routerPage/pages.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
let homeHeight = ref(0);
let activeIndex = ref(0);
const router = useRouter();
const handleChangeActive = (item, index) => {
    activeIndex.value = index;
    router.push({
        name: item.name,
    })
}

onMounted(() => {
    const navbarRef = document.getElementsByClassName("navbar")[0]
    const navbarHeight = navbarRef.clientHeight;
    homeHeight.value = document.documentElement.clientHeight - navbarHeight;
})
</script>

<template>
    <div class="container" :style="{ height: homeHeight + 'px' }">
        <div class="left-menu">
            <li v-for="(item, index) in menuList[0].children" :key="index" :class="{ active: index == activeIndex }"
                @click="handleChangeActive(item, index)">
                {{ item.name }}
            </li>
        </div>
        <div class="router-view">
            <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>

</template>


<style lang="scss" >
html {
    overflow: hidden;
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
        box-shadow: 1px 0px 1px 1px #f0f0f0;
        border-right: 1px solid #f0f0f0;
        position: fixed;

        li {
            list-style: none;
            line-height: 40px;
            padding: 0 10px;
            cursor: pointer;
        }

        li:hover {
            border-right: 4px solid #0e88eb;
            color: #0e88eb;
            background-color: rgba(14, 128, 235, .1);
            transition: all 0.2s ease-out;
        }

        li.active {
            border-right: 4px solid #0e88eb;
            color: #0e88eb;
            background-color: rgba(14, 128, 235, .1);
        }
    }

    .router-view {
        flex: 1;
        height: auto;
        padding: 0 70px;
        margin-left: 300px;
        overflow-y: scroll;
    }
}
</style>