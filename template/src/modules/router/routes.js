import Page404 from '@/pages/public/_error/404/'
import IndexPage from '@/pages/public/index/'
{{#isAuth}}
import AccountIndexPage from '@/pages/account/index/'
{{/isAuth}}

/**
 * Router meta fields usage:
 *
 *  section: { String } 'public' | 'account' - information for the compoents about route type
 *
 *  layout: { String } — layout component name, see @/pages/common/LayoutBroker.vue
 *
 *  auth: { Boolean | Object } — router guard, see @/modules/router/middleware.js
 *
 *  appClasses: { String | Array | Object | Function } — classes for a route to be added to the App wrapper.
 *              Usage examples:
 *              appClasses: 'class__name'
 *              appClasses: ['class__name_1', 'class__name_1']
 *              appClasses: {'class__name_1': true}
 *              appClasses: (route) => { return { 'is-var-exist': route.query.var } }
 *
 */

const meta = {
  public: {
    section: 'public',
    layout: 'LayoutPublic'
  }{{#isAuth}},
  account: {
    section: 'account',
    layout: 'LayoutPublic',
    auth: true
  }{{/isAuth}}
}

/**
 * Application routes configuration
 * @type {Array.<object>}
 */
const routes = [
  {
    name: 'index',
    path: '/',
    component: IndexPage,
    meta: {
      ...meta.public
    }
  },
  {{#isAuth}}
  {
    name: 'account-index',
    path: '/account',
    component: AccountIndexPage,
    meta: {
      ...meta.account
    }
  },
  {{/isAuth}}
  {
    name: 'not-found',
    path: '*',
    component: Page404,
    meta: {
      ...meta.public
    }
  }
]

export default routes
