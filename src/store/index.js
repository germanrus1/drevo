import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import auth from "./modules/auth";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";
const backendUrl = 'http://derevo.log/api/';
const headerText = 'Главная';

export default new Vuex.Store({
  modules: {
    user,
    auth,
    backendUrl,
    headerText,
  },
  // strict: debug
});