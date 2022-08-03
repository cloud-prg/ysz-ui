<script>
export default {
    name:"backtop",
}
</script>


<script setup>
import {ref , useSlots} from "vue";

const slot = useSlots(); // 插槽对象实例化;
const isShow = ref(false); // 是否显示
const right = ref(15); // 距离右边框的百分比
const bottom = ref(15); // 距离下边框的百分比


</script>

<template>
<div class="backtop-box">
    <slot v-if="slot['default']"></slot>
    <div v-else>
        <i class="c-icon-backtop1"></i>
    </div>
</div>

</template>


<style scoped>

</style>