{{#isAuth}}
import Vue from 'vue'
import { promiseDelegator } from '@/modules/utils/promise-delegator.js'

export const setUserData = ({ commit, state }, user) => {
  commit('set', { key: 'userData', value: user })
  promiseDelegator('userDataLoaded').resolve(state.userData)
  return state.userData
}

export const whenUserDataLoaded = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    if (state.userData) return resolve(state.userData)
    promiseDelegator('userDataLoaded').delegate(resolve, reject)
  })
}

export const loadUserData = ({ dispatch, state }) => {
  return Vue.$api.userData()
    .then(response => response.data)
    .then(user => dispatch('setUserData', user))
}

export const updateUserData = ({ dispatch, state }, user) => {
  return Vue.$api.updateUser({ data: user })
    .then(response => response.data)
    .then(user => dispatch('setUserData', user))
}
{{/isAuth}}
