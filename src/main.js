import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router/index";
import store from "./store/index";
const app = createApp(App);

app.use(router).use(store);

app.mount("#app");
