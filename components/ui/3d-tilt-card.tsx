"use client"

import React, { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { CATEGORY_LABELS, type CancerCategory } from "@/data/cancers"

interface TiltCardProps {
  id: string
  name: string
  fullName: string
  category: CancerCategory
  summary: string
  imageUrl: string
}

export function TiltCard({ id, name, fullName, category, summary, imageUrl }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    setTilt({ x: ((y - cy) / cy) * -12, y: ((x - cx) / cx) * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  const shadowX = tilt.y * 0.6
  const shadowY = tilt.x * 0.6
  const shadowBlur = 48 + Math.abs(tilt.x + tilt.y) * 0.6

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="w-72 h-[22rem] cursor-pointer overflow-hidden rounded-2xl relative flex-shrink-0"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${hovered ? 1.03 : 1}, ${hovered ? 1.03 : 1}, 1)`,
        boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,173,167,${hovered ? 0.25 : 0.1})`,
        transition: "transform 0.18s ease-out, box-shadow 0.18s ease-out",
      }}
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.35) saturate(0.6)" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(34,34,59,0.3) 0%, rgba(34,34,59,0.85) 60%, rgba(34,34,59,0.97) 100%)" }}
      />

      {/* Top-edge glass highlight */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Category badge */}
        <div>
          <span
            className="text-[0.6rem] px-2.5 py-1 rounded-full tracking-[0.15em] uppercase"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              background: "rgba(201,173,167,0.15)",
              border: "1px solid rgba(201,173,167,0.25)",
              color: "#C9ADA7",
            }}
          >
            {CATEGORY_LABELS[category]}
          </span>
        </div>

        {/* Name + summary */}
        <div>
          <p
            className="text-[#F2E9E4] font-bold mb-1"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "1.35rem",
              letterSpacing: "-0.015em",
            }}
          >
            {name}
          </p>
          {name !== fullName && (
            <p className="text-[#9A8C98] text-xs mb-3" style={{ fontFamily: "var(--font-syne)" }}>
              {fullName}
            </p>
          )}
          <p
            className="text-[#9A8C98] text-sm leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {summary.slice(0, 90)}{summary.length > 90 ? "\u2026" : ""}
          </p>

          <Link
            href={`/learn/${id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9ADA7] hover:text-[#F2E9E4] transition-colors duration-200 group"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Read More
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
