<template>
  <div id="app" :class="appClasses">
    <LayoutBroker />
  </div>
</template>
<script>
import { get } from 'lodash'
import LayoutBroker from '@/pages/_layout/LayoutBroker.vue'
export default {
  name: 'App',
  components: {
    LayoutBroker
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
  }
}
</script>
{{#assetsStructure}}
<style src='./assets/css/main.scss' lang='scss'></style>
{{/assetsStructure}}
