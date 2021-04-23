import PricingFormatter from '~/mixins/pricingFormatter'

export const state = () => ({
  items: [],
})

export const mutations = {
  addItem(state, product) {
    state.items.push({
      productId: product.id,
      qty: 1,
      unitPrice: product.price,
    })
  },

  removeItem(state, itemToRemoved) {
    state.items = state.items.filter((item) => item.productId !== itemToRemoved.productId)
  },

  updateItemQty(state, productAndNewQty) {
    const { product, newQty } = productAndNewQty
    state.items.find((item) => item.productId === product.productId).qty = newQty
  },

  increaseItemQty(state, product) {
    state.items.find((item) => item.productId === product.id).qty++
  },
}

export const getters = {
  items(state) {
    return state.items
  },
  totalCount(state) {
    return state.items.reduce((acc, currentItem) => acc + currentItem.qty, 0)
  },
  totalPrice(state) {
    return PricingFormatter(state.items.reduce(
      (acc, currentItem) => acc + currentItem.qty * currentItem.unitPrice,
      0
    ))
  },
}

export const actions = {
  addOrIncreaseItemQty(state, product) {
    const isProductExists = state.state.items.find(
      (item) => item.productId === product.id
    )
    if (isProductExists) {
      state.commit('increaseItemQty', product)
      return
    }
    state.commit('addItem', product)
  },
  updateItemQty(state, productAndEvent) {
    const { product, event } = productAndEvent
    state.commit('updateItemQty', {
      product,
      newQty: event.currentTarget.value,
    })
  },
  removeItem(state, itemToRemoved) {
    state.commit('removeItem', itemToRemoved)
  },
}
