// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { auth } from './firebase-config';

// const app = createApp(App);

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     app.config.globalProperties.$authUser = user;
//   } else {
//     app.config.globalProperties.$authUser = null;
//   }
// });

// app.use(router).mount('#app');

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { auth } from "./firebase-config";

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
