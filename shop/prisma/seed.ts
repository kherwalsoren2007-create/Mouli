import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Classic Tee",
      slug: "classic-tee",
      description: "100% cotton unisex tee",
      imageUrl: "/products/classic-tee.jpg",
      priceCents: 2500,
    },
    {
      name: "Hoodie",
      slug: "hoodie",
      description: "Cozy fleece hoodie",
      imageUrl: "/products/hoodie.jpg",
      priceCents: 6900,
    },
    {
      name: "Cap",
      slug: "cap",
      description: "Adjustable baseball cap",
      imageUrl: "/products/cap.jpg",
      priceCents: 1800,
    },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  console.log("Seeded products: ", products.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });