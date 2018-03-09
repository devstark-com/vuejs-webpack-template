import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import { beforeEach, afterEach } from './middlewares'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    const fromKeepScrollRoute = from.meta && from.meta.keepScroll
    const toKeepScrollRoute = to.meta && to.meta.keepScroll
    if (fromKeepScrollRoute || toKeepScrollRoute) return

    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
