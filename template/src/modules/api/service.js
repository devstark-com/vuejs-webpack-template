/*
USAGE

1) add endpoint config to the endpoints.js file

  endpointName: {
    method: 'POST',
    url: '/auth/:id/register'
  }

2) call API endpoint in the app like this:

this.$api.endpointName({
  data: { key: 'value' }, // body data
  params: { userId: 1 }, // url params, e.g. ?userId=1
  segments: { id: 2 } // replaces ':id' in the endpoint url config with value
})

*/

import client from './client'
import endpoints from './endpoints'
import { mapValues } from 'lodash'
import Regexp from 'path-to-regexp'

const regexpCompileCache = Object.create(null)
const fillSegments = (url, segments) => {
  try {
    const filler =
      regexpCompileCache[url] ||
      (regexpCompileCache[url] = Regexp.compile(url))
    return filler(segments || {}, { pretty: true })
  } catch (e) {
    console.warn(false, `missing param for ${url}: ${e.message}`)
    return ''
  }
}

const defaultHandler = (endpoint, key) => {
  const { method, url } = endpoint
  return (args) => {
    const { data, params, segments } = args || {}
    const urlFilled = fillSegments(url, segments)
    return client({
      method,
      url: urlFilled,
      params,
      data,
      _endpointKey: key
    })
  }
}

const apiMethods = mapValues(endpoints, (endpoint, key) => {
  if (endpoint.handler) return endpoint.handler
  return defaultHandler(endpoint, key)
})

export default Object.freeze(apiMethods)
