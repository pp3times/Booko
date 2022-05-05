import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import userAuth from "../views/userAuth.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Booko | Home" } },
  // {
  //   path: "/about",
  //   meta: { title: "About" },
  //   component: About,

  //   // example of route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import('./views/About.vue')
  // },
  {
    path: "/sign",
    name: "sign",
    component: userAuth,
  },
  {
    path: "/payment",
    name: "payment",
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/search/:keyword",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/category/:id",
    name: "categorysearch",
    component: () => import("../views/Category.vue"),
  },
  {
    path: "/test",
    name: "testtest",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/invoice/:id",
    name: "invoice",
    component: () => import("../views/Invoice.vue"),
  },
  {
    path: "/me",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/asd/Login.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue"),
  },
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: () => import("../views/Dashboard/Login.vue"),
  // },
  // {
  // 	path: "/dashboard",
  // 	name: "dashboard",
  // 	component: () => import("../views/Dashboard/Home.vue"),
  // },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/dashboard/Home.vue"),
      },
      {
        path: "/users",
        name: "user-list",
        component: () => import("../views/dashboard/users/UserList.vue"),
      },
      {
        path: "/admins",
        name: "admin-list",
        component: () => import("../views/dashboard/users/AdminList.vue"),
      },
      {
        path: "/card",
        name: "card",
        component: () => import("../views/Card.vue"),
      },
      {
        path: "/books",
        name: "book-list",
        component: () => import("../views/dashboard/books/BookList.vue"),
      },
      {
        path: "/category",
        name: "category",
        component: () => import("../views/dashboard/books/CategoryList.vue"),
      },
      {
        path: "/books/:page",
        name: "book-page",
        component: () => import("../views/dashboard/books/BookList.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
  {
    path: "/",
  },
];
