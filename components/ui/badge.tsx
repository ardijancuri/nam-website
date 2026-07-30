import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-[5px] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        default: "bg-[var(--violet)] text-white",
        secondary: "bg-[var(--lavender)] text-[var(--ink)]",
        insight: "bg-[var(--blue)] text-[var(--ink)]",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
