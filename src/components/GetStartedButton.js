"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function GetStartedButton({ priceId }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/checkout?priceId=${priceId}`);
  };

  return (
    <Button
      onClick={handleClick}
   
    >
      Get Started
    </Button>
  );
}
