import { mediaLibrary } from './media.data.js'

const { wallOne, wallTwo, wallThree, wallFour, wallFive } = mediaLibrary

export const navLinks = [
  {
    label: 'New Arrivals',
    to: '/collections/new-arrivals',
    featured: {
      title: 'Freshly curated drops',
      description: 'The latest silhouettes, softer palettes, and easy gifting edits.',
      image: wallOne.thumb,
    },
    groups: [
      {
        title: 'Shop by edit',
        links: [
          { label: 'Spring Summer', to: '/collections/new-arrivals' },
          { label: 'Just In: Women', to: '/collections/women' },
          { label: 'Just In: Kids', to: '/collections/kids' },
        ],
      },
      {
        title: 'Highlights',
        links: [
          { label: 'Soft cottons', to: '/collections/new-arrivals' },
          { label: 'Occasion arrivals', to: '/collections/occasion' },
          { label: 'Gift-ready sets', to: '/collections/kids' },
        ],
      },
    ],
  },
  {
    label: 'Women',
    to: '/collections/women',
    featured: {
      title: 'Modern softness for everyday and occasion dressing',
      description: 'Elegant co-ords, festive statements, and comfort-led essentials.',
      image: wallTwo.thumb,
    },
    groups: [
      {
        title: 'Categories',
        links: [
          { label: 'Co-ord Sets', to: '/collections/women' },
          { label: 'Kurta Sets', to: '/collections/women' },
          { label: 'Dresses', to: '/collections/women' },
        ],
      },
      {
        title: 'Shop by mood',
        links: [
          { label: 'Everyday Ease', to: '/collections/women' },
          { label: 'Festive Glow', to: '/collections/occasion' },
          { label: 'Soft Luxe', to: '/collections/bestsellers' },
        ],
      },
    ],
  },
  {
    label: 'Kids',
    to: '/collections/kids',
    featured: {
      title: 'Playful pieces with polished detail',
      description: 'Comfort-forward dressing for celebrations, portraits, and daily life.',
      image: wallThree.thumb,
    },
    groups: [
      {
        title: 'Shop by category',
        links: [
          { label: 'Girlswear', to: '/collections/kids' },
          { label: 'Boyswear', to: '/collections/kids' },
          { label: 'Matching Sets', to: '/collections/kids' },
        ],
      },
      {
        title: 'Moments',
        links: [
          { label: 'Birthday Looks', to: '/collections/occasion' },
          { label: 'Festive Family', to: '/collections/occasion' },
          { label: 'Photo Day', to: '/collections/kids' },
        ],
      },
    ],
  },
  {
    label: 'Occasion',
    to: '/collections/occasion',
    featured: {
      title: 'Dress for celebrations with calm confidence',
      description: 'Looks that feel elevated on screen and easy in real life.',
      image: wallFour.thumb,
    },
    groups: [
      {
        title: 'Occasions',
        links: [
          { label: 'Festive', to: '/collections/occasion' },
          { label: 'Wedding Guests', to: '/collections/occasion' },
          { label: 'Family Events', to: '/collections/occasion' },
        ],
      },
      {
        title: 'Popular picks',
        links: [
          { label: 'Statement dresses', to: '/collections/occasion' },
          { label: 'Mini celebration sets', to: '/collections/kids' },
          { label: 'Bestsellers', to: '/collections/bestsellers' },
        ],
      },
    ],
  },
  {
    label: 'Bestsellers',
    to: '/collections/bestsellers',
    featured: {
      title: 'Most-loved pieces, already validating the direction',
      description: 'A clear merchandising rail we can plug directly into backend data later.',
      image: wallFive.thumb,
    },
    groups: [
      {
        title: 'Trending now',
        links: [
          { label: 'Top for women', to: '/collections/bestsellers' },
          { label: 'Top for kids', to: '/collections/bestsellers' },
          { label: 'Gift edit', to: '/collections/bestsellers' },
        ],
      },
      {
        title: 'Browse next',
        links: [
          { label: 'New arrivals', to: '/collections/new-arrivals' },
          { label: 'Occasion', to: '/collections/occasion' },
          { label: 'All collections', to: '/collections/women' },
        ],
      },
    ],
  },
]
