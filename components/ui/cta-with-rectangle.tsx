"use client"

import { Badge } from "@/components/ui/badge"
import { LiquidPrimaryButton } from "@/components/ui/liquid-glass-button"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: { text: string }
  title: string
  description?: string
  action: { text: string; href: string }
  withGlow?: boolean
  className?: string
}

export function CTASection({ badge, title, description, action, withGlow = true, className }: CTAProps) {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-7 px-8 py-20 md:py-28 text-center">
        {badge && (
          <div className="opacity-0 animate-fade-in-up delay-100">
            <Badge variant="outline">{badge.text}</Badge>
          </div>
        )}

        <h2
          className="opacity-0 animate-fade-in-up delay-200 text-[#F2E9E4] leading-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h2>

        {description && (
          <p
            className="opacity-0 animate-fade-in-up delay-300 text-[#9A8C98] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.05rem" }}
          >
            {description}
          </p>
        )}

        <div className="opacity-0 animate-fade-in-up delay-500">
          <LiquidPrimaryButton
            size="xl"
            onClick={() => { window.location.href = action.href }}
          >
            {action.text}
          </LiquidPrimaryButton>
        </div>

        {withGlow && (
          <div
            className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl opacity-0 animate-scale-in delay-700"
            style={{
              boxShadow: "0 -16px 128px 0 rgba(201,173,167,0.18) inset, 0 -16px 32px 0 rgba(74,78,105,0.25) inset",
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  )
}
