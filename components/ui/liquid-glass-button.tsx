"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidButtonVariants = cva(
  "inline-flex items-center transition-all justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#C9ADA7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#22223B]",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:scale-105 duration-300 transition text-[#F2E9E4]",
        primary:
          "text-[#22223B] hover:scale-[1.03] duration-200",
        outline:
          "border border-white/20 text-[#F2E9E4] hover:border-[#C9ADA7]/50 duration-200",
      },
      size: {
        sm:   "h-8  px-4  text-xs",
        default: "h-10 px-5  text-sm",
        lg:   "h-11 px-7  text-sm",
        xl:   "h-12 px-8  text-base",
        xxl:  "h-14 px-10 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
)

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean
}

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn("relative", liquidButtonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Glass rim — multi-layer inset shadow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.12)",
            "inset 0 1px 1px rgba(255,255,255,0.25)",
            "inset 0 -1px 1px rgba(0,0,0,0.3)",
            "inset 3px 3px 0.5px -3px rgba(255,255,255,0.08)",
            "inset -3px -3px 0.5px -3px rgba(255,255,255,0.85)",
            "inset 0 0 6px 6px rgba(255,255,255,0.06)",
            "0 4px 24px rgba(0,0,0,0.25)",
            "0 0 12px rgba(201,173,167,0.08)",
          ].join(", "),
        }}
        aria-hidden="true"
      />

      {/* SVG backdrop distortion — the liquid glass warp */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none -z-10"
        style={{ backdropFilter: 'blur(8px) url("#liquid-glass-filter") saturate(140%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* SVG filter definition — only rendered once per button but safe to duplicate */}
      <LiquidGlassFilter />
    </Comp>
  )
}

function LiquidGlassFilter() {
  return (
    <svg className="hidden absolute" aria-hidden="true">
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%" y="0%"
          width="100%" height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06 0.06"
            numOctaves="1"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="60"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

// Convenience wrapper with gradient background for primary CTAs
export function LiquidPrimaryButton({
  children,
  className,
  size,
  ...props
}: LiquidButtonProps) {
  return (
    <LiquidButton
      variant="primary"
      size={size}
      className={cn("text-[#22223B] font-semibold", className)}
      style={{
        background: "linear-gradient(135deg, #F2E9E4 0%, #C9ADA7 100%)",
        boxShadow: "0 2px 16px rgba(201,173,167,0.35), 0 1px 0 rgba(255,255,255,0.5) inset",
      }}
      {...props}
    >
      {children}
    </LiquidButton>
  )
}

export function LiquidOutlineButton({
  children,
  className,
  size,
  ...props
}: LiquidButtonProps) {
  return (
    <LiquidButton
      variant="outline"
      size={size}
      className={cn("text-[#F2E9E4]", className)}
      {...props}
    >
      {children}
    </LiquidButton>
  )
}

export { LiquidButton, liquidButtonVariants }
