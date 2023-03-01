<script setup>
import navLogoImg from "../../favicon2.ico";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const route = useRouter();

// 导航栏激活标签
let tabIndex = ref(0);

const nav = reactive({
    list: [
        {
            name: "首页",
            path: "/",
        },
        {
            name: "组件",
            path: "/home/prologue"
        },
        {
            name: "github仓库",
            path: "blank",
            url: "https://github.com/YunShangZhou/ysz-ui"
        },

    ]
})
// 转到首页
const toHome = () => {
    // 同时要修改下标，存储至会话当中
    sessionStorage.setItem("tabIndex", 0);
    tabIndex.value = 0;
    route.push('/')
}
// 转到其他页
const toOther = (item, index) => {
    console.log(item, index)
    // 跳转的同时记录下标，存储到会话中
    if (item.path != "blank") {
        sessionStorage.setItem("tabIndex", index);
        tabIndex.value = index;
        route.push(item.path);
    } else {
        window.open(item.url);
    }
}

onMounted(() => {
    // 如果会话存储能够取值标签栏下标
    const storageIndex = sessionStorage.getItem("tabIndex");
    +storageIndex && (tabIndex.value = storageIndex)
})

defineExpose({ toOther });

</script>
<template>
    <!-- 组件库导航栏 -->
    <!-- 该有的结构: flex布局,水平布局按照中间空白隔开的方式。左侧navLogo,右侧导航菜单。 -->
    <div class="navbar">
        <div class="left-part">
            <div class="navLogo-container">
                <a href="javascript:;" class="navLogo-part" @click="toHome">
                    <img :src="navLogoImg" class="navLogo" alt="导航栏左侧navLogo图标" />
                </a>
                
                <!-- <div class="bottom-part">
                    ver 0.0.1
                </div> -->
            </div>
        </div>

        <div class="right-part">
            <a v-for="(item, index) in nav.list" :key="index" href="javascript:;" @click="toOther(item, index)"
                :class="{ 'nav-item': true, active: tabIndex == index }">
                {{ item.name }}
            </a>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.navbar {
    background-color: white;
    box-shadow: 0px 1px 5px 0px #f0f0f0;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;

    .left-part {
        .navLogo-container {
            margin-left: 30px;
            cursor: pointer;

            .navLogo-part {
                border-bottom: 2px solid transparent;
                .navLogo {
                    width: auto;
                    height: 30px;
                }
                &:hover {
                    border-bottom: 2px solid #3D85C6;
                }
            }


        }
    }

    .right-part {
        display: flex;
        height: 100%;

        .nav-item {
            // padding: 0 10px;
            height: calc(100% - 2px);
            font-size: $font-size-md;
            line-height: 3.3;
            border-bottom: 5px solid transparent;
            min-width: 40px;
            height: 57px;
            margin: 0 15px;
            text-align: center;

            &:hover,
            &.active {
                color: $primary;
                border-bottom: 2px solid $primary;
                cursor: pointer;
                transition: all 0.2s ease;
            }
        }
    }
}
</style>