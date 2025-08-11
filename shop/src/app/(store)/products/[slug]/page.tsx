import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatCurrencyFromCents } from "@/lib/currency";
import { AddToCartButton } from "./ui";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });
  if (!product) return notFound();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="aspect-square bg-neutral-100 relative rounded-lg overflow-hidden">
        {product.imageUrl ? (
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        ) : null}
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div>{formatCurrencyFromCents(product.priceCents)}</div>
        <p className="text-foreground/80">{product.description}</p>
        <AddToCartButton
          productId={product.id}
          name={product.name}
          priceCents={product.priceCents}
          imageUrl={product.imageUrl}
        />
      </div>
    </div>
  );
}