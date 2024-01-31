import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCategory from "../views/AddCategory.vue";
import ShowCategory from "../views/ShowCategory.vue";
import AdminPanel from "../views/AdminPanel.vue";
import AdminProduct from "../views/AdminProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin/category/add",
    name: "add-category",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "show-category",
    component: ShowCategory,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPanel,
  },
  {
    path: "/admin/product",
    name: "admin-product",
    component: AdminProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
