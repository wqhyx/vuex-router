<template>
    <div>
        {{msg}}
      <ul>
        <li v-for="po in pops">
          主键:{{po.id}}-姓名:{{po.name}}-名称:{{po.username}}-手机号码:{{po.phone}}-邮件:{{po.email}}
        </li>
      </ul>
      {{this.obj.name}}-{{this.obj.age}}
      <button @click="updatemsg">改变父级页面</button>
    </div>
</template>

<style>
    body {
        background-color: limegreen;
    }
</style>

<script>
    export default {
        /**简约写法*/
        //props:["pops"],
         //props:["obj"],
        /**标准写法*/
        props:{
          pops:{
            type:Array,
            required:true
          },
          obj:{
            type:Object,
            required:true
          }
        },
        data() {
            return {msg: '这个是Home模板页'}
        },mounted(){
          console.log(this.obj);
       },methods:{
          updatemsg(){
            this.$emit("showmsg","改变了父级msg内容");
          }
      }
    }
</script>
