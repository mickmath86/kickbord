"use client";

import { useAuth } from "@clerk/nextjs";

export default function Dashboard() {
  const { isSignedIn, userId } = useAuth();

  if (!isSignedIn) return <p>Please log in</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl">Welcome!</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
