import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/category/Index.vue";
import User from "../views/user/Index.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/category",
      component: Category,
    },
    {
      path: "/user",
      component: User,
    }
  ],
});

export default router;
