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

  increaseItemQty(state, product) {
    state.items.find((item) => item.productId === product.id).qty++
  },

  decreaseItemQty(state, product) {
    const productToDecrease = state.items.find(
      (item) => item.productId === product.id
    )
    if (productToDecrease.qty > 0) {
      productToDecrease.qty--
    }
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
  removeItem(state, itemToRemoved) {
    state.commit('removeItem', itemToRemoved)
  },
}
