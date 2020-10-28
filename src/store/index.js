import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import auth from "./modules/auth";
import treeItemForm from "./modules/treeItemForm";
import treeForm from "./modules/treeForm";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";
const backendUrl = '/api/';

export default new Vuex.Store({
  modules: {
    user,
    auth,
    treeItemForm,
    treeForm,
    backendUrl,
  },
  // Нужно вынести в отдельный модуль
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