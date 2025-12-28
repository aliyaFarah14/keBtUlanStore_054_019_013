// src/components/ui/button.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        {
          // Default (pink)
          "bg-pink-500 text-white hover:bg-pink-600": variant === "default",
          // Destructive (red)
          "bg-red-500 text-white hover:bg-red-600": variant === "destructive",
          // Outline
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
          // Secondary (gray)
          "bg-gray-100 text-gray-700 hover:bg-gray-200": variant === "secondary",
          // Ghost
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          // Link
          "text-primary underline-offset-4 hover:underline": variant === "link",
        },
        {
          "h-10 py-2 px-4": size === "default",
          "h-9 px-3": size === "sm",
          "h-11 px-8": size === "lg",
          "h-10 w-10 p-0": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };