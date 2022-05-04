import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes/routes.js";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store.js";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).use(store);
app.mount("#app");
