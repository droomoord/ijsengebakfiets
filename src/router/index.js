import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wie-zijn-wij",
    name: "Wie zijn wij?",

    component: () => import(/* webpackChunkName: "about" */ "../views/Wie.vue"),
  },
  {
    path: "/waar-is-de-fiets",
    name: "Waar is de fiets?",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Waar.vue"),
  },
  {
    path: "/fotos",
    name: "Fotos",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fotos.vue"),
  },
  {
    path: "/feestjes-en-partijen",
    name: "Feestjes en partijen",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Feestjes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
