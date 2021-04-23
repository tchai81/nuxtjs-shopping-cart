import axios from 'axios'
import transformer from '~/transformers/product'

export const state = () => ({
  data: [],
  error: '',
})

export const mutations = {
  setData(state, data) {
    state.data = data
  },
  setError(state, error) {
    state.error = error
  },
}

export const getters = {
  data(state) {
    return state.data
  },
  get(state, productId) {
    return state.data.find((item) => item.id === productId)
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
          commit('setData', transformer(products, rootState.country))
        } else {
          commit('setError', `Empty data set.`)
        }
      })
      .catch(() => {
        commit('setError', `Encounter error while fetching product data.`)
      })
  },
}
