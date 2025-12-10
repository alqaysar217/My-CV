"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
}

const GlowCard = ({ children, className, fromColor, viaColor, toColor }: GlowCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-transparent bg-card p-6 shadow-lg transition-all duration-300",
        "dark:bg-card/80 dark:backdrop-blur-sm",
        "before:absolute before:-inset-px before:rounded-lg before:border before:border-accent/30 before:transition-all before:duration-300 before:content-['']",
        "hover:border-accent/50 hover:shadow-neon-cyan hover:before:border-accent/50",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
