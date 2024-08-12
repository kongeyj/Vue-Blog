import VueRouter from "vue-router";
import Vue from "vue";
import Main from "@/views/Main.vue";
import Home from "@/views/Home.vue";
import Blogs from "@/views/Blogs.vue";
import About from "@/views/About.vue";
import Tags from "@/views/Tags.vue";
import Blog from "@/views/Blog.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    //主路由
    path: "/",
    component: Main,
    // 重定向
    redirect: "/home",
    //子路由
    children: [
      { path: "home", name: "home", component: Home },
      { path: "blogs", name: "blogs", component: Blogs },
      { path: "blogs/:id", name: "blog", component: Blog },
      { path: "about", name: "about", component: About },
      { path: "tags", name: "tags", component: Tags },
      { path: "tags/:tagId", name: "tag", component: Tags },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

//向外暴露
export default router;
