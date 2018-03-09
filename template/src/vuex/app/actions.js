{{#isAuth}}
import Vue from 'vue'

export const setUserData = ({ commit, state }, user) => {
  commit('set', { key: 'userData', value: user })
  return state.userData
}

export const loadUserData = ({ dispatch, state }) => {
  return Vue.$api.userData()
    .then(response => response.data)
    .then(user => dispatch('setUserData', user))
}
{{/isAuth}}
