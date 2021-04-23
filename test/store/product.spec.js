import { getters, mutations } from '~/store/product'
const { items, get, isLoaded } = getters
const { setItems, setError, setLoaded } = mutations

describe('getters', () => {
  const state = {
    items: [
      {
        id: 1,
        imageUrl: 'http://image1.png',
        price: 100,
        name: 'product 1',
        currency: 'Rp',
      },
      {
        id: 2,
        imageUrl: 'http://image2.png',
        price: 200,
        name: 'product 2',
        currency: 'Rp',
      },
      {
        id: 3,
        imageUrl: 'http://image3.png',
        price: 300,
        name: 'product 3',
        currency: 'Rp',
      },
    ],
    loaded: true,
  }

  it('get product items', () => {
    const result = items(state)
    expect(result).toHaveLength(3)
    expect(result[0].id).toBe(1)
    expect(result[0].imageUrl).toBe('http://image1.png')
    expect(result[0].price).toBe(100)
    expect(result[0].name).toBe('product 1')
    expect(result[0].currency).toBe('Rp')
    expect(result[1].id).toBe(2)
    expect(result[1].imageUrl).toBe('http://image2.png')
    expect(result[1].price).toBe(200)
    expect(result[1].name).toBe('product 2')
    expect(result[1].currency).toBe('Rp')
    expect(result[2].id).toBe(3)
    expect(result[2].imageUrl).toBe('http://image3.png')
    expect(result[2].price).toBe(300)
    expect(result[2].name).toBe('product 3')
    expect(result[2].currency).toBe('Rp')
  })

  it('get product by id', () => {
    const result = get(state, 1)
    expect(result.id).toBe(1)
    expect(result.imageUrl).toBe('http://image1.png')
    expect(result.price).toBe(100)
    expect(result.name).toBe('product 1')
    expect(result.currency).toBe('Rp')
  })

  it('check whether product list is loaded', () => {
    const result = isLoaded(state)
    expect(result).toBe(true)
  })
})

describe('mutations', () => {
  const state = {
    items: [],
    loaded: false,
    error: ''
  }
  const items = [
    {
      id: 100,
      imageUrl: 'http://image100.png',
      price: 100,
      name: 'product 100',
      currency: 'SGD',
    },
    {
      id: 101,
      imageUrl: 'http://image101.png',
      price: 200,
      name: 'product 101',
      currency: 'SGD',
    },
    {
      id: 102,
      imageUrl: 'http://image102.png',
      price: 300,
      name: 'product 102',
      currency: 'SGD',
    }
  ]

  it('setting product items', () => {
    setItems(state, items)
    expect(state.items).toHaveLength(3)
    expect(state.items[0].id).toBe(100)
    expect(state.items[0].imageUrl).toBe('http://image100.png')
    expect(state.items[0].price).toBe(100)
    expect(state.items[0].name).toBe('product 100')
    expect(state.items[0].currency).toBe('SGD')
  })

  it('setting error', () => {
    const error = 'Some Error Occurs'
    setError(state, error)
    expect(state.error).toBe(error)
  })

  it('setting loaded', () => {
    const loaded = true
    setLoaded(state, loaded)
    expect(state.loaded).toBe(loaded)
  })
})
