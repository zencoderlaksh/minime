import { mediaLibrary } from './media.data.js'

const { wallOne, wallTwo, wallThree, wallFour, wallFive, wallSix } = mediaLibrary

export const collectionFilters = [
  {
    id: 'category',
    title: 'Category',
    field: 'category',
  },
  {
    id: 'size',
    title: 'Size',
    field: 'sizes',
  },
  {
    id: 'occasion',
    title: 'Occasion',
    field: 'occasion',
  },
]

export const collectionSortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low' },
  { value: 'price-high', label: 'Price: High' },
]

export const collectionHero = {
  'new-arrivals': {
    title: 'New Arrivals',
    description: 'Fresh drops across women, kids, and occasion dressing.',
    image: wallOne.full,
    imageLabel: 'New Arrivals',
  },
  women: {
    title: 'Women',
    description: 'Soft tailoring, modern co-ords, dresses, and everyday sets.',
    image: wallTwo.full,
    imageLabel: 'Women',
  },
  kids: {
    title: 'Kids',
    description: 'Playful polished looks for everyday, portraits, and celebration.',
    image: wallThree.full,
    imageLabel: 'Kids',
  },
  occasion: {
    title: 'Occasion',
    description: 'Festive, wedding, and portrait-day pieces with a dressed-up finish.',
    image: wallFour.full,
    imageLabel: 'Occasion',
  },
  bestsellers: {
    title: 'Bestsellers',
    description: 'The most-loved pieces gathered into one easy edit.',
    image: wallFive.full,
    imageLabel: 'Bestsellers',
  },
  default: {
    title: 'Collection',
    description: 'Premium merchandising with filters and elevated product discovery.',
    image: wallSix.full,
    imageLabel: 'Collection',
  },
}

const collectionMatchers = {
  'new-arrivals': (product) => product.collections?.includes('new-arrivals'),
  women: (product) => product.collections?.includes('women'),
  kids: (product) => product.collections?.includes('kids'),
  occasion: (product) => product.collections?.includes('occasion'),
  bestsellers: (product) => product.collections?.includes('bestsellers'),
}

export function getCollectionProducts(products, slug) {
  const matcher = collectionMatchers[slug]

  if (!matcher) {
    return products
  }

  return products.filter(matcher)
}

export function buildCollectionFilters(products, filterDefinitions = collectionFilters) {
  return filterDefinitions
    .map((filter) => {
      const values = products.flatMap((product) => {
        const value = product[filter.field]
        return Array.isArray(value) ? value : [value]
      })

      const options = [...new Set(values.filter(Boolean))]

      return {
        ...filter,
        options,
      }
    })
    .filter((filter) => filter.options.length > 0)
}

export function filterCollectionProducts(products, filterDefinitions, activeFilters) {
  return products.filter((product) =>
    filterDefinitions.every((filter) => {
      const selectedValues = activeFilters[filter.id] || []

      if (selectedValues.length === 0) {
        return true
      }

      const productValue = product[filter.field || filter.id]
      const productValues = Array.isArray(productValue) ? productValue : [productValue]

      return selectedValues.some((value) => productValues.includes(value))
    }),
  )
}

export function sortCollectionProducts(products, sortBy) {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdDate || 0) - new Date(a.createdDate || 0)
      case 'price-low':
        return (a.price || 0) - (b.price || 0)
      case 'price-high':
        return (b.price || 0) - (a.price || 0)
      case 'featured':
      default:
        return (a.featuredRank || a.id || 0) - (b.featuredRank || b.id || 0)
    }
  })
}
