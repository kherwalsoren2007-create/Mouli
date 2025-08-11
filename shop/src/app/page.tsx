import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-16 text-center space-y-6">
      <h1 className="text-3xl font-semibold">Welcome to My Shop</h1>
      <p className="text-foreground/70">Discover our latest products and checkout securely.</p>
      <div>
        <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-black/90">Browse products</Link>
      </div>
    </div>
  );
}
