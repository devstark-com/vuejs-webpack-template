import apiService from './service.js'

const apiServicePlugin = {
  service: null,
  install (Vue, options) {
    this.service = Vue.$api = Vue.prototype.$api = apiService
  }
}

export default apiServicePlugin
