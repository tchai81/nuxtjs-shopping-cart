import { getters } from '~/store/country'
const { countryCode, currency, exchangeRate } = getters

describe('getters', () => {
  const state = {
    countryCode: 'ID',
    currency: 'Rp',
    exchangeRate: 1
  }

  it('get country code', () => {
    const result = countryCode(state)
    expect(result).toBe('ID')
  })

  it('get currency', () => {
    const result = currency(state)
    expect(result).toBe('Rp')
  })

  it('get exchange rate', () => {
    const result = exchangeRate(state)
    expect(result).toBe(1)
  })
})
