<template>
  <div class="container pt-5">
    <Product-List />
    <hr />
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