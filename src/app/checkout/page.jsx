"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const priceId = searchParams.get("priceId");

  useEffect(() => {
    if (priceId) {
      fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.url) {
            window.location.href = data.url;
          } else {
            console.error("Stripe session creation failed:", data);
          }
        })
        .catch((err) => console.error("Fetch error:", err));
    } else {
      console.error("No priceId found in query string");
    }
  }, [priceId]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl">Redirecting to checkout...</h1>
    </div>
  );
}
