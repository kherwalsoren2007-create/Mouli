"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatCurrencyFromCents } from "@/lib/currency";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);

  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty. <Link href="/products" className="underline">Shop now</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.productId} className="flex items-center justify-between border rounded-md p-4">
              <div>
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-foreground/70">{formatCurrencyFromCents(i.priceCents)} × {i.quantity}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-right font-medium">{formatCurrencyFromCents(i.priceCents * i.quantity)}</div>
                <button className="text-sm underline" onClick={() => removeItem(i.productId)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="font-medium">Subtotal</div>
            <div className="font-medium">{formatCurrencyFromCents(subtotal)}</div>
          </div>
          <form action="/api/checkout" method="post">
            <button className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-black/90">
              Checkout
            </button>
          </form>
        </div>
      )}
    </div>
  );
}