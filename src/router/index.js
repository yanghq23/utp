import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Classify from "../views/classify/Index.vue";

import Mine from "../views/mine/Index.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/classify",
      component: Classify,
    },
    {
      path: "/mine",
      component: Mine,
    }
  ],
});

export default router;
