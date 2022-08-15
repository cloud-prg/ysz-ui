<script setup>
import { ref, getCurrentInstance } from 'vue';
import Popup from '../../packages/popup/popup.vue';
const { proxy } = getCurrentInstance();
const isShow = ref(false);
const handleClick = () => {
  proxy.$message({ text: "失败下载失败失败", type: "error", delay: 500000 })
}

// 弹出钩子
const handlePopup = () => {
  isShow.value = true;
};

// 弹窗 (自动触发) 
const handleAfterClose = () => {
  console.log("我被触发了")
  isShow.value = false;
};

</script>
<template>
  <div class="test-container">
    <c-button type="primary" size="lg" @click="handleClick">下载</c-button>
    <c-button type="warning" mode="link" href="https://www.baidu.com" target="_blank">跳转到xxx</c-button>

    <c-button type="danger" @click="handlePopup">弹出xxx</c-button>
    <c-popup :isShow="isShow" closeBottom="10" size="60" @afterClose="handleAfterClose">
      <div class="content">
        <img src="../assets/hongbao.png" :style="{'width':'100px','height':'100px'}" />
      </div>
    </c-popup>
  </div>
</template>
<style lang="scss" scoped>
.test-container {
  border: 1px solid black;
  padding: 20px;

}

.content{
  border: 1px solid white;
}
</style>