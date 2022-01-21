import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _023bf8df = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _265b97ca = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _d5df0ebc = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _6584ca22 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _6408b686 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "" */))
const _d1154a88 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _0b3164b5 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/yc/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _023bf8df,
    children: [{
      path: "/",
      component: _265b97ca,
      name: "home"
    }, {
      path: "/login",
      component: _d5df0ebc,
      name: "login"
    }, {
      path: "/register",
      component: _d5df0ebc,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _6584ca22,
      name: "profile"
    }, {
      path: "/settings",
      component: _6408b686,
      name: "settings"
    }, {
      path: "/editor",
      component: _d1154a88,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0b3164b5,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
