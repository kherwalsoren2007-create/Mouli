import Link from "next/link";
import { ReactNode } from "react";
import "../globals.css";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold">My Shop</Link>
          <nav className="flex items-center gap-4">
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/cart" className="hover:underline">Cart</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">{children}</main>
      <footer className="border-t text-sm text-foreground/70">
        <div className="max-w-5xl mx-auto px-4 py-6">© {new Date().getFullYear()} My Shop</div>
      </footer>
    </div>
  );
}