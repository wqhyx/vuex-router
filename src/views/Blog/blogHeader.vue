<template>
  <nav>
    <ul>
      <li>
        <!--exact 关键字 去active-->
        <router-link to="/indexvue" exact><strong>博客</strong></router-link>
        <router-link to="/addblog" exact ><steddrong>写博客</steddrong></router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: white;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  nav{
    background-color: red;
    padding: 30px 0;
  }
  /* router-link 提供的一个类*/
  .router-link-active{
    background-color:lightgreen;
  }

</style>

<script>
    export default {
        data() {
            return {
              msg: '博客头部'
            }
        }
    }
</script>
