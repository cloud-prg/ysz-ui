<!--
 * @Author: Yun 912453237@qq.com
 * @Date: 2022-08-04 02:11:10
 * @LastEditors: Yun 912453237@qq.com
 * @LastEditTime: 2022-08-05 10:12:49
 * @FilePath: \vuepress-learn-jsf:\test-baseui\src\components\previewBox.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Yun 912453237@qq.com, All Rights Reserved. 
-->
<script>
export default {
    name: "previewBox",
}
</script>
<script setup>

</script>
<template>
    <div class="preview-box">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.preview-box {
    border: 1px solid #f0f0f0;
    border-bottom: transparent;
}
</style>