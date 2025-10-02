"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// The props remain the same
export function DraggableCamera({
  name = "Camera",
  position,
  onClose,
}: {
  name?: string;
  position: { x: number; y: number };
  onClose: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "camera-box",
  });

  // 1. Create a ref for the <video> element
  const videoRef = useRef<HTMLVideoElement>(null);

  const style = {
    transform: CSS.Translate.toString(transform),
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  // 2. Use useEffect to handle the camera stream
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        // Request access to the user's camera
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        // If the video ref is available, set its source to the stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        // biome-ignore lint/suspicious/noConsole: minor
        console.error("Error accessing camera:", error);
        // Handle errors (e.g., user denies permission)
      }
    };

    startCamera();

    // 3. Cleanup function to stop the camera when the component unmounts
    return () => {
      if (stream) {
        // Stop all tracks in the stream
        for (const track of stream.getTracks()) {
          track.stop();
        }
      }
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <div
      className="absolute z-50 h-48 w-64 cursor-move overflow-hidden rounded-lg border-2 border-border bg-black shadow-lg"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {/* 4. Replace the placeholder with a <video> element */}
      <video
        autoPlay
        className="h-full w-full object-cover"
        muted
        playsInline
        ref={videoRef} // Muting is often required for autoplay to work in browsers
      />

      {/* The UI for name and close button remains the same */}
      <div className="absolute top-0 left-0 flex w-full justify-between bg-gradient-to-b from-black/50 to-transparent p-2">
        <div className="self-center font-semibold text-white text-xs drop-shadow-md">
          {name}
        </div>

        <Button
          className="h-6 w-6 rounded-full text-white hover:bg-white/20 hover:text-white"
          data-no-dnd="true"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <XIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
