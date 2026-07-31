import * as React from "react"
import { Button } from "@/components/ui/button"
import { AnimatedGradientWrapper } from "@/components/ui/animated-gradient-wrapper"
import { Plus } from "lucide-react"

export interface AddBotPrimaryButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode
  showIcon?: boolean
}

export function AddBotPrimaryButton({
  children,
  className,
  showIcon = true,
  size = "xl",
  ...props
}: AddBotPrimaryButtonProps) {
  return (
    <AnimatedGradientWrapper 
      baseBorderOpacity="opacity-100"
      className="inline-flex group/btn hover:-translate-y-px hover:brightness-125 transition-all duration-300"
    >
      <Button
        size={size}
        className={`font-semibold border-0 rounded-[12px] cursor-pointer hover:bg-primary shadow-none ${className || ""}`}
        {...props}
      >
        {showIcon && (
          <Plus className="size-5 transition-transform duration-300 group-hover/btn:rotate-90" />
        )}
        {children}
      </Button>
    </AnimatedGradientWrapper>
  )
}
