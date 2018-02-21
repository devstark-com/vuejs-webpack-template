export default {

  /**
   *  @request { _username, _password }
   *  @response { token, refresh_token }
   */
  signIn: {
    method: 'POST',
    url: '/auth/login'
  },

  /**
   *  Refresh JWT access token
   *  @request { refresh_token }
   *  @response { token, refresh_token }
   */
  refresh: {
    method: 'POST',
    url: '/auth/token/refresh'
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
