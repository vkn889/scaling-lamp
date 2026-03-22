"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MissionStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="bg-[#22223B] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(74,78,105,0.18) 0%, rgba(34,34,59,0.6) 100%)",
            border: "1px solid rgba(201,173,167,0.15)",
          }}
        >
          {/* Top refraction */}
          <div
            className="absolute top-0 left-10 right-10 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.35), transparent)" }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — statement */}
            <div>
              <p
                className="text-[#C9ADA7] text-xs tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Our Mission
              </p>
              <blockquote
                className="text-[#F2E9E4] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                "No one should face cancer
                <br />
                <span style={{ color: "#9A8C98" }}>
                  uninformed,
                  <br />
                  unprepared,
                  <br />
                  or alone."
                </span>
              </blockquote>
              <p
                className="text-[#9A8C98] text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Fight Cancer Foundation was built on a simple belief: knowledge is
                the only thing that makes a terrifying diagnosis survivable.
                Everything here is free. Always.
              </p>
            </div>

            {/* Right — pillars */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "+",
                  label: "Educate",
                  desc: "25 cancer types broken down in plain language — causes, symptoms, treatment, survival rates.",
                },
                {
                  icon: "○",
                  label: "Empower",
                  desc: "Arm patients, families, and caregivers with the questions they need to ask before the appointment ends.",
                },
                {
                  icon: "*",
                  label: "Fight",
                  desc: "Advocate for more research funding, better screening access, and cancer literacy in every community.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(74,78,105,0.15)",
                    border: "1px solid rgba(201,173,167,0.08)",
                  }}
                >
                  <span
                    className="text-[#C9ADA7] flex-shrink-0 mt-0.5"
                    style={{ fontSize: "1.1rem", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </span>
                  <div>
                    <p
                      className="text-[#F2E9E4] text-sm font-semibold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {pillar.label}
                    </p>
                    <p
                      className="text-[#9A8C98] text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="mt-10 pt-8 grid grid-cols-3 gap-6 border-t"
            style={{ borderColor: "rgba(201,173,167,0.1)" }}
          >
            {[
              { value: "25", label: "Cancer types covered" },
              { value: "100%", label: "Free — always" },
              { value: "6", label: "Categories organized" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-[#C9ADA7] font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#4A4E69] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
