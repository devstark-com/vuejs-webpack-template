<template>
  <div class="layout-public">
    <LayoutHeader />
    <slot></slot>
    <LayoutFooter />
  </div>
</template>
<script>
import LayoutHeader from './header/'
import LayoutFooter from './footer/'
export default {
  name: 'LayoutPublic',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
