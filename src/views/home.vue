<script setup>
import menuList from "@/router/routerPage/pages.js";
import preview from "@/components/preview.vue"
import { ref } from "vue";
import { useRouter } from "vue-router";

let activeIndex = ref(0);
const router = useRouter();
const handleChangeActive = (item,index) => {
    activeIndex.value = index;
    router.push({
        name: item.name,
    })
}

console.log(menuList);
</script>

<template>
    <div class="container">
        <div class="left-menu">
            <li v-for="(item, index) in menuList[0].children" :class="{ active: activeIndex == index }"
                @click="handleChangeActive(item, index)" :key="index">
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
        border-right: 1px solid #f0f0f0;

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
        overflow-y: auto;
        padding: 0 70px;
        
    }
}
</style>