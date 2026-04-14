import { create } from 'zustand'

export const useFilterStore = create((set) => ({
  sortBy: 'featured',
  activeFilters: {},
  setSortBy: (sortBy) => set({ sortBy }),
  setFilter: (key, value) =>
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [key]: value,
      },
    })),
}))
