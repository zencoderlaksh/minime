import { create } from 'zustand'

export const useWishlistStore = create((set) => ({
  items: [],
  toggleItem: (item) =>
    set((state) => {
      const exists = state.items.some((entry) => entry.id === item.id)
      return {
        items: exists
          ? state.items.filter((entry) => entry.id !== item.id)
          : [...state.items, item],
      }
    }),
}))
