<template>
    <div>
      <greeting></greeting>
    </div>
</template>

<style>

</style>

<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
              msg: '这个是Home模板页'
            }
        },
    }

    /**注册或获取全局组件*/
    /**使用 es6 语法*/
    Vue.component('greeting',{
        template:`<p> {{name}} hello world !
        <button @click="changename">改变名称</button></p>`,
        data(){
          return {
            name:"你好",
          }
        },
        methods:{
          changename(){
            this.name = "苏沐秋";
          }
        }
    });
</script>
