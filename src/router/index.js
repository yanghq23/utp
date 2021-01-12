import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import HomePage from "../views/home/Index.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: HomePage,
    },
  ],
});

export default router;
