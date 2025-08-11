import { create } from "zustand";

export type CartItem = {
  productId: string;
  name: string;
  priceCents: number;
  imageUrl?: string | null;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
};

const STORAGE_KEY = "shop_cart_v1";

function loadInitial(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v ? (JSON.parse(v) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export const useCartStore = create<CartState>((set, get) => ({
  items: loadInitial(),
  addItem: (item, quantity = 1) =>
    set((state) => {
      const existing = state.items.find((i) => i.productId === item.productId);
      let next: CartItem[];
      if (existing) {
        next = state.items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        next = [...state.items, { ...item, quantity }];
      }
      if (typeof window !== "undefined")
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return { items: next };
    }),
  removeItem: (productId) =>
    set((state) => {
      const next = state.items.filter((i) => i.productId !== productId);
      if (typeof window !== "undefined")
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return { items: next };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const next = state.items.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      );
      if (typeof window !== "undefined")
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return { items: next };
    }),
  clear: () =>
    set(() => {
      if (typeof window !== "undefined")
        window.localStorage.removeItem(STORAGE_KEY);
      return { items: [] };
    }),
}));