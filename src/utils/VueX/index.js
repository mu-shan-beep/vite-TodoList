// 手写迷你VueX

// 引入提供与注入
import { inject, provide, reactive, computed } from "vue";

const STORE_KEY = "__store__";

// 定义函数为组件注入组件对象；
function useStore() {
  return inject(STORE_KEY);
}

function createStore(options) {
  return new Store(options);
}

// 定义路由
class Store {
  constructor(options) {
    this._state = reactive({
      data: options.state(), //将数据改成响应式并挂载Store上
    });
    this._mutations = options.mutations;
    this._actions = options.actions;
    this.getters = {};

    Object.keys(options.getters).forEach((name) => {
      const fn = options.getters[name];
      this.getters[name] = computed(() => fn(this.state));
    });
  }

  get state() {
    return this._state.data;
  }

  commit = (type, payload) => {
    const entry = this._mutations[type];
    entry && entry(this.state, payload);
  };

  dispatch(type, payload) {
    const entry = this._actions[type];
    return entry && entry(this, payload);
  }

  install(app) {
    app.provide(STORE_KEY, this);
  }
}

export { createStore, useStore };
