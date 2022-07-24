<script setup>
import {ref } from "vue";
let inputValue = ref("");
</script>
<template>
    <c-input  v-model="inputValue"/>
    {{inputValue}}
</template>