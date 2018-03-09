/**
 * This implentation relies on interceptors realisation inside API client
 */
export default (client) => {
  return {
    /**
     * Injects request modifircator
     */
    interceptors: (service) => {
      client.interceptors.request.use(request => {
        // for some queries we shouldn't send any auth headers
        const guestOnlyEndpoints = ['signIn', 'refresh']
        if (guestOnlyEndpoints.includes(request._endpointKey)) return request

        return service.accessToken()
          .then(token => {
            request.headers.Authorization = `Bearer ${token}`
            return Promise.resolve(request)
          })
          .catch(() => Promise.resolve(request))
      }, error => Promise.reject(error))

      /**
       * Check response for access denied code
       */
      client.interceptors.response.use(response => {
        return response
      }, error => {
        if (error.response && error.response.status === 401) {
          return service.logout()
        }
        return Promise.reject(error)
      })
    }
  }
}
