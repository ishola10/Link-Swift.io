import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/Home.vue";
import ShortenUrl from "@/views/ShortenUrl.vue";
import Analytics from "@/views/Analytics.vue";
import History from "@/views/History.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import Profile from "@/components/Profile.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/signup-page", 
  },
  {
    path: "/home", 
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/shorten-url",
    name: "shorten-url",
    component: ShortenUrl,
  },
  {
    path: "/analytics",
    name: "analytics",
    component: Analytics,
  },
  {
    path: "/history",
    name: "history",
    component: History,
  },
  {
    path: "/signup-page",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
