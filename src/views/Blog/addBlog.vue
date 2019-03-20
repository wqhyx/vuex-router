<template>
  <div>
    <!--引入头部-->
    <showblog></showblog>
    <div id="add-blog">
      <h2>添加博客</h2>
      <form>
        <label>博客标题：</label>
        <input type="text" v-model="blog.title" required>
        <label>博客内容：</label>
        <textarea v-model="blog.content" required></textarea>

        <label>分类：</label>
        <div id="checkboxs">
          <label>Vue.js</label>
          <input type="checkbox" value="Vue.js" v-model="blog.checkchose">

          <label>Node.js</label>
          <input type="checkbox" value="Node.js" v-model="blog.checkchose">

          <label>React.js</label>
          <input type="checkbox" value="React.js" v-model="blog.checkchose">

          <label>Angular.js</label>
          <input type="checkbox" value="Angular.js" v-model="blog.checkchose">
        </div>

        <label>作者：</label>
        <select v-model="blog.choseauthor">
          <option v-for="(author,index) in author">
            {{author}}
          </option>
        </select>

        <button @click.prevent="addBlog">添加博客</button>

      </form>

      <!--显示要添加的数据-->
      <div style="border: 1px solid rebeccapurple;padding: 20px">
        博客总览:<br>{{blog}}
      </div>
    </div>
  </div>
</template>

<style scoped>
  #add-blog * {
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    padding: 20px;
    max-width: 600px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
  }

  #checkboxs label {
    display: inline-block;
    margin-top: 0;
  }

  input[type="checkbox"] {
    display: inline-block;
    margin-right: 10px;
    line-height: inherit;
  }

  button {
    border: 0;
    border-radius: 2px;
    background: red;
    color: white;
    margin: 20px 0;
    padding: 10px;
    cursor: pointer;
  }

  textarea {
    height: 200px;
  }
</style>

<script>
  import showblog from '@/views/Blog/blogHeader.vue'

  var myvue = {};
  export default {
    data() {
      return {
        msg: '这个是Home模板页',
        blog: {
          title: '',   //标题
          content: '', //内容
          checkchose: [],  //分类
          choseauthor: "",
        },
        author: ["jack", "tom", "apache", "pathop", "gateway"]  //作者
      }
    }, methods: {
      /**添加博客*/
      addBlog() {
        /**使用 野狗  https://www.wilddog.com 在线添加数据*/
        myvue.$http.post("https://wd6227691035otnqqd.wilddogio.com/posts.json",this.blog).then(rep => {
          console.log(rep);
          if (rep.ok == true) {
            //alert('添加成功!');
            this.$router.push({path:'/indexvue'});
            return;
          }
          alert('添加失败!');
        }, err => {
          console.log(err);
        })
      }, onScroll() {
        console.log('滚动条');
      }
    }, beforeCreate() {
      myvue = this;
    }, components: {
      showblog
    }
  }
</script>
