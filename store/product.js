import axios from 'axios'
import transformer from '~/transformers/product'

export const state = () => ({
  items: [],
  loaded: false,
  error: '',
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setError(state, error) {
    state.error = error
  },
  setLoaded(state, loaded) {
    console.log('loaded')
    state.loaded = loaded
  },
}

export const getters = {
  items(state) {
    return state.items
  },
  get(state, productId) {
    return state.items.find((item) => item.id === productId)
  },
  isLoaded(state) {
    return state.loaded
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
          commit('setLoaded', true)
        } else {
          commit('setError', `Empty data set.`)
        }
      })
      .catch(() => {
        commit('setError', `Encounter error while fetching product data.`)
      })
  },
}
