<template>
  <div class="container pt-5">
    <div v-show="isLoaded">
      <Product-List />
      <hr class="mt-5 mb-4" />
      <Cart />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import ProductList from '~/components/Product/List'
import Cart from '~/components/Cart'

export default Vue.extend({
  components: {
    ProductList,
    Cart,
  },
  computed: {
    ...mapGetters({
      isLoaded: 'product/isLoaded',
    }),
  },
})
</script>

<style scoped lang="sass">
hr
  border-width: 10px
</style>