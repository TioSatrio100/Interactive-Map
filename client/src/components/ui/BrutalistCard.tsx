import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "primary" | "secondary" | "accent" | "green" | "orange";
  hoverable?: boolean;
}

export function BrutalistCard({
  className,
  variant = "white",
  hoverable = false,
  children,
  ...props
}: BrutalistCardProps) {
  const variants = {
    white: "bg-white text-black",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    green: "bg-brutal-green text-black",
    orange: "bg-brutal-orange text-black",
  };

  return (
    <div
      className={cn(
        "brutal-border brutal-shadow brutal-transition",
        variants[variant],
        hoverable ? "brutal-hover cursor-pointer" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
