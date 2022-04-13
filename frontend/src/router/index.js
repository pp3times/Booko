import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
		path: "/cart",
		name: "cart",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
	},
	{
		path: "/auth",
		name: "auth",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/AuthView.vue"),
	},
	{
		path: "/payment",
		name: "payment",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/PaymentView.vue"),
	},
	{
		path: "/contact",
		name: "contact",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/ContactView.vue"),
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/dashboard/Homeview.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/Login.vue"),
	},
	{
		path: "/admin",
		name: "admin",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/dashboard/Login.vue"),
	},
	{
		path: "/dashboard/book",
		name: "ManageBook",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/dashboard/ManageBook.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
