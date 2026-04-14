import { create } from 'zustand'

const starterItems = [
  { id: 'line-1', name: 'Rose Garden Dress', size: '4-5Y', price: 3299 },
]

export const useCartStore = create((set, get) => ({
  items: starterItems,
  get subtotal() {
    return get().items.reduce((sum, item) => sum + item.price, 0)
  },
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}))
