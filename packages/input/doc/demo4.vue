<script setup>
import {ref} from 'vue'
const inputValue = ref("");

const rightIconClick = ()=>{
    alert("上传成功!");
}

</script>
<template>
   <div class='demo-container'>
    <c-input placeholder="点击右侧图标，触发钩子函数" v-model="inputValue" rightIcon="upload" :rightIconClick="rightIconClick"></c-input>
   </div>
</template>
<style lang='scss' scoped>
.demo-container{
   padding: 5px 10px;
}
</style>