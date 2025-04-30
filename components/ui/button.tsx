"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background backdrop-blur-morphism shadow-morphism hover:shadow-morphism-hover after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-accent after:transition-all after:duration-300 relative",
  {
    variants: {
      variant: {
        default: "text-white after:opacity-100 hover:after:h-[2px]",
        destructive:
          "text-destructive-foreground after:bg-destructive hover:after:bg-destructive/90",
        outline:
          "backdrop-blur-morphism hover:bg-white/10 after:bg-white/20 hover:after:bg-white/40",
        secondary:
          "text-text-muted hover:text-text-primary after:bg-gradient-morphism hover:after:bg-gradient-morphism-dark",
        ghost: "hover:bg-white/5 after:bg-transparent hover:after:bg-white/10",
        link: "text-primary underline-offset-4 hover:underline after:hidden",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
