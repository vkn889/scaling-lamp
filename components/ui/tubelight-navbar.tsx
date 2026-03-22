"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface TubelightNavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNavBar({ items, className }: TubelightNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Sync active tab with scroll position
  useEffect(() => {
    // Extract fragment selector from URL (e.g. "/#about" → "#about", "/learn" → null)
    const getSelector = (url: string): string | null => {
      if (url.startsWith("#")) return url;
      const hash = url.indexOf("#");
      return hash >= 0 ? url.slice(hash) : null;
    };

    const sections = items.map(item => ({
      name: item.name,
      el: (getSelector(item.url) ? document.querySelector(getSelector(item.url)!) : null) as HTMLElement | null,
    }))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const found = sections.find(s => s.el === entry.target)
            if (found) setActiveTab(found.name)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach(s => { if (s.el) observer.observe(s.el) })
    return () => observer.disconnect()
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4 w-[calc(100%-2rem)] max-w-sm md:hidden",
        className
      )}
    >
      <div
        className="flex items-center justify-between px-2 py-1.5 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.15) inset",
        }}
      >
        {/* Top refraction */}
        <div
          className="absolute top-0 left-8 right-8 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), rgba(201,173,167,0.4), rgba(255,255,255,0.35), transparent)" }}
          aria-hidden="true"
        />

        {items.map(item => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              aria-label={item.name}
              className="relative flex-1 flex flex-col items-center justify-center py-2 cursor-pointer"
            >
              <span
                className="relative z-10 transition-colors duration-200"
                style={{ color: isActive ? "#C9ADA7" : "#9A8C98" }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              </span>
              <span
                className="relative z-10 text-[0.6rem] mt-0.5 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 600,
                  color: isActive ? "#C9ADA7" : "#4A4E69",
                }}
              >
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 rounded-full -z-0"
                  style={{ background: "rgba(201,173,167,0.08)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {/* The lamp glow above */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-t-full" style={{ background: "#C9ADA7" }}>
                    <div className="absolute w-10 h-5 rounded-full blur-md -top-2 -left-2" style={{ background: "rgba(201,173,167,0.3)" }} />
                    <div className="absolute w-6 h-5 rounded-full blur-md -top-1" style={{ background: "rgba(201,173,167,0.25)" }} />
                    <div className="absolute w-3 h-3 rounded-full blur-sm top-0 left-1.5" style={{ background: "rgba(201,173,167,0.4)" }} />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
