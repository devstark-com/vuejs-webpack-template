// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import _ from 'lodash'
import VueMeta from 'vue-meta'
import ApiPlugin from '@/modules/api/plugin.js'
{{#if_or isAuth isVuexStore}}
import store from '@/vuex'
{{/if_or}}
{{#if_or isSmartForm isVuelidate}}
import Vuelidate from 'vuelidate'
{{/if_or}}
{{#isSmartForm}}
import VueSmartForm from 'vue-smart-form'
{{/isSmartForm}}
{{#isLiteKit}}
import VueLiteKit from 'vue-lite-kit'
{{/isLiteKit}}
{{#isAuth}}
import VueAuthService from 'vue-authenticate-service'
import apiClient from '@/modules/api/client'
import apiDriver from '@/modules/auth/apiDriver'
import clientDriver from '@/modules/auth/clientDriver'
{{/isAuth}}
export default {

  conf: null,
  router: null,
  {{#if_or isAuth isVuexStore}}
  store: null,
  {{/if_or}}

  /**
   * Setup application config
   */
  setConfig (conf) {
    this.conf = conf
    return this
  },

  /**
   * Configure Vue
   * http://vuejs.org/v2/api/#Global-Config
   */
  configureVue () {
    Vue.config.productionTip = this.conf.vue.productionTip
    Vue.config.performance = this.conf.vue.performance
    return this
  },

  {{#if_or isAuth isVuexStore}}
  /**
   * Init store
   */
  addStore () {
    this.store = store
    return this
  },
  {{/if_or}}

  /**
   * Register VueMeta plugin
   * https://github.com/declandewet/vue-meta
   */
  addVueMeta () {
    Vue.use(VueMeta)
    return this
  },

  {{#if_or isSmartForm isVuelidate}}
  /**
   * Add Vuelidate validation library
   * https://monterail.github.io/vuelidate/#sub-installation
   */
  addVuelidate () {
    Vue.use(Vuelidate)
    return this
  },
  {{/if_or}}

  {{#isSmartForm}}
  /*
   * Add VueSmartForm plugin
   * https://github.com/devstark-com/vue-smart-form
   */
  addVueSmartForm () {
    Vue.use(VueSmartForm, {
      serverErrorsFormatter: function (response) {
        return response.data // @todo fit server errors
      }
    })
    return this
  },
  {{/isSmartForm}}

  {{#isLiteKit}}
  /**
   * Add vue-lite-kit plugin
   */
  addVueLiteKit () {
    Vue.use(VueLiteKit, {
      cPref: 'bbt'
    })
    return this
  },
  {{/isLiteKit}}

  {{#isVueProgress}}
  /**
   * Register VueProgressBar plugin
   * http://hilongjw.github.io/vue-progressbar/index.html
   */
  addVueProgressBar () {
    Vue.use(VueProgressBar, {
      color: 'rgb(143, 255, 199)',
      failedColor: 'red',
      height: '2px'
    })
    return this
  },
  {{/isVueProgress}}

  /**
   * Add VueRouter
   * http://router.vuejs.org/en/index.html
   */
  addRouter () {
    this.router = router
    return this
  },

  /**
   * Add API service
   */
  addApiPlugin () {
    Vue.use(ApiPlugin)
    this.api = ApiPlugin.service
    return this
  },

  {{#isAuth}}
  /**
   * Add Auth service
   */
  addVueAuthService () {
    Vue.use(VueAuthService, {
      api: apiDriver(this.api, this.store),
      client: clientDriver(apiClient),
      options: {
        refresh: true,
        autoFetch: true
      }
    })

    return this
  },
  {{/isAuth}}

  /**
   * Run application
   */
  run () {
    const vm = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router: this.router{{#if_or isAuth isVuexStore}},
      store: this.store{{/if_or}}
    })

    if (process.env.NODE_ENV !== 'production') window.$vm = vm

    return this
  }
}
