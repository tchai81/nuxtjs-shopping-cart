import jestConfig from '~/jest.config'
import { mutations, getters, actions } from '~/store/cart'

const { addItem, removeItem, increaseItemQty, updateItemQty } = mutations
const { totalCount, totalPrice, totalPriceByItem } = getters
const { addOrIncreaseItemQty, updateItemQty: actionUpdateItemQty, removeItem: actionRemoveItem } = actions

describe('getters', () => {
  const state = {
    items: [
      { productId: 1, qty: 1, unitPrice: 10 },
      { productId: 2, qty: 2, unitPrice: 20 },
      { productId: 3, qty: 3, unitPrice: 30 },
    ],
  }

  it('get total count', () => {
    const result = totalCount(state)
    expect(result).toBe(6)
  })

  it('get total price', () => {
    const result = totalPrice(state)
    expect(result).toBe('140.000')
  })

  it('get total price by item', () => {
    const result = totalPriceByItem(state)({ productId: 3 })
    expect(result).toBe('90.000')
  })
})

describe('mutations', () => {
  const state = {
    items: [
      { productId: 1, qty: 1, unitPrice: 1 },
      { productId: 2, qty: 1, unitPrice: 1 },
      { productId: 3, qty: 1, unitPrice: 1 },
    ],
  }

  it('add item', () => {
    addItem(state, {
      id: 4,
      price: 2,
    })
    const addedItem = state.items[state.items.length - 1]
    expect(state.items).toHaveLength(4)
    expect(addedItem.productId).toBe(4)
    expect(addedItem.unitPrice).toBe(2)
  })

  it('remove item', () => {
    const cartItemToRemove = { productId: 1 }
    removeItem(state, cartItemToRemove)
    const removedItem = state.items.find((item) => item.productId === cartItemToRemove.productId)
    expect(state.items).toHaveLength(3)
    expect(removedItem).toBe(undefined)
  })

  it('update item quantity', () => {
    const payload = {
      product: {
        productId: 2
      },
      newQty: 10
    }
    updateItemQty(state, payload)
    const updatedCartItem = state.items.find((item) => item.productId === payload.product.productId)
    expect(updatedCartItem.qty).toBe(10)
  })

  it('increase item qty', () => {
    const productToIncrease = { id: 3 }
    increaseItemQty(state, productToIncrease)
    const increasedProduct = state.items.find(
      (item) => item.productId === productToIncrease.id
    )
    expect(increasedProduct.qty).toBe(2)
  })

})

describe('actions', () => {
  const state = {
    state: {
      items: [
        { productId: 1, qty: 1, unitPrice: 1 },
        { productId: 2, qty: 1, unitPrice: 1 },
        { productId: 3, qty: 1, unitPrice: 1 },
      ],
    },
    commit: jest.fn(),
  }

  it('add new item to cart', () => {
    const product = { id: 4 }
    addOrIncreaseItemQty(state, product)
    expect(state.commit).toHaveBeenCalledWith('addItem', product)
  })

  it('add existing item to cart', () => {
    const product = { id: 1 }
    addOrIncreaseItemQty(state, product)
    expect(state.commit).toHaveBeenCalledWith('increaseItemQty', product)
  })

  it('update existing item qty in cart', () => {
    const productAndEvent = {
      product: { id: 1 },
      event: {
        currentTarget: { value: 5 },
      },
    }
    actionUpdateItemQty(state, productAndEvent)
    expect(state.commit).toHaveBeenCalledWith('updateItemQty', {
      product: productAndEvent.product,
      newQty: +productAndEvent.event.currentTarget.value,
    })
  })

  it('remove item from cart', () => {
    actionRemoveItem(state, {})
    expect(state.commit).toHaveBeenCalledWith('removeItem', {})
  })
})
