// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutactions中处理
export const setlist = ({commit},lists) => commit('getlist',lists);
export const setname = ({commit},name) => commit('updateUserInfo',name);
