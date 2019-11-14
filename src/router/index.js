import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/index"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/admin",
    children: [{
      path: "test",
      component: () => import("../views/test.vue")
    }],
    component: () => import("../views/admin.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/goods/detail/:id",
    component: () => import("../views/goodsDetail.vue")
  },
  {
    path: "/cart",
    component: () => import("../views/goodsCar.vue"),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.loginStatus === 1) {
      next();
    } else {
      alert("您还未登陆")
      next("/login");
    }
  } else {
    next();
  }
})

export default router