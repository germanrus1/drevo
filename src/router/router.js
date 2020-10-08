import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Index from '../components/Index'
import Profile from '../components/Profile'

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
      name: 'index',
      component: Index,
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