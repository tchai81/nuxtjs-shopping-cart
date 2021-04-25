import transformer from '~/transformers/product'

describe('transformers', () => {
  const product = [
    {
      image: 'http://image1.jpg',
      price: '15',
      currency: 'SGD',
      name: 'Iphone 12 Pro Max',
    },
    {
      image: 'http://image2.jpg',
      price: '10',
      currency: 'SGD',
      name: 'Iphone 11 Pro Max',
    },
  ]

  const countryState = {
    countryCode: 'US',
    currency: 'USD',
    exchangeRate: 3,
  }

  it('transforms the data correctly', () => {
    const result = transformer(product, countryState)
    expect(result[0].id).toBe(1)
    expect(result[0].imageUrl).toBe('http://image1.jpg')
    expect(result[0].currency).toBe('USD')
    expect(result[0].name).toBe('Iphone 12 Pro Max')
    expect(result[0].price).toBe('45.000')
    expect(result[1].id).toBe(2)
    expect(result[1].imageUrl).toBe('http://image2.jpg')
    expect(result[1].currency).toBe('USD')
    expect(result[1].name).toBe('Iphone 11 Pro Max')
    expect(result[1].price).toBe('30.000')
  })
})
