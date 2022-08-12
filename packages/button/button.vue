<script>
export default {
    name: "cButton"
}
</script>
<script setup>
import { computed } from "vue";


const { type, plain , disabled , size} = defineProps({
    type: {
        type: String,
        default: "default"
    },
    plain: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
    }
})

const typeArr = ["success", "warning", "info", "danger", "primary"]
const sizeArr = ["sm","md","ml","lg","xl"];

const cClass = computed(() => {
    let classArr = ['c-button'];
    let computedType = typeArr.includes(type) ? `c-button-${type}` : 'c-button-default';
    // 如果朴素风格开启
    plain && type && (computedType = `c-button-plain-${type}`);
    
    classArr.push(computedType)
    // 如果禁用功能开启
    disabled && classArr.push("c-button-disabled")
    // 如果传入size
    sizeArr.includes(size) && classArr.push(`c-button-${size}`)
    return classArr
})

</script>

<template>
    <button :class="cClass">
        <slot></slot>
    </button>
</template>


<style lang="scss" scoped>
button {
    outline: none;
    background-color: transparent;
    cursor: pointer;
}

.c-button {
    border: 0;
    padding: 12px 24px;
    outline: none;
    background: none;
    line-height: 1;
    font-size: 14px;
    color: #f0f0f0;
    border-radius: 5px;
    display: inline-block;
}

// 默认朴素风格下的边框,字体颜色
.c-button-default , .c-button-plain-default {
    color: black;
    border: 1px solid rgb(185, 183, 183);
}

// 默认朴素风格下的字体颜色
.c-button-plain-default:hover{
    color: rgb(195, 192, 192) !important;
}

// 不同主题的颜色渲染
@each $key,
$val in $colorList {

    // 渲染不同主题的背景色
    .c-button-#{$key} {
        background-color: $val;

        &:hover {
            opacity: 0.8;
        }
    }

    // 这里需要渲染朴素风格的字体颜色，激活颜色
    .c-button-plain-#{$key} {
        color: $val;
        border: 1px solid $val;

        &:hover,
        .active {
            background-color: $val;
            color: white;
        }
    }

}


// 不同朴素风格的颜色渲染
@each $key,
$val in $plain-colorList {
    // 渲染不同朴素风格的背景色
    .c-button-#{$key} {
        background-color: $val;
    }
}

// 朴素风格的禁用同时注意修改不透明度。
.c-button-disabled.c-button {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover{
        opacity: 0.6;
    }
}


@each $key,$val in $sizeList{
    .c-button-#{$key}{
        font-size: $val;
    }
}
</style>