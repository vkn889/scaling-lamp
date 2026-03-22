"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiquidPrimaryButton } from "@/components/ui/liquid-glass-button";

const stats = [
  {
    number: "$150K+",
    label: "Average treatment cost",
    context: "Per patient in the US — before lost income, travel, and ongoing care.",
  },
  {
    number: "42%",
    label: "Patients go into debt",
    context: "Nearly half of cancer patients deplete their entire life savings within two years.",
  },
  {
    number: "#1",
    label: "Cause of bankruptcy",
    context: "Medical debt from cancer is the leading cause of personal bankruptcy in America.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#22223B] py-28 md:py-36 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A4E69] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          The Problem
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: stats */}
          <div className="space-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="pl-8 relative"
              style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, #C9ADA7, #9A8C98) 1" }}
              >
                <p
                  className="text-[#F2E9E4] leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-[#C9ADA7] font-semibold text-sm uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-[#9A8C98] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {stat.context}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: editorial copy */}
          <div className="space-y-8">
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[#F2E9E4] leading-tight"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Cancer doesn't care about your savings account.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="space-y-5 text-[#9A8C98] leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem" }}
            >
              <p>
                The diagnosis arrives, and with it comes a financial avalanche. Surgery. Chemotherapy. Radiation. Specialist visits. Travel. Lost income. Months — sometimes years — of bills that stack up while the patient tries to focus on survival.
              </p>
              <p>
                The cycle is devastating: diagnosis triggers debt, debt limits care options, and diminished care leads to worse outcomes. This is not a rounding error. This is the system working exactly as it's designed.
              </p>
              <p>
                Worse still — most people know almost nothing about cancer until it walks through their front door. They don't know the difference between staging and grading. They don't know what questions to ask. They don't know what they can afford to fight for. They are blindsided at the worst possible moment.
              </p>
              <p>
                That's what we're here to fix.
              </p>
            </motion.div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="border border-[#C9ADA7]/30 bg-[#4A4E69]/20 p-6 mt-4"
            >
              <p
                className="text-[#C9ADA7] text-base leading-relaxed italic mb-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                "Fight Cancer Foundation was built on two words:{" "}
                <strong className="text-[#F2E9E4] not-italic">Fight</strong> and{" "}
                <strong className="text-[#F2E9E4] not-italic">Freedom</strong>. Fight because cancer demands it. Freedom because knowledge is the only path out of fear. That's the whole mission."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.56 }}
            >
              <LiquidPrimaryButton
                size="lg"
                onClick={() => { document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Start Learning
                <ArrowRight size={15} aria-hidden="true" />
              </LiquidPrimaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
