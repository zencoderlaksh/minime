import { create } from "zustand";

export const useUiStore = create((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  isContactDrawerOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  openContactDrawer: () => set({ isContactDrawerOpen: true }),
  closeContactDrawer: () => set({ isContactDrawerOpen: false }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
