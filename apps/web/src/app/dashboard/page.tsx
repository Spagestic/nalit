"use client";

import { api } from "@nalit/backend/convex/_generated/api";
import {
  Dithering,
  // LiquidMetal
} from "@paper-design/shaders-react";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { useState } from "react";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import UserMenu from "@/components/user-menu";

export default function DashboardPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const privateData = useQuery(api.privateData.get);

  return (
    <>
      <Authenticated>
        <div className="fe w-full p-6">
          <div className="mb-10 flex w-full items-center justify-between gap-4">
            <h1>Dashboard</h1>
            <p>privateData: {privateData?.message}</p>
            <UserMenu />
          </div>

          <div className="flex w-full justify-center">
            <Dithering
              colorBack="#ffffff"
              colorFront="#00b3ff"
              height={720}
              scale={0.5}
              shape="sphere"
              size={2}
              speed={1}
              type="8x8"
              width={1280}
            />
          </div>

          {/* <div className="flex w-full justify-center">
            <LiquidMetal
              colorBack="#ffffff"
              colorTint="#ffffff"
              contour={1}
              distortion={0.1}
              height={720}
              repetition={4}
              scale={0.5}
              shape="circle"
              shiftBlue={0.3}
              shiftRed={0.3}
              softness={0.3}
              speed={1}
              width={1280}
            />
          </div> */}
        </div>
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
