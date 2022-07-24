<script>
export default {
    name: "cButton"
}
</script>
<script setup>
import { computed } from "vue";


const { type, plain , disabled } = defineProps({
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
    }
})

const typeArr = ["success", "warning", "info", "danger", "primary"]

const cClass = computed(() => {
    let classArr = ['c-button'];
    let computedType = typeArr.includes(type) ? `c-button-${type}` : 'c-button-default';
    // plain && computedType = computedType.split("-")
    if (plain) {
        computedType = computedType.split("-");
        computedType.splice(2, 0, "plain")
        computedType = computedType.join("-")
    }


    classArr.push(computedType);

    disabled && classArr.push("c-button-disabled")

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
}

.c-button-default , .c-button-plain-default {
    color: black;
    border: 1px solid rgb(185, 183, 183);
}
.c-button-plain-default:hover{
    color: rgb(195, 192, 192) !important;
}


@each $key,
$val in $colorList {
    .c-button-#{$key} {
        background-color: $val;

        &:hover {
            opacity: 0.8;
        }
    }

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

@each $key,
$val in $plain-colorList {
    .c-button-#{$key} {
        background-color: $val;
    }
}

.c-button-disabled.c-button {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover{
        opacity: 0.6;
    }
}
</style>