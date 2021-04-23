import axios from 'axios'
import transformer from '~/transformers/product'

export const state = () => ({
  items: [],
  error: '',
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setError(state, error) {
    state.error = error
  },
}

export const getters = {
  items(state) {
    return state.items
  },
  get(state, productId) {
    return state.items.find((item) => item.id === productId)
  },
}

export const actions = {
  fetch({ commit, rootState }) {
    const url = `http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json`
    axios
      .get(url)
      .then((response) => {
        const products = response?.data?.data || []
        if (products.length) {
          commit('setItems', transformer(products, rootState.country))
        } else {
          commit('setError', `Empty data set.`)
        }
      })
      .catch(() => {
        commit('setError', `Encounter error while fetching product data.`)
      })
  },
}
