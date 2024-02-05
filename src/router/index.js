import AddCategory from "../views/category/AddCategory.vue";
import AddProduct from "../views/product/AddProduct.vue";
import AdminProduct from "../views/product/AdminProduct.vue";
import DetailCategory from "../views/category/DetailCategory.vue";
import EditCategory from "../views/category/EditCategory.vue";
import EditProduct from "../views/product/EditProduct.vue";
import HomeView from "../views/HomeView.vue";
import ShowCategory from "../views/category/ShowCategory.vue";
import ShowDetail from "../views/product/ShowDetail.vue";
import SignUp from "../views/user/SignUp.vue";
import SignIn from "../views/user/SignIn.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import WishList from "../views/product/WishList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // category
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
    path: "/admin/category/:id",
    name: "edit-category",
    component: EditCategory,
  },
  {
    path: "/category/detail/:id",
    name: "detail-category",
    component: DetailCategory,
  },
  // product
  {
    path: "/admin/product",
    name: "admin-product",
    component: AdminProduct,
  },
  {
    path: "/admin/product/:id",
    name: "edit-product",
    component: EditProduct,
  },
  {
    path: "/admin/product/add",
    name: "add-product",
    component: AddProduct,
  },
  {
    path: "/product/detail/:id",
    name: "show-detail",
    component: ShowDetail,
  },
  // user
  {
    path: "/user/signup",
    name: "user-signup",
    component: SignUp,
  },
  {
    path: "/user/signin",
    name: "user-signin",
    component: SignIn,
  },
  // wishlist
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
