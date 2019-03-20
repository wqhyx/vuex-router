<template>
  <div>
    <!--引入头部-->
    <showblog></showblog>
    <!--自定义指令-->
    <div id="show-blog" v-theme:column="'other'">
      <!--<router-link to="/addblog">添加博客</router-link>-->
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div class="single-blog" v-for="blog in filterserach" :key="blog">
       <router-link v-bind:to="'/showSingleBlog/'+blog.id"><h2 v-rain >{{blog.title | toUpper}}</h2></router-link>
        <article>
          {{blog.content | jqlength}}
        </article>
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
  }
  #show-blog a{
    text-decoration: none;
  }
  input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>

<script>
  var myvue = {};
  import showblog from '@/views/Blog/blogHeader.vue'

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
      /**请求本地json数据*/
      /**使用 野狗  https://www.wilddog.com 在线添加数据*/
      myvue.$http.get("https://wd6227691035otnqqd.wilddogio.com/posts.json").then(rep => {
        /**在线调用接口，返回数据!*/
        //myvue.$http.get("http://jsonplaceholder.typicode.com/posts").then(rep=>{
        /**只要十条数据*/
        //myvue.blogs = rep.body.splice(0, 10);
        var data = rep.data;
        for(let key in data){
          data[key].id = key;
          //console.log(data[key]);
          myvue.blogs.push(data[key])
        }
      }, err => {
        console.log(err);
      });
    }, methods: {},
    mounted() {
    }
    , filters: {
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
        }else{
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
    }

  }
</script>
