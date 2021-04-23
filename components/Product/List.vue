<template>
  <div class="row">
    <div class="col-3 d-flex flex-column">
      <div class="flex-grow-1">
        <ProductItem :product="products[1]" />
      </div>
      <ProductItem :product="products[3]" />
    </div>
    <div class="col-6">
      <ProductItem :product="products[0]" />
    </div>
    <div class="col-3 d-flex flex-column">
      <div class="flex-grow-1">
        <ProductItem :product="products[2]" />
      </div>
      <ProductItem :product="products[4]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import ProductItem from '~/components/Product/Item'

export default Vue.extend({
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters({
      products: 'product/data',
    }),
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'product/fetch',
    }),
  },
})
</script>
