import { USER_REQUEST, USER_ERROR, USER_SUCCESS, USER_UPLOAD_AVATAR } from "../actions/user";
import axios from "axios";
import Vue from "vue";
import { AUTH_LOGOUT,/* AUTH_SUCCESS, AUTH_ERROR */} from "../actions/auth";
import apiCall from "../../utils/api";

const state = { status: "", profile: {} };

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    apiCall({ url: "user/me" })
      .then(resp => {
        commit(USER_SUCCESS, resp);
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
  },
  [USER_UPLOAD_AVATAR]: (context, file) => {
    axios({
      url: '/api/user',
      method: 'post',
      data: file,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(resp => {
        console.log('К серверу достучался');
        console.log(resp.data.data.path);
      })
      .catch(err => {
        this.makeToast('Не удалось получить доступ к серверу', 'Сохранено', 'success');
        console.log('Ошибка при сохранении данных');
        console.log(err);
      })
  },
};

const mutations = {
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};