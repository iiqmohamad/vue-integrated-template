import * as type from '../mutation-types'

const initialState = {
  token: '',
  user: {
    username: ''
  }
}

const state = initialState

const getters = {
  isLoggedIn: state => {
    return state.token !== ''
  },
  user: state => {
    return state.user
  }
}

const actions = {
  login ({ state, commit, dispatch, rootState }, credential) {
    return new Promise((resolve, reject) => {
      const { username, password } = credential
      if (username && password) {
        setTimeout(() => {
          const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
          commit(type.LOGIN_SUCCESS, { token, username })
          resolve()
        }, 1000)
      } else {
        const error = 'Username / Password tidak cocok'
        reject(error)
      }
    })
  },
  logout ({ state, commit, dispatch }) {
    return new Promise((resolve, reject) => {
      commit(type.LOGOUT)
      resolve()
    })
  }
}

const mutations = {
  [type.LOGIN_SUCCESS] (state, payload) {
    state.token = payload.token
    state.user = {
      username: payload.username
    }
  },
  [type.LOGOUT] (state) {
    state.token = ''
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
