<template>
  <div class="container pt-5">
    <Product-List />
    <hr class="mt-5 mb-4" />
    <Cart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductList from '~/components/Product/List'
import Cart from '~/components/Cart'

export default Vue.extend({
  components: {
    ProductList,
    Cart,
  },
})
</script>

<style scoped lang="sass">
hr
  border-width: 10px
</style>