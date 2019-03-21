// 提交 mutactions是更改Vuex状态的唯一合法方法
// 把方法传递过来的参数，赋值给state中的lists
export const getlist = (state,lists) => {
  state.lists = lists
};

export const updateUserInfo = (state,name) =>{
  state.name = name;
};
