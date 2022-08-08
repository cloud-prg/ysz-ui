<script>
export default {
    name: '',
}
</script>
<script setup>
import { reactive } from "vue";
import iconJson from "../../../src/assets/iconfont/iconfont.json";
const { glyphs } = iconJson;
const rec = reactive({
    demoList: [...glyphs.slice(0, 5)],
})


const copyIconName = name=>{
    const area = document.createElement("textarea");
    area.innerText= name;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    console.log("复制成功")
    document.body.removeChild(area);
}
</script>
<template>
    <div class="container">
        <div v-for="(item, index) in rec.demoList" :key="index" @click="copyIconName(item.font_class)" class="icon-box">
            <i :class="`c-icon-${item.font_class}`"></i>
            <span>{{ item.font_class }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;

    .icon-box {
        width: 120px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        span,
        i {
            text-align: center;
        }

        i {
            font-size: 40px;
        }

        &:hover {
            background-color: $primary;
            transition: all 0.5s ease;
            cursor: pointer;
            span,
            i {
                color: white;
            }
        }
    }
}
</style>