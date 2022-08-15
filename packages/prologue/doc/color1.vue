<script>
export default {
    name: '',
}
</script>
<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();
const state = reactive({
    colorList: ["primary", "warning", "success", "other", "danger", "info"],
    opacityList: ["1", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"],
    colorCodeObj: {
        primary: '#409EFF',
        success: '#67C23A',
        other: '#51c26dbf',
        warning: '#E6A23C',
        danger: '#F56C6C',
        error: '#F56C6C',
        info: '#909399 ',
    }
})

const { colorList, opacityList, colorCodeObj } = state;
// 拷贝钩子
const handleCopy = name => {
    const inputElement = document.createElement('input');
    inputElement.value = colorCodeObj[name];
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    proxy.$message({ text: "复制成功", type: "success" })
    document.body.removeChild(inputElement);
}

</script>
<template>
    <div class="color-container" @click="handleCopy(item)" v-for="(item, index) in colorList" :key="index">
        <div :class="['color-item', `color-item-${item}`]" v-for="(oItem, oIndex) in opacityList"
            :style="{ 'opacity': oItem }" :key="oIndex">

            <span>{{ oIndex == 0 ? item : "" }}</span>
            <span>{{ oIndex == 0 ? colorCodeObj[item] : "" }}</span>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.color-container {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 10px 0;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    .color-item:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .color-item:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .color-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 120px;
        color: white;
        font-size: 20px;
    }

    @each $key,
    $val in $colorList {
        .color-item-#{$key} {
            background-color: $val;
        }
    }


}
</style>