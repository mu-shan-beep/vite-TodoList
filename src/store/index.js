import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    add(state, val) {
      console.log(val, "val");
      state.count++;
    },
  },
});

export default store;
