"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <Authenticated>
        {/* Sidebar logic moved from call/page.tsx */}
        <SidebarProvider className="">
          <AppSidebar />
          <SidebarInset className="relative">{children}</SidebarInset>
        </SidebarProvider>
      </Authenticated>
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
