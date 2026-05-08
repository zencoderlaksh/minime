import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  get subtotal() {
    return get().items.reduce(
      (sum, item) => sum + item.price * (item.quantity ?? 1),
      0,
    );
  },
  addItem: (item) =>
    set((state) => {
      const existingIndex = state.items.findIndex((i) => i.id === item.id);

      // If same product+size already exists, don't create a second line.
      if (existingIndex !== -1) {
        const nextItems = [...state.items];
        nextItems[existingIndex] = {
          ...nextItems[existingIndex],
          quantity: (nextItems[existingIndex].quantity ?? 1) + 1,
        };
        return { items: nextItems };
      }

      return {
        items: [
          ...state.items,
          {
            ...item,
            quantity: item.quantity ?? 1,
          },
        ],
      };
    }),
}));
