/**
* @see: https://www.npmjs.com/package/vue-api-service#usage
*/

export default {

  /**
   *  @request { username, password }
   *  @response { accessToken, refreshToken }
   */
  signIn: {
    method: 'POST',
    url: '/auth/login'
  },

  /**
   *  Refresh JWT tokens
   *  @request { refreshToken }
   *  @response { accessToken, refreshToken }
   */
  refresh: {
    method: 'POST',
    url: '/auth/refresh'
  },

  /**
   *  User profile data
   *  @response { ...userData }
   */
  userData: {
    method: 'GET',
    url: '/me'
  }

}
