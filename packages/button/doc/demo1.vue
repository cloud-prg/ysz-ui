<script setup></script>
<template>
    <div class="button-demo1-container">

        <c-button>默认按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
        <c-button type="primary">主体按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button  mode="link">默认链接</c-button>
        <c-button mode="link" type="other">其他链接</c-button>
    </div>
</template>

<style lang="scss" scoped >
.button-demo1-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20%;
    

}
</style>