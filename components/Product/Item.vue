<template>
  <div v-if="product" class="d-flex flex-column">
    <div class="product-image">
      <img :src="product.imageUrl" class="img-fluid" />
    </div>
    <div class="d-flex flex-row pt-2">
      <div class="flex-fill justify-content-start text-left">
        <strong>{{ product.name }}</strong
        ><br />{{ product.currency }}
        {{ product.price }}
      </div>
      <div class="flex-fill justify-content-end text-right">
        <button @click="addToCart(product)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  props: ['product'],
  methods: {
    ...mapActions({
      addOrIncreaseItemQty: 'cart/addOrIncreaseItemQty',
    }),
    addToCart(product) {
      this.addOrIncreaseItemQty(product)
    },
  },
})
</script>

<style scoped lang="sass">
.product-image
  border: 5px solid #c6c9cf
button
  border: 0
  color: #fff
  background-color: orange
  font-size: 12px
</style>
