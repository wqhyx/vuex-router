<template>
    <div>
      <bloghead></bloghead>
      <h1>博客详情</h1>
      <div class="single-blog">
        <h2>{{blog.title}}</h2>
        <article>
          内容:{{blog.content}}<br>
          作者:{{blog.choseauthor | isNull}}
        </article>
        <ul>
          <li v-for="(singleblog,key) in blog.checkchose" :key="key">
            {{singleblog}}
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
  .single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background-color: #eee;
    border: 1px dotted gray;
  }
  h1{
    max-width: 960px;
    margin: 20px auto;
  }
</style>

<script>
    import showblog from '@/views/Blog/blogHeader.vue'
    export default {
        data() {
            return {
              msg: 'blog',
              id:this.$route.params.id,
              blog:{}
            }
        },created(){
          //console.log(this.id);
          this.$http.get('https://wd6227691035otnqqd.wilddogio.com/posts/'+this.id+".json").then(rep=>{
            //console.log('回调',rep);
            this.blog = rep.body;
          },err=>{
            console.log(err);
          })
        },components:{
          "bloghead":showblog
        },filters:{
          isNull(val){
            if(!val) return "暂无";
            else return val;
          }
        }
    }
</script>
