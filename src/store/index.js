import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import auth from "./modules/auth";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";
const backendUrl = 'http://derevo.log/api/';

export default new Vuex.Store({
  modules: {
    user,
    auth,
    backendUrl,
  },
  // Возможно нужно вынести в отдельный модуль
  state: {
    headerText: 'Заголовок страницы',
  },
  mutations: {
    setHeaderText(state, title = '') {
      console.log(title);
      state.headerText = title;
    }
  },
  getters: {
    getHeaderText: state => {
      return state.headerText;
    }
  }
  // strict: debug
});