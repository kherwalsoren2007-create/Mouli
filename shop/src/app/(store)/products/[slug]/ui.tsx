"use client";

import { useCartStore } from "@/store/cart";

export function AddToCartButton(props: {
  productId: string;
  name: string;
  priceCents: number;
  imageUrl?: string | null;
}) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <button
      className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-black/90"
      onClick={() => addItem({
        productId: props.productId,
        name: props.name,
        priceCents: props.priceCents,
        imageUrl: props.imageUrl ?? undefined,
      })}
    >
      Add to cart
    </button>
  );
}