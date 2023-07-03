// Composables
import store from '@/store';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/user',
    component: () => import('@/views/user/index.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach(async (to, from, next) => {
  const { userInfo } = store.getters;
  const token = localStorage.getItem('token')
  console.log(store.getters);
  
  // if (!userInfo) {
  //   next('/login');
  // }
  // else next();
});


export default router
