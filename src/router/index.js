import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/",
      component: () => import("../layouts/auth.vue"),
      children: [
        {
          name: "login",
          path: "login",
          component: () => import("../views/LoginView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/admin.vue"),
      children: [
        {
          name: "admin",
          path: "admin",
          component: () => import("../views/AdminView.vue"),
        },
      ],
    }
  ],
});

export default router;
