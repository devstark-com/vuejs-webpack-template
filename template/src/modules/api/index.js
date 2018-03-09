import Vue from 'vue'
import VueApiService from 'vue-api-service'

import client from './client'
import endpoints from './endpoints'
import mocks from './mocks'

Vue.use(VueApiService, {
  client,
  endpoints,
  mocks
})

export default Vue.$api
