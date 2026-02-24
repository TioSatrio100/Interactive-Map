import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "green" | "orange" | "purple" | "white" | "black";
}

export function BrutalistBadge({
  className,
  variant = "primary",
  children,
  ...props
}: BrutalistBadgeProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    green: "bg-brutal-green text-black",
    orange: "bg-brutal-orange text-black",
    purple: "bg-brutal-purple text-black",
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 font-display text-xs font-bold uppercase",
        "brutal-border shadow-[2px_2px_0px_0px_#000]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
