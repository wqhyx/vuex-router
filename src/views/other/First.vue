<template>
    <div>
        {{msg}}<br>
        <router-link to="/childenfirst">点击跳转到子页面</router-link>
    </div>
</template>

<style>
    /*body {
        background-color:gray;
    }*/
</style>

<script>
    export default {
        data() {
            return {msg: '你好世界!'}
        }
    }
</script>
