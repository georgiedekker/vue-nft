import { createApp } from "vue";
import router from './router'
// import nearbycities from "nearby-cities";
// import all_the_cities from "all-the-cities";
import App from "./App.vue";
// App.use(nearbycities)
createApp(App).use(router).mount("#app");
