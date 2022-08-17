<script>
export default {
  name: '',
}
</script>
<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="test-container">
    <label>123</label>
    <c-tip :value="100" maxCount="100">
      <div>
        分分钟需要你
      </div>
    </c-tip>
    <c-tip :value="10">
      <c-button>敢爱敢做</c-button>
    </c-tip>

    <!-- <c-tip :value="10">
      <div>
        分分钟需要你
      </div>
    </c-tip> -->

  </div>
</template>
<style lang='scss' scoped>
.test-container {
  border: 1px solid red;
  padding: 100px;
}
</style>