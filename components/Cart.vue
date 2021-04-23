<template>
  <div>
    <h2 class="text-center pb-5">Shopping Cart - {{ totalCount }} items</h2>
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
        <td class="align-middle">
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
        <td class="align-middle">{{ item.qty * item.unitPrice }}</td>
      </tr>
      <tr v-if="items.length">
        <td colspan="5"></td>
        <td colspan="5">{{ totalPrice }}</td>
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
</style>
