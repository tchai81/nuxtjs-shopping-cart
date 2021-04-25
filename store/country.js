export const state = () => ({
  countryCode: 'ID',
  currency: 'Rp',
  exchangeRate: 10934.72,
})

export const getters = {
  countryCode(state) {
    return state.countryCode
  },
  currency(state) {
    return state.currency
  },
  exchangeRate(state) {
    return state.exchangeRate
  },
}
