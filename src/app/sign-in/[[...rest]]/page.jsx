// root/src/app/sign-in/[[...rest]]/page.jsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn signUpUrl="/sign-up" routing="path" />
    </div>
  );
}
