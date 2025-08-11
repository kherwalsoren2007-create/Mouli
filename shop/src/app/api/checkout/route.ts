import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData().catch(() => null);
    // Client cart is not sent via form; we query server-side? For demo, create a dummy checkout.
    // In production, send cart JSON to this route.
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const lineItems = [
      // Placeholder; real implementation should parse cart from body
      { price_data: { currency: "usd", product_data: { name: "Order" }, unit_amount: 1000 }, quantity: 1 },
    ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems as any,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    await prisma.order.create({
      data: {
        email: "customer@example.com",
        totalCents: 1000,
        stripeSessionId: session.id,
        status: "PENDING",
      },
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}