import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-150 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // GrowNest primary — gold pill
        default:
          "rounded-full bg-[#D4A017] text-white tracking-[0.5px] shadow-[0_4px_0_rgba(212,160,23,0.40)] hover:bg-[#B49233] active:shadow-[0_1px_0_rgba(212,160,23,0.40)]",
        // Gold gradient pill
        gradient:
          "rounded-full text-white tracking-[0.5px] [background:linear-gradient(135deg,#D4A017,#B49233)] shadow-[0_4px_0_rgba(212,160,23,0.40)] hover:opacity-90 active:shadow-[0_1px_0_rgba(212,160,23,0.40)]",
        // Outlined gold pill
        outline:
          "rounded-full border-[1.5px] border-[#D4A017] bg-transparent text-[#D4A017] hover:bg-[#D4A017]/10",
        // Ghost
        ghost:
          "rounded-full bg-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/5",
        // Dark pill — for use on light backgrounds
        dark:
          "rounded-full bg-[#1A1A1A] text-[#FFF8E1] tracking-[0.5px] hover:bg-[#2A2A2A] shadow-[0_4px_0_rgba(0,0,0,0.20)]",
        // White pill — for use on dark backgrounds
        white:
          "rounded-full bg-white text-[#1A1A1A] tracking-[0.5px] hover:bg-white/90 shadow-[0_4px_0_rgba(0,0,0,0.10)]",
        secondary:
          "rounded-full bg-[#B49233] text-white hover:bg-[#A67F30]",
        destructive:
          "rounded-full bg-destructive text-white hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs:      "h-7 px-4 text-xs",
        sm:      "h-9 px-5 text-sm",
        default: "h-[52px] px-7 text-sm",
        lg:      "h-14 px-10 text-base",
        icon:    "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
