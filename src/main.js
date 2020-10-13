import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import store from "./store"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

const token = localStorage.getItem('user-token');

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

