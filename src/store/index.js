import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import auth from "./modules/auth";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";
const backendUrl = '/api/';

export default new Vuex.Store({
  modules: {
    user,
    auth,
    backendUrl,
  },
  // Возможно нужно вынести в отдельный модуль
  state: {
    pageTitle: 'Заголовок страницы',
    apiUrl: process.env.VUE_APP_API_URL,
  },
  mutations: {
    changeHeaderText(state, title = 'Пустой заголовок') {
      state.pageTitle = title;
    }
  },
  getters: {
    getPageTitle: state => {
      return state.pageTitle;
    }
  },
  actions: {
    changeHeaderText({commit}, title){
      commit('changeHeaderText', title);
    }
  },
  // strict: debug
});