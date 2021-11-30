import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router/index";
import router from "./router/gindex";

// import store from "./store/index";
import store from "./store/gVueX";
createApp(App).use(router).use(store).mount("#app");
