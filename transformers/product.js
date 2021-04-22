import PricingFormatter from '~/mixins/pricingFormatter'

const currencyExchangeRateByCountryCode = {
  ID: {
    currency: 'RP',
    exchangeRate: 10942.93,
  },
}

export default (products, countryCode) => {
  const result = []
  products.forEach((product, index) => {
    result.push({
      id: ++index,
      imageUrl: product.image,
      price: PricingFormatter(
        product.price *
        currencyExchangeRateByCountryCode[countryCode].exchangeRate
      ),
      name: product.name,
      currency: currencyExchangeRateByCountryCode[countryCode].currency,
    })
  })
  return result
}
