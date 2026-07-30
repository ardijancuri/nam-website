import * as React from "react";

import { cn } from "@/lib/utils";

function Progress({
  className,
  indicatorClassName,
  value = 0,
  ...props
}: React.ComponentProps<"div"> & {
  indicatorClassName?: string;
  value?: number;
}) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden bg-[var(--lavender)]",
        className,
      )}
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        className={cn(
          "h-full bg-[var(--violet)] transition-[width] duration-700 ease-out",
          indicatorClassName,
        )}
        style={{ width: `${normalizedValue}%` }}
      />
    </div>
  );
}

export { Progress };
