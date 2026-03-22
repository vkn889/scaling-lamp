"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

export function InterestFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/60"
            style={{ backdropFilter: "blur(6px)" }}
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[91] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md rounded-3xl p-8 pointer-events-auto"
              style={{
                background: "linear-gradient(145deg, rgba(45,45,74,0.97) 0%, rgba(34,34,59,0.99) 100%)",
                backdropFilter: "blur(32px) saturate(160%)",
                border: "1px solid rgba(201,173,167,0.2)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 0 0.5px rgba(201,173,167,0.1)",
              }}
            >
              {/* Top refraction */}
              <div
                className="absolute top-0 left-10 right-10 h-px rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,173,167,0.4), transparent)",
                }}
                aria-hidden="true"
              />

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 p-2 rounded-full text-[#9A8C98] hover:text-[#F2E9E4] hover:bg-white/8 transition-all duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, #C9ADA7 0%, #9A8C98 100%)",
                }}
              >
                <Heart size={22} className="text-[#22223B]" strokeWidth={2.5} />
              </div>

              {/* Heading */}
              <h2
                className="text-[#F2E9E4] text-2xl font-bold mb-2 leading-tight"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
              >
                Get involved with<br />Fight Cancer Foundation
              </h2>

              <p
                className="text-[#9A8C98] text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Whether you want to volunteer, partner, donate, or spread the word
                — fill out this quick form and we'll be in touch.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://tally.so/r/RGL78P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-syne)",
                    background: "linear-gradient(135deg, #C9ADA7, #9A8C98)",
                    color: "#22223B",
                    boxShadow: "0 4px 16px rgba(201,173,167,0.3)",
                  }}
                  onClick={close}
                >
                  Fill Out Interest Form
                </a>
                <button
                  onClick={close}
                  className="flex-1 py-3 px-6 rounded-full text-sm font-semibold text-[#9A8C98] hover:text-[#F2E9E4] transition-colors duration-200 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-syne)",
                    background: "rgba(74,78,105,0.2)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Maybe Later
                </button>
              </div>

              <p
                className="text-center text-[#4A4E69] text-[10px] mt-5"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Takes less than 2 minutes · No spam
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
