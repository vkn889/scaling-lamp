"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TiltCard } from "@/components/ui/3d-tilt-card"
import { CANCERS } from "@/data/cancers"

const SPOTLIGHT_CANCERS = [
  { id: "dipg",       imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&auto=format&fit=crop" },
  { id: "dsrct",      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80&auto=format&fit=crop" },
  { id: "angiosarcoma", imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format&fit=crop" },
]

export function RareSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-12%" })

  const spotlightData = SPOTLIGHT_CANCERS.map(s => {
    const cancer = CANCERS.find(c => c.id === s.id)!
    return { ...cancer, imageUrl: s.imageUrl }
  })

  return (
    <section
      id="rare-spotlight"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#22223B] overflow-hidden"
      aria-labelledby="rare-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.2), transparent)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Rare Cancer Spotlight
          </motion.p>
          <motion.h2
            id="rare-heading"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#F2E9E4] leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            The cancers no one talks about.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9A8C98] text-base max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Rare cancers are nearly invisible in public discourse. Patients and families are left without accessible information. We&apos;re changing that.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {spotlightData.map((cancer, i) => (
            <motion.div
              key={cancer.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
            >
              <TiltCard
                id={cancer.id}
                name={cancer.name}
                fullName={cancer.fullName}
                category={cancer.category}
                summary={cancer.summary}
                imageUrl={cancer.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
