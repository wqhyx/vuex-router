import indexvue from '@/views/Blog/index.vue'
import addblog from '@/views/Blog/addBlog.vue'
import showSingleBlog from '@/views/Blog/showSingleBlog.vue'
import updateSingleBlog from '@/views/Blog/updateSingleBlog.vue'

/**个人博客*/
export default [
  {
    name:'indexvue',
    path:'/indexvue',
    component:indexvue
  },
  {
    name:'addblog',
    path:'/addblog',
    component:addblog
  },{
    /**绑定活的路径*/
    name:'showSingleBlog',
    path:'/showSingleBlog/:id',
    component:showSingleBlog
  },{
    name:'updateSingleBlog',
    path:'/updateSingleBlog/:id',
    component:updateSingleBlog
  }
]
