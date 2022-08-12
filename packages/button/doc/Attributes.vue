
<template>
  <c-table :dataSource="dataSource"></c-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  dataSource: {
    fields: [
      { field: "attr", title: "参数" },
      { field: "type", title: "类型" },
      { field: "explain", title: "说明" },
      { field: "sel", title: "可选值" },
      { field: "def", title: "默认值" },
    ],
    datas: [
      {
        attr: "type",
        type: "String",
        explain: "按钮类型主题",
        sel: "success | primary | danger | warning | info",
        def: "primary",
      },
      {
        attr: "plain",
        type: "Boolean",
        explain: "朴素主题类型",
        sel: "",
        def: "false",
      },
      {
        attr: "disabled",
        type: "Boolean",
        explain: "禁用点击",
        sel: "",
        def: "false",
      },
      {
        attr: "size",
        type: "String",
        explain: "按钮字号大小设置",
        sel: "sm | md | ml | lg | xl",
        def: "md",
      },
    ],
  },
});
const { dataSource } = state;
</script>

<style lang="scss" scoped>
</style>