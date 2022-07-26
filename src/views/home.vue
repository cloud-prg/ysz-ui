<script setup>
import menuList from "@/router/routerPage/pages.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
let leftMenuHeight = ref(0);
let activeIndex = ref(0);
const router = useRouter();
const handleChangeActive = (item, index) => {
    activeIndex.value = index;
    router.push({
        name: item.name,
    })
}


console.log(menuList);

onMounted(()=>{
    const navbarRef = document.getElementsByClassName("navbar")[0]
    const navbarHeight = navbarRef.clientHeight;
    leftMenuHeight.value = document.documentElement.clientHeight - navbarHeight;
})
</script>

<template>
    <div class="container">
        <div class="left-menu" :style="{height: leftMenuHeight+'px'}">
            <li v-for="(item, index) in menuList[0].children" :key="index" :class="{ active: index == activeIndex }"
                @click="handleChangeActive(item, index)">
                {{ item.name }}
            </li>
        </div>
        <div class="router-view">
            <router-view></router-view>
        </div>

    </div>

</template>


<style lang="scss" >
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    .left-menu {
        width: 300px;
        height: auto;
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
        overflow-y: hidden;
        padding: 0 70px;
        margin-left: 300px;
    }
}
</style>