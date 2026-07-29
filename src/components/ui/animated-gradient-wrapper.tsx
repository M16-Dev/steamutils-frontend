import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedGradientWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** The CSS class defining the gradient */
  gradientClass?: string
  /** Global opacity of the glow when hovered */
  baseGlowOpacity?: string
  /** Global opacity of the border when hovered */
  baseBorderOpacity?: string
}

export function AnimatedGradientWrapper({
  children,
  className,
  gradientClass = "bg-conic-holographic",
  baseGlowOpacity = "opacity-0 group-hover:opacity-40", 
  baseBorderOpacity = "opacity-0 group-hover:opacity-75", 
  ...props
}: AnimatedGradientWrapperProps) {
  
  const spinningGradient = (
    <span className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-[spin_6s_linear_infinite]", gradientClass)} />
  );

  return (
    <div
      className={cn("group relative flex rounded-xl bg-border p-0.5 transition-all duration-300", className)}
      {...props}
    >
      {/* Glow Layer */}
      <div className={cn("absolute inset-0 z-0 blur-md transition-opacity duration-500", baseGlowOpacity)}>
          <div className="absolute inset-0 overflow-hidden rounded-xl">
              {spinningGradient}
          </div>
      </div>
      
      {/* Border Layer */}
      <div className={cn("absolute inset-0 z-0 overflow-hidden rounded-xl transition-opacity duration-500", baseBorderOpacity)}>
          {spinningGradient}
      </div>

      {/* Children (Card, Button, etc.) */}
      <div className="relative z-10 flex-1 w-full h-full rounded-[12px] overflow-hidden">
        {children}
      </div>
    </div>
  )
}
