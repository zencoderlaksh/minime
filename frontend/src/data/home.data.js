import { mediaLibrary } from "./media.data.js";
import heroVideoFile from "../assets/images/1471581_People_Fashion_3840x2160.mov";

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
} = mediaLibrary;

export const featuredCollections = [
  {
    id: "women",
    eyebrow: "Women",
    title: "Sun-washed tailoring",
    description: "Clean silhouettes and occasion-ready softness.",
    image: wallOne.full,
  },
  {
    id: "kids",
    eyebrow: "Kids",
    title: "Playful polished sets",
    description: "Mini looks with a dressed-up finish.",
    image: wallTwo.full,
  },
  {
    id: "occasion",
    eyebrow: "Occasion",
    title: "Looks for family moments",
    description: "Event edits that still feel easy to wear.",
    image: wallThree.full,
  },
];

export const bestsellerProducts = [
  {
    id: 1,
    slug: "rose-garden-dress",
    name: "Rose Garden Dress",
    category: "Girls Festive",
    price: 3299,
    badge: "New Edit",
    label: "Rose Pink",
    image: wallFour.thumb,
    gallery: [
      { type: "image", src: wallFour.full },
      { type: "image", src: wallFive.full },
    ],
  },
  {
    id: 2,
    slug: "ivory-bloom-co-ord",
    name: "Ivory Bloom Co-ord",
    category: "Women Occasion",
    price: 4899,
    badge: "Best Seller",
    label: "Ivory Set",
    image: wallFive.thumb,
    gallery: [
      { type: "image", src: wallFive.full },
      { type: "image", src: wallSix.full },
    ],
  },
  {
    id: 3,
    slug: "sunlit-kurta-set",
    name: "Sunlit Kurta Set",
    category: "Women Everyday",
    price: 4199,
    badge: "Soft Cotton",
    label: "Butter Yellow",
    image: wallSix.thumb,
    gallery: [
      { type: "image", src: wallSix.full },
      { type: "image", src: wallSeven.full },
      { type: "image", src: wallEight.full },
    ],
  },
  {
    id: 4,
    slug: "mini-celebration-bundle",
    name: "Mini Celebration Bundle",
    category: "Kids Occasion",
    price: 3599,
    badge: "Gift Ready",
    label: "Celebration Edit",
    image: wallSeven.thumb,
    gallery: [
      { type: "image", src: wallSeven.full },
      { type: "image", src: wallEight.full },
    ],
  },
];

export const homeHighlights = [
  "Women",
  "Kids",
  "Occasion",
  "New arrivals",
  "Bestsellers",
];

export const heroImages = {
  primary: wallOne.full,
  secondary: wallTwo.full,
  accent: wallThree.full,
};

export const heroVideo = {
  src: heroVideoFile,
  poster: wallOne.full,
};

export const collectionVideoGroups = [
  {
    id: "women",
    title: "Women",
    cards: [
      {
        id: "women-1",
        name: "Satin Slip Dress",
        category: "Women",
        href: "/product/satin-slip-dress",
        poster: wallOne.full,
        video: heroVideoFile,
        price: 3499,
      },
      {
        id: "women-2",
        name: "Summer Shirt Dress",
        category: "Women",
        href: "/product/summer-shirt-dress",
        poster: wallTwo.full,
        video: heroVideoFile,
        price: 3799,
      },
      {
        id: "women-3",
        name: "Pleated Midi Dress",
        category: "Women",
        href: "/product/pleated-midi-dress",
        poster: wallThree.full,
        video: heroVideoFile,
        price: 4199,
      },
    ],
  },
  {
    id: "children",
    title: "Children",
    cards: [
      {
        id: "kids-1",
        name: "Playful Mini Dress",
        category: "Children",
        href: "/product/playful-mini-dress",
        poster: wallFour.full,
        video: heroVideoFile,
        price: 2599,
      },
      {
        id: "kids-2",
        name: "Soft Cotton Set",
        category: "Children",
        href: "/product/soft-cotton-set",
        poster: wallFive.full,
        video: heroVideoFile,
        price: 2899,
      },
      {
        id: "kids-3",
        name: "Storybook Dress",
        category: "Children",
        href: "/product/storybook-dress",
        poster: wallSix.full,
        video: heroVideoFile,
        price: 3199,
      },
    ],
  },
  {
    id: "occasion",
    title: "Occasion",
    cards: [
      {
        id: "occasion-1",
        name: "Sequin Evening Dress",
        category: "Occasion",
        href: "/product/sequin-evening-dress",
        poster: wallSeven.full,
        video: heroVideoFile,
        price: 5199,
      },
      {
        id: "occasion-2",
        name: "Tailored Sheath Dress",
        category: "Occasion",
        href: "/product/tailored-sheath-dress",
        poster: wallEight.full,
        video: heroVideoFile,
        price: 4799,
      },
      {
        id: "occasion-3",
        name: "Satin Wrap Dress",
        category: "Occasion",
        href: "/product/satin-wrap-dress",
        poster: wallNine.full,
        video: heroVideoFile,
        price: 4999,
      },
    ],
  },
];

export const storyMoments = [
  {
    title: "For mothers, daughters, and every soft moment in between.",
    description:
      "MiniMe should feel like a campaign-led fashion house with commerce woven in, not a product grid with decoration pasted on top.",
    image: wallFour.full,
  },
  {
    title: "Festive enough for occasions, effortless enough for daily wear.",
    description:
      "The final homepage can use motion-led storytelling here with layered copy, scroll reveals, and elevated CTAs.",
    image: wallFive.full,
  },
];

export const trustHighlights = [
  { value: "Women", label: "tailored edits" },
  { value: "Kids", label: "celebration sets" },
  { value: "Occasion", label: "event dressing" },
];

export const communityTiles = [
  {
    id: "spring-edit",
    eyebrow: "Spring / Summer 26",
    title: "Soft tailoring for her",
    description: "",
    cta: "Explore women",
    href: "/collections/women",
    layout: "feature",
    poster: wallThree.thumb,
    image: wallThree.full,
  },
  {
    id: "occasion-motion",
    eyebrow: "In Motion",
    title: "The occasion edit",
    description: "",
    cta: "View occasion",
    href: "/collections/occasion",
    layout: "portrait",
    poster: wallFour.thumb,
    image: wallFour.full,
  },
  {
    id: "mini-icons",
    eyebrow: "Mini Icons",
    title: "Playful polished sets",
    description: "",
    cta: "Shop kids",
    href: "/collections/kids",
    layout: "standard",
    poster: wallFive.thumb,
    image: wallFive.full,
  },
  {
    id: "studio-reel",
    eyebrow: "New Arrivals",
    title: "Everyday ease",
    description: "",
    cta: "Browse now",
    href: "/collections/new-arrivals",
    layout: "standard",
    poster: wallSix.thumb,
    image: wallSix.full,
  },
];

export const lookbookCards = [
  {
    id: "coastal",
    title: "Coastal light",
    href: "/collections/new-arrivals",
    image: wallSeven.full,
  },
  {
    id: "family",
    title: "Family occasion",
    href: "/collections/occasion",
    image: wallEight.full,
  },
  {
    id: "mini",
    title: "Mini dressing",
    href: "/collections/kids",
    image: wallNine.full,
  },
  {
    id: "women",
    title: "Everyday women",
    href: "/collections/women",
    image: wallOne.full,
  },
];

export const collectionGalleryItems = [
  {
    id: "knitwear",
    title: "Knitwear",
    description: "Soft staples for layering.",
    href: "/collections/knitwear",
    image: wallOne.full,
  },
  {
    id: "occasionwear",
    title: "Occasionwear",
    description: "Polished edits for every event.",
    href: "/collections/occasion",
    image: wallTwo.full,
  },
  {
    id: "skirts",
    title: "Skirts",
    description: "Flowing shapes and modern silhouettes.",
    href: "/collections/skirts",
    image: wallThree.full,
  },
  {
    id: "denim",
    title: "Denim",
    description: "Everyday denim dressing.",
    href: "/collections/denim",
    image: wallFour.full,
  },
];

export const galleryCards = [
  {
    id: "gallery-1",
    title: "Weekend with the kids",
    category: "Children",
    cta: "Shop now",
    href: "/collections/kids",
    image: wallTwo.full,
    variant: "large",
  },
  {
    id: "gallery-2",
    title: "Soft tailoring for her",
    category: "Women",
    cta: "Browse edit",
    href: "/collections/women",
    image: wallOne.full,
    variant: "wide",
  },
  {
    id: "gallery-3",
    title: "Occasion-ready prints",
    category: "Occasion",
    cta: "View looks",
    href: "/collections/occasion",
    image: wallThree.full,
  },
  {
    id: "gallery-4",
    title: "Playful polished sets",
    category: "Children",
    cta: "Shop kids",
    href: "/collections/kids",
    image: wallFour.full,
  },
  {
    id: "gallery-5",
    title: "Effortless dresses",
    category: "Women",
    cta: "Explore women",
    href: "/collections/women",
    image: wallFive.full,
  },
  {
    id: "gallery-6",
    title: "Seasonal staples",
    category: "New arrivals",
    cta: "See more",
    href: "/collections/new-arrivals",
    image: wallSix.full,
  },
];

export const homeQuickLinks = [
  { label: "Shop Women", href: "/collections/women" },
  { label: "Shop Kids", href: "/collections/kids" },
  { label: "Occasion", href: "/collections/occasion" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
];
