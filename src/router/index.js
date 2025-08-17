import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogPost from "@/views/BlogPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
