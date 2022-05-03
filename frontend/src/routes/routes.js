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
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/search/?:query",
    name: "search",
    component: () => import("../views/Search.vue"),
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
				path: "/books/:page",
				name: "book-page",
				component: () => import("../views/dashboard/books/BookList.vue"),
			}
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
  {
    path: "/"
  }
];
