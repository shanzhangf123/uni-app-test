import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

const store = new Vuex.Store ({
  state: {
    /**
         * 是否需要强制登录
         */
    forcedLogin: false,
    hasLogin: false,
    userName: '',
    userInfo: {},
  },
  mutations: {
    login (state, userInfo) {
      state.userInfo = userInfo || {};
      state.hasLogin = true;
    },
    logout (state) {
      state.userInfo = {};
      state.hasLogin = false;
    },
  },
});

export default store;
