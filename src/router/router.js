import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Home from '../components/common/Home'
import Index from '../components/common/Index'
import Profile from '../components/common/Profile'
import RegAuth from "../components/common/RegAuth";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    /**
     *   Сделать, что бы при клике Войти/Регистрация открывалась соответствующая вкладка
     */
    {
      path: '/auth/',
      name: 'auth',
      component: RegAuth,
      beforeEnter: ifNotAuthenticated,
      props: { tabIndex: 0},
    },
    {
      path: '/home/',
      name: 'home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/profile/',
      name: 'profile',
      component: Profile,
      beforeEnter: ifAuthenticated,
    },
  ]
})

export default router;