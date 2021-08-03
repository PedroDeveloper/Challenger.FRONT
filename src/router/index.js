import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/Home/Index.vue";
import IndexRegister from "../views/Register/Index.vue";
import IndexLogin from "../views/Login/Index.vue";

import useMidlewares from "./middleware";

const { isAuth } = useMidlewares();

const routes = [
  { path: "", name: "Home", component: Index },
  { path: "/register", name: "Register", component: IndexRegister },
  { path: "/login", name: "Login", component: IndexLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(isAuth);

export default router;
