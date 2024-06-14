// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import { layout,authLayout, route } from '@/util/routes'
const { isNavigationFailure, NavigationFailureType } = Router

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
    
  },
  routes: [
    layout('Default', [
      route('Dashboard',null,'/'),
      route('UserProfile', null, 'components/profile'),
      route('Icons', null, 'components/icons'),
      route('Empty Page', null, 'components/empty-page'),
      route('Regular Tables', null, 'tables/regular'),
      route('BannerList', null, 'views/BannerList'),
      route('UserList', null, 'views/userlist'),
      route('Customers', null, 'customers/list'),
      route('Customer Details', null, 'customers/details/:id'),
      route('Bonus Abusers', null, 'customers/bonus-abusers'),
      route('Tickets', null, 'customers/tickets'),
      route('Users', null, 'users/list'),
      route('Roles', null, 'users/roles'),
      route('UserDetails', null, 'users/user-details/:id'),
      route('Deposits', null, 'finances/deposits'),
      route('Withdrawals', null, 'finances/withdrawals'),
      route('Reports', null, 'reports/home'),
      route('Agents', null, 'reports/agents'),
      route('Payments', null, 'reports/payments'),
      route('Games', null, 'bookie/games'),
      route('Slides', null, 'bookie/slides'),
      route('Bets', null, 'bets/list'),
      route('Casinos', null, 'bets/casinos'),
      route('Virtuals', null, 'bets/virtuals'),
      route('Settings', null, 'settings'),
      
    ]),
    authLayout('Default', [
      route('Login',null,'login'),
     ]),
  ]
})

export default router
