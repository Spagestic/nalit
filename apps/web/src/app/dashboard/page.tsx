"use client";

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { api } from "@nalit/backend/convex/_generated/api";
import { Dithering } from "@paper-design/shaders-react";
import { useQuery } from "convex/react";
import { AudioLines, MicOffIcon, VideoIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DraggableCamera } from "@/components/draggable-camera";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  const { theme } = useTheme();
  const _privateData = useQuery(api.privateData.get);
  const [cameraPosition, setCameraPosition] = useState({ x: 16, y: 16 }); // Start with some padding
  const SidebarWidth = 256;

  const handleDragEnd = (event: DragEndEvent) => {
    const { delta } = event;

    // Calculate new position
    const newX = cameraPosition.x + delta.x;
    const newY = cameraPosition.y + delta.y;

    // Get SidebarInset dimensions (you might need to adjust these based on your layout)
    const sidebarInsetWidth = window.innerWidth - SidebarWidth; // Assuming sidebar is 256px when open
    const sidebarInsetHeight = window.innerHeight;

    // Camera dimensions
    const cameraWidth = 256; // w-64 = 256px
    const cameraHeight = 192; // h-48 = 192px

    // Constrain within SidebarInset bounds
    const constrainedX = Math.max(
      0,
      Math.min(newX, sidebarInsetWidth - cameraWidth)
    );
    const constrainedY = Math.max(
      0,
      Math.min(newY, sidebarInsetHeight - cameraHeight)
    );

    setCameraPosition({
      x: constrainedX,
      y: constrainedY,
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SidebarProvider className="">
        <AppSidebar />
        <SidebarInset className="relative">
          {" "}
          {/* Add relative positioning */}
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
              height={640}
              scale={0.5}
              shape="sphere"
              size={2}
              speed={1}
              type="8x8"
              width={1280}
            />
          </div>
          <div className="flex w-full justify-center gap-6 p-4">
            <Button
              className="h-16 w-16 rounded-full"
              size={"lg"}
              variant={"secondary"}
            >
              <AudioLines className="size-5" />
            </Button>
            <Button
              className="h-16 w-16 rounded-full"
              size={"lg"}
              variant={"secondary"}
            >
              <VideoIcon className="size-5" />
            </Button>
            <Button
              className="h-16 w-16 rounded-full"
              size={"lg"}
              variant={"secondary"}
            >
              <MicOffIcon className="size-5" />
            </Button>
            <Button
              className="h-16 w-16 rounded-full"
              size={"lg"}
              variant={"secondary"}
            >
              <XIcon className="size-5" />
            </Button>
          </div>
          <DraggableCamera position={cameraPosition} />
        </SidebarInset>
      </SidebarProvider>
    </DndContext>
  );
}
