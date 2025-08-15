// root/src/app/sign-up/[[...rest]]/page.jsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp signInUrl="/sign-in" routing="path" />
    </div>
  );
}
