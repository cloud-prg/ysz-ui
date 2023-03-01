<script setup>
import navbar from "@/views/navbar.vue";
import { ref } from "vue";
import remTopx from '@/utils/remTopx';
const navbarRef = ref();

// 拿到navbar的跳转方法(第二个参数为nav下标),并传入介绍页单页中
const toOther = () => {
  navbarRef.value.toOther({
    name: "介绍",
    path: "/home/prologue"
  }, 1)
}

remTopx(window,document,window.screen.width, 16)
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

