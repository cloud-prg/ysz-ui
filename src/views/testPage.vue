<script>
export default {
  name: '',
}
</script>
<script setup>
import { reactive, ref } from 'vue'

const { dataSource } = reactive({
  dataSource: [
    { label: "1", children: [{ label: "1-1" },] },
    { label: "2", children: [{ label: "2-1" }, { label: "2-2" }] },
    { label: "3", children: [{ label: "3-1" }, { label: "3-2", children: [{ label: "3-2-1" }, { label: "3-2-2" }] }] },
  ],
})

const handleCheck = (arr)=>{
  console.log(arr);
}
</script>
<template>
  <div class="test-container">
    <label>123</label>
    <!-- <c-tree :dataSource="dataSource" :isAllOpen="true" :openSelection="['3','3-2']"></c-tree> -->
    <!-- <c-tree :dataSource="dataSource" :isAllOpen="true" :isAllChecked="true" :disabledSelection="['2-1']"></c-tree> -->
    <c-tree :dataSource="dataSource" :isAllOpen="true" @handleCheck="handleCheck" :disabledSelection="['2-1']" :checkedSelection="['3-2-1']"></c-tree>
  </div>
</template>
<style lang='scss' scoped>
.test-container {
  border: 1px solid red;
  padding: 100px;
}
</style>