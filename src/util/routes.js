// Imports
import { kebabCase } from 'lodash'
import { leadingSlash, trailingSlash } from '@/util/helpers'

export function abort (code = 404) {
  return {
    name: 'FourOhFour',
    path: '*',
    component: () => error(code),
  }
}

export function error (code = 404) {
  return import(
    /* webpackChunkName: "error-[request]" */
    `@/views/${code}.vue`
  )
}

export function layout (layout = 'Default', children, path = '') {
  const dir = kebabCase(layout)

  return {
    children,
    component: () =>
      import(
        /* webpackChunkName: "layout-[request]" */
        `@/layouts/${dir}/Index`
      ),
    path,
  }
}
export function authLayout (layout = 'Default', children, path = '') {
  const dir = kebabCase(layout)

  return {
    children,
    component: () =>
      import(
        /* webpackChunkName: "layout-[request]" */
        `@/layouts/${dir}/Auth`
      ),
    path,
  }
}

export function redirect (path = '*', rhandler) {
  if (typeof path === 'function') {
    rhandler = path
    path = '*'
  }

  return {
    path,
    redirect: (to) => {
      const rpath = rhandler(to)
      const url = rpath !== '' ? leadingSlash(trailingSlash(rpath)) : rpath

      return `/${url}`
    },
  }
}

function guardMyroute(to, from, next)
{
  var isAuthenticated= false;
  if(localStorage.getItem('auth'))
    isAuthenticated = true;
  else
    isAuthenticated= false;
  if(isAuthenticated) {
    next(); // allow to enter route
  } else{
    next('/login'); // go to '/login';
  }
}

export function route (name, component, path = '') {
  component = Object(component) === component ? component : { default: name.replace(' ', '') }
  const components = {}

  for (const [key, value] of Object.entries(component)) {
    components[key] = () =>
      import(
        /* webpackChunkName: "views-[request]" */
        `@/views/${value}`
      )
  }

  let obj = {
    name,
    components,
    path
  }

  if(name != 'Login') {
    return {
      ...obj,
      beforeEnter : guardMyroute,
    }
  } else {
    return {
      ...obj,
    }
  }
}
