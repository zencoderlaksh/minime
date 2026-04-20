import heroVideoFile from '../assets/images/1471581_People_Fashion_3840x2160.mov'
import wallOne from '../assets/images/WallOne.jpg'
import wallTwo from '../assets/images/WallTwo.jpg'
import wallThree from '../assets/images/WallThree.jpg'
import wallFour from '../assets/images/WallFour.jpg'
import wallFive from '../assets/images/WallFive.jpg'
import wallSix from '../assets/images/WallSix.jpg'
import wallSeven from '../assets/images/WallSeven.jpg'
import wallEight from '../assets/images/WallEight.jpg'
import wallNine from '../assets/images/WallNine.jpg'

export const featuredCollections = [
  {
    id: 'women',
    eyebrow: 'Women',
    title: 'Sun-washed tailoring',
    description: 'Clean silhouettes and occasion-ready softness.',
    image: wallOne,
  },
  {
    id: 'kids',
    eyebrow: 'Kids',
    title: 'Playful polished sets',
    description: 'Mini looks with a dressed-up finish.',
    image: wallTwo,
  },
  {
    id: 'occasion',
    eyebrow: 'Occasion',
    title: 'Looks for family moments',
    description: 'Event edits that still feel easy to wear.',
    image: wallThree,
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
    image: wallFour,
    gallery: [
      { type: 'image', src: wallFour },
      { type: 'image', src: wallFive },
      { type: 'video', src: heroVideoFile, poster: wallFour },
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
    image: wallFive,
    gallery: [
      { type: 'image', src: wallFive },
      { type: 'image', src: wallSix },
      { type: 'video', src: heroVideoFile, poster: wallFive },
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
    image: wallSix,
    gallery: [
      { type: 'image', src: wallSix },
      { type: 'image', src: wallSeven },
      { type: 'image', src: wallEight },
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
    image: wallSeven,
    gallery: [
      { type: 'image', src: wallSeven },
      { type: 'image', src: wallEight },
      { type: 'video', src: heroVideoFile, poster: wallSeven },
    ],
  },
]

export const homeHighlights = ['Women', 'Kids', 'Occasion', 'New arrivals', 'Bestsellers']

export const heroImages = {
  primary: wallOne,
  secondary: wallTwo,
  accent: wallThree,
}

export const heroVideo = {
  src: heroVideoFile,
  poster: wallOne,
}

export const storyMoments = [
  {
    title: 'For mothers, daughters, and every soft moment in between.',
    description:
      'MiniMe should feel like a campaign-led fashion house with commerce woven in, not a product grid with decoration pasted on top.',
    image: wallFour,
  },
  {
    title: 'Festive enough for occasions, effortless enough for daily wear.',
    description:
      'The final homepage can use motion-led storytelling here with layered copy, scroll reveals, and elevated CTAs.',
    image: wallFive,
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
    poster: wallThree,
    image: wallThree,
  },
  {
    id: 'occasion-motion',
    eyebrow: 'Hover Reel',
    title: 'In motion.',
    description: '',
    cta: 'View occasion',
    href: '/collections/occasion',
    layout: 'portrait',
    poster: wallFour,
    image: wallFour,
    video: heroVideoFile,
  },
  {
    id: 'mini-icons',
    eyebrow: 'Mini Icons',
    title: 'Mini sets.',
    description: '',
    cta: 'Shop kids',
    href: '/collections/kids',
    layout: 'standard',
    poster: wallFive,
    image: wallFive,
  },
  {
    id: 'studio-reel',
    eyebrow: 'Studio Reel',
    title: 'Everyday ease.',
    description: '',
    cta: 'Browse new arrivals',
    href: '/collections/new-arrivals',
    layout: 'standard',
    poster: wallSix,
    image: wallSix,
    video: heroVideoFile,
  },
]

export const lookbookCards = [
  {
    id: 'coastal',
    title: 'Coastal light',
    href: '/collections/new-arrivals',
    image: wallSeven,
  },
  {
    id: 'family',
    title: 'Family occasion',
    href: '/collections/occasion',
    image: wallEight,
  },
  {
    id: 'mini',
    title: 'Mini dressing',
    href: '/collections/kids',
    image: wallNine,
  },
  {
    id: 'women',
    title: 'Everyday women',
    href: '/collections/women',
    image: wallOne,
  },
]

export const homeQuickLinks = [
  { label: 'Shop Women', href: '/collections/women' },
  { label: 'Shop Kids', href: '/collections/kids' },
  { label: 'Occasion', href: '/collections/occasion' },
  { label: 'New Arrivals', href: '/collections/new-arrivals' },
]
