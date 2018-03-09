{{#isAuth}}
import Vue from 'vue'

const defaultAuthRedirect = { name: 'sign-in' }

/**
 * Checks each route in config for auth directives
 * Usage: add a auth property in the router item's meta
 *
 * // Boolean notation - will redirect to the defaultAuthRedirect
 * meta: {
 *   auth: true
 * }
 *
 * // Or Object notation - allows to define custom redirect
 * meta: {
 *   auth: {
 *     required: true,
 *     redirect: { name: 'home' }
 *   }
 * }
 *
 * // Redirect can be a function
 * meta: {
 *   auth: {
 *     required: true,
 *     redirect: ({ from, to }) => { return '...' }
 *   }
 * }
 */
export const beforeEach = (to, from, next) => {
  const auth = to.meta.auth
  if (!auth) return next()
  const authRequired = (auth === true) || (auth.required === true) || false
  if (!authRequired) return next()

  const redirect = () => {
    if (typeof auth.redirect === 'function') return auth.redirect({ from, to })
    const fromRoute = from.name ? from : null
    return auth.redirect || fromRoute || defaultAuthRedirect
  }

  // wait until the auth plugin loaded user data
  Vue.$auth.whenLoaded()
    .then(() => {
      const isAuthenticated = Vue.$auth.isAuthenticated()
      if (!isAuthenticated) {
        return next(redirect())
      }

      // otherwise move forward
      next()
    })
}

export const afterEach = (to, from) => {
  // ...
}

export const redirectIfAuthenticated = (redirect = '/') => (to, from, next) => {
  Vue.$auth.whenLoaded()
    .then(() => {
      const isAuthenticated = Vue.$auth.isAuthenticated()
      if (isAuthenticated) {
        return next(redirect)
      }
      // otherwise move forward
      next()
    })
}
{{/isAuth}}
{{#unless isAuth}}
export const beforeEach = (to, from, next) => { next() }
export const afterEach = (to, from) => { //... }
{{/unless}}
