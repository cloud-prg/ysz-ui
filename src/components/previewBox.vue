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
    box-shadow: 0px 0px 1px 1px $footer-base-color;

}
</style>