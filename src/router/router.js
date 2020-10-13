import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Home from '../components/common/Home'
import Index from '../components/common/Index'
import Profile from '../components/common/Profile'

Vue.use(Router);

//При авторизации
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
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
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
    {
      path: '/test/',
      name: 'profile',
      component: Profile,
      beforeEnter: ifNotAuthenticated,
    }
  ]
})

export default router;