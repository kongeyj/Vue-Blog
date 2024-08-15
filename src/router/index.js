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
    meta: { title: "home" },
    //子路由
    children: [
      { path: "home", name: "home", meta: { title: "home" }, component: Home },
      {
        path: "blogs",
        name: "blogs",
        meta: { title: "home" },
        component: Blogs,
      },
      {
        path: "blogs/:id",
        name: "blog",
        meta: { title: "blog" },
        component: Blog,
      },
      {
        path: "about",
        name: "about",
        meta: { title: "about" },
        component: About,
      },
      { path: "tags", name: "tags", meta: { title: "tags" }, component: Tags },
      {
        path: "tags/:tagId",
        name: "tag",
        meta: { title: "tag" },
        component: Tags,
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    meta: { title: "404" },
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 根据 meta.title 设置页面标题
  document.title = to.meta.title || "vue-blog";
  next();
});

//向外暴露
export default router;
