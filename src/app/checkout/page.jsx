"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function CheckoutContent() {
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
          if (data.url) window.location.href = data.url;
        });
    }
  }, [priceId]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl">Redirecting to checkout...</h1>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><h1 className="text-xl">Loading checkout...</h1></div>}>
      <CheckoutContent />
    </Suspense>
  );
}
