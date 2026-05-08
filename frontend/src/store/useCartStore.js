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

  updateQuantity: (id, nextQty) =>
    set((state) => {
      const qty = Number(nextQty);
      if (Number.isNaN(qty)) return state;

      // If qty goes to 0 or below, delete the item.
      if (qty <= 0) {
        return { items: state.items.filter((i) => i.id !== id) };
      }

      return {
        items: state.items.map((i) =>
          i.id === id ?
            {
              ...i,
              quantity: qty,
            }
          : i,
        ),
      };
    }),

  incrementQuantity: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ?
          {
            ...i,
            quantity: (i.quantity ?? 1) + 1,
          }
        : i,
      ),
    })),

  decrementQuantity: (id) =>
    set((state) => {
      const next = state.items
        .map((i) => {
          if (i.id !== id) return i;
          return {
            ...i,
            quantity: (i.quantity ?? 1) - 1,
          };
        })
        .filter((i) => i.quantity > 0);

      return { items: next };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clearCart: () => set({ items: [] }),
}));
