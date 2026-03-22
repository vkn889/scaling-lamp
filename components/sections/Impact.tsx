"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const PILLARS = [
  {
    stat: "$150K+",
    label: "Average US Treatment Cost",
    desc: "Per patient — before lost income, travel, or ongoing care. Most families aren't ready.",
  },
  {
    stat: "42%",
    label: "Patients Go Into Debt",
    desc: "Nearly half of cancer patients deplete their entire life savings within two years.",
  },
  {
    stat: "#1",
    label: "Cause of Bankruptcy",
    desc: "Medical debt from cancer is the single leading cause of personal bankruptcy in America.",
  },
];

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      id="impact"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2e2d4a 0%, #4A4E69 50%, #3a3855 100%)" }}
      aria-labelledby="impact-heading"
    >
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,173,167,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.35), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            The Reality
          </motion.p>
          <motion.h2
            id="impact-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#F2E9E4] leading-tight mb-5"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            The numbers don't lie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9A8C98] text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            This is what cancer costs in America — not just in lives, but in financial devastation that follows patients long after treatment ends.
          </motion.p>
        </div>

        {/* Stat tiles */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center px-7 py-10 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(201,173,167,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top glow accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.6), transparent)" }}
                aria-hidden="true"
              />
              <p
                className="gradient-text leading-none mb-3"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {p.stat}
              </p>
              <p
                className="text-[#C9ADA7] text-xs tracking-[0.22em] uppercase mb-3 font-semibold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {p.label}
              </p>
              <p
                className="text-[#9A8C98] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founding banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="relative rounded-2xl px-8 py-8 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,173,167,0.08) 0%, rgba(74,78,105,0.15) 50%, rgba(201,173,167,0.06) 100%)",
            border: "1px solid rgba(201,173,167,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,173,167,0.04) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <p
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Founded March 2026
          </p>
          <p
            className="text-[#F2E9E4] font-bold text-lg mb-2"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}
          >
            We're just getting started.
          </p>
          <p
            className="text-[#9A8C98] text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            The Fight Cancer Foundation launched in 2026 with a single goal: make sure no one faces cancer without knowledge. Every resource on this platform is free. Every dollar donated funds education.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-center text-[#4A4E69] text-xs mt-10 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          — Fight. Freedom. —
        </motion.p>
      </div>
    </section>
  );
}
