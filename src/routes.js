import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// pages
import Home from '@/pages/Home/Home'
import NotifyPage from '@/pages/NotifyPage/NotifyPage'
import NotFound from '@/pages/404/404'

// routering
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/notify',
      name: 'notifyPage',
      component: NotifyPage,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});