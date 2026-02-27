import { create } from "zustand";

const clampQty = (n) => Math.max(1, Math.min(99, n));

export const useCartStore = create((set, get) => ({
  itemsById: {}, // { [productId]: { product, qty } }

  addItem: (product, qty = 1) =>
    set((state) => {
      const existing = state.itemsById[product.id];
      const nextQty = clampQty((existing?.qty ?? 0) + qty);
      return {
        itemsById: {
          ...state.itemsById,
          [product.id]: { product, qty: nextQty },
        },
      };
    }),

  removeItem: (productId) =>
    set((state) => {
      const next = { ...state.itemsById };
      delete next[productId];
      return { itemsById: next };
    }),

  setQty: (productId, qty) =>
    set((state) => {
      const existing = state.itemsById[productId];
      if (!existing) return state;
      return {
        itemsById: {
          ...state.itemsById,
          [productId]: { ...existing, qty: clampQty(qty) },
        },
      };
    }),

  clear: () => set({ itemsById: {} }),

  getCount: () =>
    Object.values(get().itemsById).reduce((a, it) => a + it.qty, 0),

  getSubtotal: () =>
    Object.values(get().itemsById).reduce(
      (a, it) => a + it.qty * it.product.price,
      0,
    ),
}));
