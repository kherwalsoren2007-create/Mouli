import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_") {
      await prisma.order.create({
        data: {
          email: "demo@example.com",
          totalCents: 1000,
          stripeSessionId: `demo_${Date.now()}`,
          status: "PAID",
        },
      });
      return NextResponse.redirect(`${origin}/success`, { status: 303 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-12-18.acacia" });

    const lineItems = [
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