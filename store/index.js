import Vuex from 'vuex'

export const state = () => ({
  leads: []
})

export const mutations = {
  SET_LEADS(state, leads) {
    state.leads = leads
  }
}

export const actions = {
}