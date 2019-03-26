import Vue from 'vue'
import Vuex from 'vuex'

import { 
  content as content
} from '../assets/content.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'ger',
    content: content
  },
  mutations: {
      SET_LANG: (state, payload) => {
          state.lang = payload;
      },
  },
  actions: {
      SET_LANG: (context, payload) => {
          context.commit("SET_LANG", payload);
      },
  }
})
