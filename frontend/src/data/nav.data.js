export const navLinks = [
  {
    label: 'New Arrivals',
    to: '/collections/new-arrivals',
    featured: {
      title: 'Freshly curated drops',
      description: 'The latest silhouettes, softer palettes, and easy gifting edits.',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
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
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
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
      image:
        'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
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
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
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
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
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
