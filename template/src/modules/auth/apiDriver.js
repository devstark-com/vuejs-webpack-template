const apiDriver = (api, store) => {
  return {
    login: (creds) => api.signIn(creds).then(r => r.data),
    refresh: (refreshToken) => api.refresh({ data: { refreshToken } }).then(r => r.data),
    user: () => store.dispatch('app/loadUserData')
  }
}
export default apiDriver
