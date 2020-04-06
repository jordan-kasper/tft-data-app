import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Champions',
    name: 'Champions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Champions.vue'),
  },
  {
    path: '/Items',
    name: 'Items',
    component: () => import(/* webpackChunkName: "about" */ '../views/Items.vue'),
  },
  {
    path: '/Stats',
    name: 'Stats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Stats.vue'),
  },
  {
    path: '/TeamComps',
    name: 'TeamComps',
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamComps.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
