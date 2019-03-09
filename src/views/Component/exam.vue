<template>
  <div>
    {{msg}}
    <greeting></greeting>
    <!--绑定子级的更改事件-->
    <app-test v-bind:pops="lists,obj" v-on:showmsg="showhh($event)"></app-test>
    <input type="text" ref="txt" name="qqq" value="111"/>
  </div>
</template>

<style>

</style>

<script>
  import Vue from 'vue'
  import Test from '@/views/Component/test.vue'

  export default {
    data() {
      return {
        msg: '这个是Home模板页1',
        lists: [
          {"name": 111, age: 1},
          {"name": 222, age: 2},
          {"name": 333, age: 3}
        ],
        obj: {
          "name": "jack",
          "age": 11
        }
      }
    }, mounted() {
      /**根据$refs 获取值 */
      console.log(this.$refs.txt.value);
      /**获取在线数据*/
      this.$http.get("http://jsonplaceholder.typicode.com/users").then(rep=>{
        console.log(rep);
        this.lists = rep.body;
      },error=>{
        console.log(error);
      });
    }, components: {
      "app-test": Test
    }, methods: {
      /**这是从子级传来的值*/
      showhh(val) {
        this.msg = val;
      }
    }
  }

  /**注册或获取全局组件*/
  /**使用 es6 语法*/
  Vue.component('greeting', {
    template: `<p> {{name}} hello world !
        <button @click="changename">改变名称</button></p>`,
    data() {
      return {
        name: "你好",
      }
    },
    methods: {
      changename() {
        this.name = "苏沐秋";
      }
    }
  });
</script>
