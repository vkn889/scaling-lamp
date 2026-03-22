"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidPrimaryButton, LiquidOutlineButton } from "@/components/ui/liquid-glass-button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* WebGL shader — fills the entire hero */}
      <div className="absolute inset-0 z-0">
        <WebGLShader className="w-full h-full" />
      </div>

      {/* Vignette overlay — darkens edges, keeps content readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 85% 75% at 30% 50%, transparent 0%, rgba(34,34,59,0.45) 60%, rgba(34,34,59,0.85) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #22223B)" }}
        aria-hidden="true"
      />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 py-32 lg:py-0 min-h-screen">

        {/* LEFT — text */}
        <div className="flex-1 flex flex-col items-start lg:pr-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#9A8C98] text-[0.65rem] tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            F* Cancer Foundation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32 }}
            className="text-[#F2E9E4] leading-[0.93] mb-7"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            We are done
            <br />
            being{" "}
            <span className="gradient-text">polite</span>
            <br />
            about cancer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#9A8C98] text-base max-w-md mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We educate the world about cancer — the disease, the cost, and the fight — so no one faces it uninformed, unprepared, or alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.64 }}
            className="flex flex-wrap items-center gap-3"
          >
            <LiquidPrimaryButton
              size="lg"
              onClick={() => { document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Start Learning
            </LiquidPrimaryButton>

            <LiquidOutlineButton
              size="lg"
              onClick={() => { document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Get Involved
            </LiquidOutlineButton>

            <a
              href="https://tally.so/r/RGL78P"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-syne)",
                background: "linear-gradient(135deg, rgba(201,173,167,0.15), rgba(74,78,105,0.2))",
                border: "1px solid rgba(201,173,167,0.3)",
                color: "#C9ADA7",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Interest Form
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 text-[#4A4E69] text-[0.6rem] tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            aria-label="Fight. Freedom."
          >
            Fight.&nbsp;&nbsp;Freedom.
          </motion.p>
        </div>

        {/* RIGHT — giant spinning asterisk */}
        <motion.div
          initial={{ opacity: 0, scale: 0.55, rotate: -40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex items-center justify-center lg:w-[52%]"
          aria-hidden="true"
        >
          <img
            src="/asterisk.svg"
            alt=""
            aria-hidden="true"
            className="spin-slow select-none"
            style={{
              width: "clamp(12rem, 36vw, 32rem)",
              height: "clamp(12rem, 36vw, 32rem)",
              opacity: 0.85,
              filter: "drop-shadow(0 0 40px rgba(201,173,167,0.25))",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-10 left-8 z-10 text-[#4A4E69]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
