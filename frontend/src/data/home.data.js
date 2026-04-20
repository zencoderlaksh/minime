import { mediaLibrary } from './media.data.js'
import heroVideoFile from '../assets/images/1471581_People_Fashion_3840x2160.mov'

const {
  wallOne,
  wallTwo,
  wallThree,
  wallFour,
  wallFive,
  wallSix,
  wallSeven,
  wallEight,
  wallNine,
} = mediaLibrary

export const featuredCollections = [
  {
    id: 'women',
    eyebrow: 'Women',
    title: 'Sun-washed tailoring',
    description: 'Clean silhouettes and occasion-ready softness.',
    image: wallOne.full,
  },
  {
    id: 'kids',
    eyebrow: 'Kids',
    title: 'Playful polished sets',
    description: 'Mini looks with a dressed-up finish.',
    image: wallTwo.full,
  },
  {
    id: 'occasion',
    eyebrow: 'Occasion',
    title: 'Looks for family moments',
    description: 'Event edits that still feel easy to wear.',
    image: wallThree.full,
  },
]

export const bestsellerProducts = [
  {
    id: 1,
    slug: 'rose-garden-dress',
    name: 'Rose Garden Dress',
    category: 'Girls Festive',
    price: 3299,
    badge: 'New Edit',
    label: 'Rose Pink',
    image: wallFour.thumb,
    gallery: [
      { type: 'image', src: wallFour.full },
      { type: 'image', src: wallFive.full },
    ],
  },
  {
    id: 2,
    slug: 'ivory-bloom-co-ord',
    name: 'Ivory Bloom Co-ord',
    category: 'Women Occasion',
    price: 4899,
    badge: 'Best Seller',
    label: 'Ivory Set',
    image: wallFive.thumb,
    gallery: [
      { type: 'image', src: wallFive.full },
      { type: 'image', src: wallSix.full },
    ],
  },
  {
    id: 3,
    slug: 'sunlit-kurta-set',
    name: 'Sunlit Kurta Set',
    category: 'Women Everyday',
    price: 4199,
    badge: 'Soft Cotton',
    label: 'Butter Yellow',
    image: wallSix.thumb,
    gallery: [
      { type: 'image', src: wallSix.full },
      { type: 'image', src: wallSeven.full },
      { type: 'image', src: wallEight.full },
    ],
  },
  {
    id: 4,
    slug: 'mini-celebration-bundle',
    name: 'Mini Celebration Bundle',
    category: 'Kids Occasion',
    price: 3599,
    badge: 'Gift Ready',
    label: 'Celebration Edit',
    image: wallSeven.thumb,
    gallery: [
      { type: 'image', src: wallSeven.full },
      { type: 'image', src: wallEight.full },
    ],
  },
]

export const homeHighlights = ['Women', 'Kids', 'Occasion', 'New arrivals', 'Bestsellers']

export const heroImages = {
  primary: wallOne.full,
  secondary: wallTwo.full,
  accent: wallThree.full,
}

export const heroVideo = {
  src: heroVideoFile,
  poster: wallOne.full,
}

export const storyMoments = [
  {
    title: 'For mothers, daughters, and every soft moment in between.',
    description:
      'MiniMe should feel like a campaign-led fashion house with commerce woven in, not a product grid with decoration pasted on top.',
    image: wallFour.full,
  },
  {
    title: 'Festive enough for occasions, effortless enough for daily wear.',
    description:
      'The final homepage can use motion-led storytelling here with layered copy, scroll reveals, and elevated CTAs.',
    image: wallFive.full,
  },
]

export const trustHighlights = [
  { value: 'Women', label: 'tailored edits' },
  { value: 'Kids', label: 'celebration sets' },
  { value: 'Occasion', label: 'event dressing' },
]

export const communityTiles = [
  {
    id: 'spring-edit',
    eyebrow: 'Spring Edit',
    title: 'Soft tailoring.',
    description: '',
    cta: 'Shop women',
    href: '/collections/women',
    layout: 'feature',
    poster: wallThree.thumb,
    image: wallThree.full,
  },
  {
    id: 'occasion-motion',
    eyebrow: 'Hover Reel',
    title: 'In motion.',
    description: '',
    cta: 'View occasion',
    href: '/collections/occasion',
    layout: 'portrait',
    poster: wallFour.thumb,
    image: wallFour.full,
  },
  {
    id: 'mini-icons',
    eyebrow: 'Mini Icons',
    title: 'Mini sets.',
    description: '',
    cta: 'Shop kids',
    href: '/collections/kids',
    layout: 'standard',
    poster: wallFive.thumb,
    image: wallFive.full,
  },
  {
    id: 'studio-reel',
    eyebrow: 'Studio Reel',
    title: 'Everyday ease.',
    description: '',
    cta: 'Browse new arrivals',
    href: '/collections/new-arrivals',
    layout: 'standard',
    poster: wallSix.thumb,
    image: wallSix.full,
  },
]

export const lookbookCards = [
  {
    id: 'coastal',
    title: 'Coastal light',
    href: '/collections/new-arrivals',
    image: wallSeven.full,
  },
  {
    id: 'family',
    title: 'Family occasion',
    href: '/collections/occasion',
    image: wallEight.full,
  },
  {
    id: 'mini',
    title: 'Mini dressing',
    href: '/collections/kids',
    image: wallNine.full,
  },
  {
    id: 'women',
    title: 'Everyday women',
    href: '/collections/women',
    image: wallOne.full,
  },
]

export const homeQuickLinks = [
  { label: 'Shop Women', href: '/collections/women' },
  { label: 'Shop Kids', href: '/collections/kids' },
  { label: 'Occasion', href: '/collections/occasion' },
  { label: 'New Arrivals', href: '/collections/new-arrivals' },
]
