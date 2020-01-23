import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue'),

  },
  {
    path: '/lists',
    name: 'lists',
    component: () => import('../components/Lists.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
