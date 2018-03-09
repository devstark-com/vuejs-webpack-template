<template>
  <div>
    <h1>Error 404</h1>
    <h3>Page not found</h3>
    <router-link :to="{ name: 'index' }">Go to Home page</router-link>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  metaInfo: {
    title: '404 - Page Not Found'
  }
}
</script>
