// Utilities
import { make } from 'vuex-pathify'

// Globals
import { IN_BROWSER } from '@/util/globals'

const state = {
  dark: false,
  drawer: {
    image: 0,
    gradient: 0,
    mini: false,
  },
  gradients: [
    'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    'rgba(228, 44, 226, 1), rgba(255, 44, 255, 0.7)',
    'rgba(244, 67, 44, .8), rgba(244, 44, 54, .8)',
  ],
  images: [
    ''
  ],
  notifications: [],
  rtl: false,
}

const mutations = make.mutations(state)

const actions = {
  fetch: ({ commit }) => {
    const local = localStorage.getItem('vuetify@user') || '{}'
    const user = JSON.parse(local)

    for (const key in user) {
      commit(key, user[key])
    }

    if (user.dark === undefined) {
      commit('dark', window.matchMedia('(prefers-color-scheme: dark)'))
    }
  },
  update: ({ state }) => {
    if (!IN_BROWSER) return

    localStorage.setItem('vuetify@user', JSON.stringify(state))
  },
}

const getters = {
  dark: (state, getters) => {
    return state.dark || getters.gradient.indexOf('255, 255, 255') === -1
  },
  gradient: (state) => {
    return state.gradients[state.drawer.gradient]
  },
  image: (state) => {
    return state.drawer.image === ''
      ? state.drawer.image
      : state.images[state.drawer.image]
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
