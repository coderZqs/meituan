import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: 0
  },
  mutations: {
    ["CHANGE_STATUS"](state, status) {
      state.loginStatus = status
    }
  },
  actions: {
    ["ASYNC_CHANGE_STATUS"]({
      commit
    }) {
      setTimeout(() => {
        console.log(111)
        commit("CHANGE_STATUS", 1)
      }, 5000)
    }
  },
  modules: {}
})