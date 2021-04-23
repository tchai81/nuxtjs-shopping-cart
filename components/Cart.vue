<template>
  <div>
    <h5 class="text-center pt-3 pb-3">
      <strong
        ><span class="text-uppercase">Shopping Cart</span> -
        {{ totalCount }} items</strong
      >
    </h5>
    <table class="table" v-if="items.length">
      <tr>
        <th></th>
        <th>Product</th>
        <th></th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td class="align-middle text-center">
          <button @click="removeItem(item)">X</button>
        </td>
        <td class="align-middle">
          <img :src="getProductById(item.productId).imageUrl" />
        </td>
        <td class="align-middle">{{ getProductById(item.productId).name }}</td>
        <td class="align-middle">
          {{ getProductById(item.productId).currency
          }}{{ getProductById(item.productId).price }}
        </td>
        <td class="align-middle">
          <input
            type="number"
            min="1"
            class="form-control"
            :value="item.qty"
            @change="onUpdateItemQty(item, $event)"
          />
        </td>
        <td class="align-middle">{{ totalPriceByItem(item) }}</td>
      </tr>
      <tr v-if="items.length">
        <td colspan="5"></td>
        <td>{{ totalPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({
      products: 'product/data',
      items: 'cart/items',
      totalCount: 'cart/totalCount',
      totalPrice: 'cart/totalPrice',
      totalPriceByItem: 'cart/totalPriceByItem',
    }),
  },
  methods: {
    ...mapActions({
      removeItem: 'cart/removeItem',
      updateItemQty: 'cart/updateItemQty',
    }),
    getProductById(productId) {
      return this.products.find((product) => product.id === productId)
    },
    onUpdateItemQty(product, event) {
      this.updateItemQty({ product, event })
    },
  },
})
</script>

<style scoped lang="sass">
img
  width: 150px
  height: 150px
  border: 1px solid #ccc
table > tr
  font-weight: bold
  border: 3px solid #D6D6D6
input
  width: 100px
  text-align: center
</style>