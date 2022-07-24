<script >
export default {
    name: "cInput"
}
</script>

<script setup>
import { emit } from "process";
import { ref } from "vue";
const emits = defineEmits(["update:modelValue"])
let props = defineProps({
    modelValue: {
        type: [String, Number],
    }
})
function handleChange(e) {
    emits("update:modelValue",e.target.value);
}
</script>

<template>
    <input :value="props.modelValue" @input="handleChange" placeholder="请输入语句 " />
</template>


<style scoped>
</style>