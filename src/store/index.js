import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as type from './mutation-types'

// modules
import auth from './modules/auth'

Vue.use(Vuex)

const state = {
  locale: 'id'
}

const actions = {
  setLocale ({commit}, locale) {
    commit(type.SET_LOCALE, locale)
  }
}

const mutations = {
  [type.SET_LOCALE] (state, locale) {
    state.locale = locale
  }
}

const getters = {
  locale: state => {
    return state.locale
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      key: 'dgti_pos_store',
      paths: ['auth', 'locale']
    })
  ],
  strict: true
})
