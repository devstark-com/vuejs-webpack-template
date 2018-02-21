const retrieveTokens = (resonse) => {
  return { accessToken: resonse.data.token, refreshToken: resonse.data.refresh_token }
}

const apiDriver = (api, store) => {
  return {
    login: (creds) => api.signIn(creds).then(retrieveTokens),
    refresh: (refreshToken) => api.refresh({ data: { refresh_token: refreshToken } }).then(retrieveTokens),
    user: () => store.dispatch('app/loadUserData')
  }
}
export default apiDriver
