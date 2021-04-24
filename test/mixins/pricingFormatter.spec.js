import PricingFormatter from '~/mixins/pricingFormatter'

describe('mixins', () => {
  it('pricing formatter', () => {
    const result1 = PricingFormatter(14)
    const result2 = PricingFormatter(12.5)
    expect(result1).toBe('14.000')
    expect(result2).toBe('12.500')
  })
})
