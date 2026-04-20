import wallOne from '../assets/images/WallOne.jpg'
import wallTwo from '../assets/images/WallTwo.jpg'
import wallThree from '../assets/images/WallThree.jpg'
import wallFour from '../assets/images/WallFour.jpg'
import wallFive from '../assets/images/WallFive.jpg'
import wallSix from '../assets/images/WallSix.jpg'

export const collectionFilters = [
  {
    id: 'category',
    title: 'Category',
    options: ['Co-ord Sets', 'Kurta Sets', 'Dresses', 'Kidswear'],
  },
  {
    id: 'size',
    title: 'Size',
    options: ['XS', 'S', 'M', 'L', 'XL', '2-3Y', '4-5Y'],
  },
  {
    id: 'occasion',
    title: 'Occasion',
    options: ['Everyday', 'Festive', 'Wedding', 'Portrait Day'],
  },
]

export const collectionHero = {
  'new-arrivals': {
    title: 'New Arrivals',
    description: 'Fresh drops with a cleaner editorial browsing flow.',
    image: wallOne,
  },
  women: {
    title: 'Women',
    description: 'A cleaner women edit with elevated product-first discovery.',
    image: wallTwo,
  },
  kids: {
    title: 'Kids',
    description: 'Playful, polished, and ready for a more visual browse.',
    image: wallThree,
  },
  occasion: {
    title: 'Occasion',
    description: 'Event dressing for women and kids with softer styling.',
    image: wallFour,
  },
  bestsellers: {
    title: 'Bestsellers',
    description: 'The most-loved styles, gathered into one easy edit.',
    image: wallFive,
  },
  default: {
    title: 'Collection',
    description: 'Premium merchandising with sticky filters and elevated product storytelling.',
    image: wallSix,
  },
}
