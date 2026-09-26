import { LoaderCircle } from "lucide-react";

export default function Loader({
  label = "Loading...",
  size = 22,
}) {
  return (
    <div
      className="flex items-center justify-center gap-3 text-sound-white"
      role="status"
      aria-live="polite"
    >
      <LoaderCircle
        size={size}
        className="animate-spin text-sound-lime"
        aria-hidden="true"
      />

      <span className="text-sm">
        {label}
      </span>
    </div>
  );
}