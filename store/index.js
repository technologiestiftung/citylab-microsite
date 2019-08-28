import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
      offset: false
    },
    mutations: {
      SET_OFFSET: (state, payload) => {
        state.offset = payload;
      }
    },
    actions: {
      SET_OFFSET: (context, payload) => {
        context.commit("SET_OFFSET", payload);
      },
    }
  })
}

export default store