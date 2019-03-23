<template>
  <div>
    <!--引入头部-->
    <showblog></showblog>
    <!--自定义指令-->
    <div id="show-blog" v-theme:column="'other'">
      <!--<router-link to="/addblog">添加博客</router-link>-->
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div class="single-blog" v-for="(blog,key,index) in filterserach" :key="key">
        <div style="box-sizing: border-box;width: 85%;float: left;">
          <router-link v-bind:to="'/showSingleBlog/'+blog.id"><h2 v-rain title="查看详情">{{blog.title | toUpper}}</h2>
          </router-link>
          <article>
            {{blog.content | jqlength}}
          </article>
        </div>
        <div class="edit" style="box-sizing: border-box;width: 15%;float: left;line-height:90px;">
          <button class="btn btn-info">
            <router-link v-bind:to="'/updateSingleBlog/'+blog.id">
              <span style="color: white;">修改</span></router-link>
          </button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" @click.prevent="delBlog(blog)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #show-blog {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    background: #f1ebeb;
    box-sizing: border-box;
    border: 1px dotted #aaa;
    height: 120px;
  }

  #show-blog a {
    text-decoration: none;
  }

  input[type='text'] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }

  .edit button:first-child {
    margin-left: 40px;
  }
</style>

<script>
  var myvue = {};
  import showblog from '@/views/Blog/blogHeader.vue'
  import {mapMutations, mapActions, mapGetters} from "vuex";
  /*import Axios from '@/util/axios-auth.js'*/
  import axios from 'axios';

  export default {
    data() {
      return {
        msg: '这个是Home模板页',
        blogs: [],
        search: '',
      }
    }, beforeCreate() {
      myvue = this;
    }, created() {
      myvue.$options.methods.showBlog();
    }, methods: {
      ...mapActions(['setlist', 'setname']),
      ...mapGetters(["resultlist"]),
      showBlog() {
        myvue.blogs.splice(0, myvue.blogs.length);
        /**请求本地json数据*/
        /**使用 野狗  https://www.wilddog.com 在线添加数据*/
        /*myvue.$http.get("https://wd6227691035otnqqd.wilddogio.com/posts.json").then(rep => {*/
        axios.get("/api/posts.json").then(rep => {
          /**在线调用接口，返回数据!*/
          //myvue.$http.get("http://jsonplaceholder.typicode.com/posts").then(rep=>{
          /**只要十条数据*/
            //myvue.blogs = rep.body.splice(0, 10);
          var data = rep.data;
          for (let key in data) {
            data[key].id = key;
            //console.log(data[key]);
            myvue.blogs.push(data[key])
          }
        }, err => {
          console.log(err);
        });

        /** vue浏览器跨域问题及解决办法  http://www.thenewstep.cn/*/
        // 1.fetch
        /*fetch("/api/test/testToken.php",{
          "method":"POST",
          headers:{
            "Content-type":"application/json;",
            token:"f4c902c9ae5a2a9d8f84868ad064e706"
          },
          body:JSON.stringify({"username":"jack","password":"123456"})
        }).then(rep=>{
          return rep.json();
        }).then(data=>{
          console.log(data);
        }).catch(rep=>{
          console.log('failed', rep);
        });*/

        //2.axios 详情请看 main.js
        /*myvue.$axios.post("/api/test/testToken.php",{"username":"jack","password":"123456"}).then(rep=>{
          console.log(rep);
          return rep.json();
        }).then(rep=>{
          console.log(rep);
        }).catch(rep=>{
          console.log('failed', rep);
        });*/

      },
      delBlog(params) {
        /**删除*/
        myvue.$http.delete("https://wd6227691035otnqqd.wilddogio.com/posts/" + params.id + ".json").then(rep => {
          //console.log(rep);
          if (rep.ok == true) {
            //alert("删除失败!");
            /**重新查询数据*/
            this.showBlog();
            return;
          }
          alert("删除失败!");
        }, error => {
          console.log(error);
        });
      }
    },
    mounted() {
      /**调用公共方法*/
      //var resultVal = this.isNull('你好','123');
      /** store */
      //myvue.setlist(myvue.blogs);
      ///console.log(myvue.$store.state.lists);
    }, watch: {
      resultlist(val) {
        console.log("change this value,{}", val);
      }
    }, filters: {
      /**指定过滤*/
      /*toUpper(value){
        if(!value) return;
        value = value.toString();
        return value.toUpperCase();
      },*/jqlength(value) {
        /**截取长度*/
        if (!value) return;
        if (value.toString().length > 120) {
          return value.toString().substring(0, 120) + "...";
        } else {
          return value;
        }
      }
    }, computed: {
      /**计算 过滤*/
      filterserach() {   /*模糊匹配*/
        return myvue.blogs.filter(rep => {
          /**match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。*/
          return rep.title.match(myvue.search);
        });
      }
    }, directives: {
      /**指定 自定义指令*/
      'rain': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }, components: {
      showblog
    },

  }
</script>
