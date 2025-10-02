import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { VideoIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DraggableCamera({
  position,
}: {
  position: { x: number; y: number };
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
      <div className="absolute top-2 right-2">
        <Button className="h-6 w-6 rounded-full" size="icon" variant="ghost">
          <XIcon className="size-3" />
        </Button>
      </div>
    </div>
  );
}
