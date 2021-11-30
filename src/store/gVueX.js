// 手写vueX测试
import { createStore } from "../utils/VueX/index";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },

  getters: {
    double(state) {
      return state.count * 2;
    },
  },

  mutations: {
    add(state, val) {
      state.count++;
    },
  },

  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
});

export default store;
