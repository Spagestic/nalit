"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { VideoIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Update the props to accept an onClose function
export function DraggableCamera({
  position,
  onClose,
}: {
  position: { x: number; y: number };
  onClose: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "camera-box",
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div
      className="absolute z-50 h-48 w-64 cursor-move overflow-hidden rounded-lg border-2 border-border bg-secondary shadow-lg"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <VideoIcon className="size-12 text-muted-foreground" />
      </div>
      <div className="absolute top-0 left-0 flex w-full justify-between p-2">
        <div className="self-center text-center text-xs">Name</div>
        <div className="">
          <Button
            className="h-6 w-6 rounded-full"
            onClick={onClose}
            size="icon"
            variant="ghost"
          >
            <XIcon className="size-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
