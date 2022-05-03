import {createStore} from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

const getDefaultState = () => {
  return {
    token: '',
    user: {},
		admin: {},
		admintoken: '',
  };
};

export default new createStore({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
    getAdmin: (state) => {
      return state.admin;
    },
    isAdminLoggedIn: (state) => {
      return state.admintoken;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ADMINTOKEN: (state, token) => {
      state.admintoken = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_ADMIN: (state, admin) => {
      state.admin = admin;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    login: ({ commit }, { token, user }) => {
      commit("SET_TOKEN", token);
      commit("SET_USER", user);

      // set auth header
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    admin: ({ commit }, { token, user }) => {
      commit("SET_ADMINTOKEN", token);
      commit("SET_ADMIN", user);

      // set auth header
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },
});