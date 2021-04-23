export const state = () => ({
  countryCode: 'SG',
  currency: 'SGD',
  exchangeRate: 1,
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
