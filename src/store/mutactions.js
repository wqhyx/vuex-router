// 提交 mutactions是更改Vuex状态的唯一合法方法
// 把方法传递过来的参数，赋值给state中的list
export const getlist  = (state,list) => {
  state.list = list
}
