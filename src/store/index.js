import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //公共数据源
    person: {
      name: "张三",
      age: "18"
    }
  },
  getters: {
  },
  mutations: { //更改state的方法
    changeName(state,name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
