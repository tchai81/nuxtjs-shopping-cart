import PricingFormatter from '~/mixins/pricingFormatter'

export default (products, countryState) => {
  const { currency, exchangeRate } = countryState
  const result = []
  products.forEach((product, index) => {
    result.push({
      id: ++index,
      imageUrl: product.image,
      price: PricingFormatter(product.price * exchangeRate),
      name: product.name,
      currency,
    })
  })
  return result
}
