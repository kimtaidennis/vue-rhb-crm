// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard',  active: true, to: '/'},
    { 
      title: 'Customer Care', 
      icon: 'mdi-phone',
      items:[
        { title: 'Customers',icon: 'mdi-chevron-right', to: '/customers/list/',},
        { title: 'Tickets',icon: 'mdi-chevron-right', to: '/customers/tickets/'},
        { title: 'Bonus Abusers',icon: 'mdi-chevron-right', to: '/customers/bonus-abusers/',},
      ],
    },
    {
      title: 'Admin',
      icon: 'mdi-account',
      items:[
        { title: 'Users', icon: 'mdi-chevron-right',to: '/users/list/'},
        { title: 'Roles', icon: 'mdi-chevron-right',to: '/users/roles/'},
      ],
    },
    {
      title: 'Bets',
      icon: 'mdi-clipboard-list',
      items:[
        { title: 'Sports', icon: 'mdi-chevron-right',to: '/bets/list/'},
        { title: 'Casinos', icon: 'mdi-chevron-right',to: '/bets/casinos/'},
        { title: 'Virtuals', icon: 'mdi-chevron-right',to: '/bets/virtuals/'},
      ],
    },
    {
      title: 'Bookie',
      icon: 'mdi-format-list-bulleted',
      items:[
        { title: 'Games',icon: 'mdi-chevron-right',to: '/bookie/games/' },
        { title: 'Slides',icon: 'mdi-chevron-right',to: '/bookie/slides/' },
      ],
    },
    {
      title: 'Finances',
      icon: 'mdi-currency-usd',
      items:[
        { title: 'Deposits',icon: 'mdi-chevron-right',to: '/finances/deposits/' },
        { title: 'Withdrawals',icon: 'mdi-chevron-right',to: '/finances/withdrawals/' },
      ],
    },
    {
      title: 'Reports',
      icon: 'mdi-chart-bubble',
      items:[
        { title: 'Dashboard',icon: 'mdi-chevron-right',to: '/reports/home/' },
        { title: 'Agents',icon: 'mdi-chevron-right',to: '/reports/agents/' },
        { title: 'Payments',icon: 'mdi-chevron-right',to: '/reports/payments/' },
      ],
    },
    { title: 'Settings', icon: 'mdi-cog',  active: true, to: '/settings'},

  ],

}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
