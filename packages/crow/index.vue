<script>
export default {
  name: "cRow"
}
</script>
<script setup>

</script>
<template>
  <div class="ysz-row-default">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.ysz-row-default {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>