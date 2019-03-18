<template>
    <div>
      <bloghead></bloghead>
      <h1>博客详情</h1>
      <div class="single-blog">
        <h2>{{blog.title}}</h2>
        <article>
          {{blog.body}}
        </article>
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
          console.log(this.id);
          this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(rep=>{
            console.log(rep);
            this.blog = rep.body;
          },err=>{
            console.log(err);
          })
        },components:{
          "bloghead":showblog
        }
    }
</script>
