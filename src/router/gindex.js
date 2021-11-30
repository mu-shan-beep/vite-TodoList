import { createRouter, createWebHashHistory } from "../utils/Router/index";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Rate from "../pages/Rate.vue";
import count from "../pages/count.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/rate",
    name: "Rate",
    component: Rate,
  },
  {
    path: "/count",
    name: "Count",
    component: count,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
