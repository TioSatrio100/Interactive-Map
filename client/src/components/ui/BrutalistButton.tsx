import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "green" | "orange" | "white" | "black";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function BrutalistButton({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  ...props
}: BrutalistButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    green: "bg-brutal-green text-black",
    orange: "bg-brutal-orange text-black",
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "font-display font-bold uppercase tracking-wider",
        "brutal-border brutal-shadow brutal-transition brutal-hover brutal-active",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
