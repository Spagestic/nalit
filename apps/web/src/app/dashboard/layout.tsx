"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { useState } from "react";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </>
  );
}
