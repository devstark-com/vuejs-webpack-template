<template>
  <div id="app" :class="appClasses">
    <LayoutBroker
      {{#isAuth}}
      v-if="$auth.isLoaded()"
      {{/isAuth}}
      :layouts="layouts"
      :current="$route.meta.layout"
    >
      {{#if_and isAuth isVueProgress}}
      <template slot="after-page">
        <vue-progress-bar/>
      </template>
      {{/if_and}}
    </LayoutBroker>
    {{#isAuth}}
    <AppLoader v-else />
    {{/isAuth}}
  </div>
</template>
<script>
import { get } from 'lodash'
import LayoutBroker from 'vue-layout-broker'
import LayoutPublic from '@/pages/_layout/layout-public/'
{{#isAuth}}
import LayoutAccount from '@/pages/_layout/layout-account/'
import AppLoader from '@/pages/common/app-loader/'
{{/isAuth}}

const layouts = {
  LayoutPublic{{#isAuth}},
  LayoutAccount{{/isAuth}}
}

export default {
  name: 'App',
  components: {
    LayoutBroker{{#isAuth}},
    AppLoader{{/isAuth}}
  },
  data () {
    return {
      layouts
    }
  },
  computed: {
    /*
    * add classes from a route meta.appClasses key
    * @see @/modules/router/routes.js for the usage details
    */
    appClasses () {
      const routeAppClasses = get(this.$route, 'meta.appClasses')
      if (!routeAppClasses) return []
      if (typeof routeAppClasses === 'function') return routeAppClasses(this.$route)
      if (typeof routeAppClasses === 'string') routeAppClasses.split(' ')
      return routeAppClasses // array or object
    }
  }{{#if_and isAuth isVueProgress}},
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$Progress.start()
      this.$auth.whenLoaded()
        .then(() => this.$Progress.finish())
        .catch(() => this.$Progress.fail())
    }
  }{{/if_and}}
}
</script>
{{#assetsStructure}}
<style src='@/assets/css/main.scss' lang='scss'></style>
{{/assetsStructure}}
