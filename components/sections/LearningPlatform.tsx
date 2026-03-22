"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { CANCERS, CancerCategory } from "@/data/cancers";
import { CategoryFilter } from "@/components/learning/CategoryFilter";
import { CancerCard } from "@/components/learning/CancerCard";

const HOW_CANCER_WORKS = [
  {
    title: "What is cancer?",
    body: "Cancer is a disease in which some of the body's cells grow uncontrollably and spread to other parts of the body. It begins when the DNA inside a cell is damaged — by chemicals, radiation, viruses, or random copying errors — and the normal checkpoints that would halt or kill that cell fail.",
  },
  {
    title: "DNA mutations and accumulation",
    body: "A single mutation rarely causes cancer. Over years or decades, a cell accumulates multiple mutations in oncogenes (which accelerate growth) and tumor suppressor genes (which normally apply the brakes). This stepwise accumulation is why cancer risk increases with age.",
  },
  {
    title: "Metastasis: how cancer spreads",
    body: "When cancer cells invade surrounding tissue and enter the bloodstream or lymphatic system, they can travel to distant organs and form new tumors — a process called metastasis. Metastatic cancer is the leading cause of cancer-related death.",
  },
  {
    title: "The immune system's role",
    body: "The immune system continuously surveils for abnormal cells and eliminates them before they become tumors. Cancer cells evolve mechanisms to evade this surveillance — hiding from immune cells, suppressing immune activity, or exploiting 'checkpoint' proteins. Modern immunotherapy works by unblocking these checkpoints.",
  },
];

export function LearningPlatform() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [category, setCategory] = useState<CancerCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return CANCERS.filter((c) => {
      const matchCat = category === "all" || c.category === category;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.fullName.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <section
      id="learn"
      ref={ref}
      className="relative bg-[#22223B] py-28 md:py-36"
      aria-labelledby="learn-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A4E69] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Cancer Learning Platform
          </motion.p>
          <motion.h2
            id="learn-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#F2E9E4] leading-tight mb-6"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Know what you're fighting.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9A8C98] text-base max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A structured, accessible knowledge base covering cancer biology, types, and the realities of treatment. Built for everyone — from the newly diagnosed to the simply curious.
          </motion.p>
        </div>

        {/* How Cancer Works */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 border border-white/10 bg-[#4A4E69]/10 p-6 md:p-8"
        >
          <h3
            className="text-[#C9ADA7] text-sm tracking-[0.2em] uppercase mb-6 font-semibold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            How Cancer Works
          </h3>
          <div className="space-y-2">
            {HOW_CANCER_WORKS.map((item, i) => (
              <div key={i} className="border-b border-white/5 last:border-0">
                <button
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                  aria-controls={`how-panel-${i}`}
                >
                  <span
                    className="text-[#F2E9E4] group-hover:text-[#C9ADA7] transition-colors duration-200 text-base font-semibold"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#9A8C98] flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      id={`how-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-[#9A8C98] text-sm leading-relaxed pb-4"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A8C98]"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search cancers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#4A4E69]/20 border border-white/10 text-[#F2E9E4] placeholder-[#4A4E69] text-sm focus:border-[#C9ADA7]/40 focus:outline-none transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              aria-label="Search cancer types"
            />
          </div>
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>

        {/* Results count */}
        <p
          className="text-[#4A4E69] text-xs mb-8 tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          aria-live="polite"
          aria-atomic="true"
        >
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </p>

        {/* Cancer grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cancer, i) => (
              <CancerCard key={cancer.id} cancer={cancer} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p
              className="text-[#9A8C98] text-lg"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              No results for &ldquo;{query}&rdquo;
            </p>
            <button
              onClick={() => { setQuery(""); setCategory("all"); }}
              className="mt-4 text-[#C9ADA7] text-sm underline underline-offset-4 cursor-pointer hover:text-[#F2E9E4] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Supporting educational content */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <h3
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-10"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Educational Resources
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Myths vs. Facts",
                desc: "Busting the most dangerous misconceptions about cancer.",
              },
              {
                title: "Early Detection",
                desc: "What screenings exist and when you should get them.",
              },
              {
                title: "Understanding a Diagnosis",
                desc: "What staging means and what questions to ask your doctor.",
              },
              {
                title: "The Cost of Cancer",
                desc: "A deep look at the financial devastation cancer leaves behind.",
              },
            ].map((res, i) => (
              <div
                key={i}
                className="border border-white/10 bg-[#4A4E69]/10 p-5 hover:border-[#C9ADA7]/30 transition-colors duration-300 cursor-default"
              >
                <h4
                  className="text-[#F2E9E4] text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {res.title}
                </h4>
                <p
                  className="text-[#9A8C98] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {res.desc}
                </p>
                <p
                  className="text-[#4A4E69] text-xs mt-3 tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
