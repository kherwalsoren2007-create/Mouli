import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatCurrencyFromCents } from "@/lib/currency";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link key={p.id} href={`/products/${p.slug}`} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-square bg-neutral-100 relative">
            {p.imageUrl ? (
              <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
            ) : null}
          </div>
          <div className="p-4">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-foreground/70">{formatCurrencyFromCents(p.priceCents)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}