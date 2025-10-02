"use client";

import { api } from "@nalit/backend/convex/_generated/api";
import { Dithering } from "@paper-design/shaders-react";
import { useQuery } from "convex/react";
import { useTheme } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardPage() {
  const { theme } = useTheme();
  const _privateData = useQuery(api.privateData.get);

  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full px-4">
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
        </header>

        <div className="flex w-full justify-center">
          <Dithering
            colorBack={theme === "dark" ? "#000000" : "#ffffff"}
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
      </SidebarInset>
    </SidebarProvider>
  );
}
