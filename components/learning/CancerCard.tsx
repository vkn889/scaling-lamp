"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Cancer, CATEGORY_LABELS } from "@/data/cancers";

interface CancerCardProps {
  cancer: Cancer;
  index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  common: "bg-[#4A4E69]/60 text-[#C9ADA7]",
  childhood: "bg-[#22223B] text-[#9A8C98] border border-[#4A4E69]",
  rare: "bg-[#C9ADA7]/10 text-[#C9ADA7] border border-[#C9ADA7]/20",
  blood: "bg-[#4A4E69]/40 text-[#9A8C98]",
  gynecologic: "bg-[#4A4E69]/40 text-[#9A8C98]",
  "head-neck": "bg-[#4A4E69]/40 text-[#9A8C98]",
};

export function CancerCard({ cancer, index }: CancerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.5), ease: "easeOut" }}
    >
      <Link
        href={`/learn/${cancer.id}`}
        className="group block border border-white/10 hover:border-[#C9ADA7]/30 bg-[#4A4E69]/10 hover:bg-[#4A4E69]/20 p-6 rounded-2xl transition-all duration-300 cursor-pointer h-full hover:shadow-lg hover:shadow-[#C9ADA7]/5"
        aria-label={`Learn about ${cancer.fullName}`}
      >
        <div className="flex items-start justify-between mb-4">
          <span
            className={`text-[0.65rem] px-2.5 py-1 tracking-[0.15em] uppercase font-semibold ${
              CATEGORY_COLORS[cancer.category] ?? "bg-[#4A4E69]/40 text-[#9A8C98]"
            }`}
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {CATEGORY_LABELS[cancer.category]}
          </span>
          <ArrowUpRight
            size={16}
            className="text-[#9A8C98] group-hover:text-[#C9ADA7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
        </div>

        <h3
          className="text-[#F2E9E4] mb-3 group-hover:text-[#C9ADA7] transition-colors duration-200"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {cancer.name}
          {cancer.name !== cancer.fullName && (
            <span className="block text-[#9A8C98] font-normal text-sm mt-0.5" style={{ letterSpacing: 0 }}>
              {cancer.fullName}
            </span>
          )}
        </h3>

        <p
          className="text-[#9A8C98] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {cancer.summary}
        </p>

        {cancer.isRare && (
          <div className="mt-4 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9ADA7]" aria-hidden="true" />
            <span
              className="text-[#C9ADA7] text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Rare
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
