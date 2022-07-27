<script setup>
import navbar from "@/views/navbar.vue";
import { onMounted, ref } from "vue";
const navbarRef = ref();

// 拿到navbar的跳转方法,并传入介绍页单页中
const toOther = () => {
  navbarRef.value.toOther({
    name: "组件",
    path: "/home/button"
  },1)
}
onMounted(() => {

})
</script>

<template>
  <navbar ref="navbarRef" />
  <router-view :toOther="toOther"></router-view>
</template>

<style scoped>
#app {
  overflow: hidden;
}
</style>

