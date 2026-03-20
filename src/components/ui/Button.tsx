"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const variants = {
      primary: "bg-gradient-to-r from-primary to-primary-dark text-white crimson-glow border border-white/20",
      gold: "gold-shimmer text-slate-900 font-bold shadow-xl gold-glow border border-white/40",
      secondary: "neumorphic text-accent font-bold border border-white/40 shadow-xl",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "hover:bg-gray-100 text-gray-700",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-semibold",
      lg: "px-8 py-4 text-lg font-bold",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 800);
      props.onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center justify-center rounded-2xl transition-all disabled:opacity-50 disabled:pointer-events-none overflow-hidden select-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        
        {/* Liquid Fill Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Particle Burst */}
        <AnimatePresence>
          {isClicked && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 1.5, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 0, 
                    scale: 0,
                    x: (Math.random() - 0.5) * 120,
                    y: (Math.random() - 0.5) * 120
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={cn(
                    "absolute left-1/2 top-1/2 w-2 h-2 rounded-full",
                    variant === "gold" ? "bg-amber-400" : "bg-white"
                  )}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
