<script setup>
import { getCurrentInstance} from 'vue';
const { proxy } = getCurrentInstance();

const handleClick = ()=>{
  proxy.$message({text:"消息框的默认使用",delay:1000})
}

</script>
<template>
  <div class="test-container">
    <c-button type="info" plain size="md" @click="handleClick">消息提示</c-button>
  </div>
</template>
<style lang="scss" scoped>
.test-container {
  padding: 20px;

}
</style>