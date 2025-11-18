import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define animation variants
const animationVariants = {
  scale: {
    whileHover: { scale: 1.06 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  lift: {
    whileHover: { scale: 1.07, y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" },
    whileTap: { scale: 0.97, y: 0, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  subtle: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "tween", duration: 0.15 },
  },
};

const MotionButton = motion.create("button");

const Button = forwardRef(
  ({ className, variant, size, asChild, animation = "scale", ...props }, ref) => {
    const Comp = asChild ? Slot : MotionButton;
    const anim = animationVariants[animation] || animationVariants.scale;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={anim.whileHover}
        whileTap={anim.whileTap}
        transition={anim.transition}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
