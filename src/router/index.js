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
          name: "dashboard",
          path: "dashboard",
          component: () => import("../views/DashboardView.vue"),
        },
        {
          name: "teachers",
          path: "teachers",
          component: () => import("../views/TeachersView.vue"),
        },
        {
          name: "scienses",
          path: "scienses",
          component: () => import("../views/SciencesView.vue"),
        },
        {
          name: "news",
          path: "news",
          component: () => import("../views/NewsView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/landing.vue"),
      children: [
        {
          name: "landing",
          path: "landing",
          component: () => import("../views/LandingView.vue"),
        },
      ],
    }
  ],
});

export default router;
