<template>
  <transition>
    <component{{#isAuth}} v-if="$auth.isLoaded()"{{/isAuth}} :is="currentLayout">
      <router-view></router-view>
      {{#if_and isAuth isVueProgress}}
      <vue-progress-bar/>
      {{/if_and}}
    </component>
    {{#isAuth}}
    <AppLoader v-else />
    {{/isAuth}}
  </transition>
</template>
<script>
{{#isAuth}}
import AppLoader from '@/pages/common/app-loader/'
import LayoutAccount from '@/pages/_layout/layout-account/'
{{/isAuth}}
import LayoutPublic from '@/pages/_layout/layout-public/'
export default {
  name: 'LayoutBroker',
  components: {
    {{#isAuth}}
    AppLoader,
    LayoutAccount,
    {{/isAuth}}
    LayoutPublic
  },
  computed: {
    /**
     * Return layout component name for current route
     * @return {string}
     */
    currentLayout () {
      return this.$route.meta.layout
    }
  },
  created () {
  {{if_and isAuth isVueProgress}}
    this.loadData()
  {{/if_and}}
  },
  methods: {
    loadData () {
      this.$Progress.start()
      this.$auth.whenLoaded()
        .then(() => this.$Progress.finish())
        .catch(() => this.$Progress.fail())
    }
  }
}
</script>
