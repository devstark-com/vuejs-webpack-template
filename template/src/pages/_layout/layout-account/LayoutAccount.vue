<template>
  <div class="layout-account">
    <LayoutHeader />
    <slot></slot>
    <LayoutFooter />
  </div>
</template>
<script>
import LayoutHeader from './header/'
import LayoutFooter from './footer/'
export default {
  name: 'LayoutAccount',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
