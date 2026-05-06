import { create } from "zustand";

export const useFilterStore = create((set) => ({
  sortBy: "featured",
  activeFilters: {},
  pendingFilters: {},

  setSortBy: (sortBy) => set({ sortBy }),

  setPendingFilter: (filterType, value) =>
    set((state) => {
      const currentValues = state.pendingFilters[filterType] || [];
      const newValues =
        currentValues.includes(value) ?
          currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        pendingFilters: {
          ...state.pendingFilters,
          [filterType]: newValues,
        },
      };
    }),

  applyFilters: () =>
    set((state) => ({
      activeFilters: state.pendingFilters,
    })),

  clearFilters: () => set({ activeFilters: {}, pendingFilters: {} }),
}));
