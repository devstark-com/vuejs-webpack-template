import Vue from 'vue'

export default {
  /**
   * Common Set mutation
   */
  set (state, {key, value}) {
    Vue.set(state, key, value)
  }
}
