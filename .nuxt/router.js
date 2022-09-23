import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f4f1c140 = () => interopDefault(import('../pages/searchBike.vue' /* webpackChunkName: "pages/searchBike" */))
const _1b80e02a = () => interopDefault(import('../pages/searchLane.vue' /* webpackChunkName: "pages/searchLane" */))
const _2abf87dc = () => interopDefault(import('../pages/searchResult.vue' /* webpackChunkName: "pages/searchResult" */))
const _1315c92a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/searchBike",
    component: _f4f1c140,
    name: "searchBike"
  }, {
    path: "/searchLane",
    component: _1b80e02a,
    name: "searchLane"
  }, {
    path: "/searchResult",
    component: _2abf87dc,
    name: "searchResult"
  }, {
    path: "/",
    component: _1315c92a,
    name: "index"
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
