"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { MissionStatement } from "@/components/sections/MissionStatement";
import { CancerTimeline } from "@/components/sections/CancerTimeline";
import { AnimatedFolder, FolderProject } from "@/components/ui/3d-folder";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  CANCERS,
  CancerCategory,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
} from "@/data/cancers";

// Generic gradient colors per category (used as card backgrounds)
const CATEGORY_CARD_COLORS: Record<CancerCategory, string[]> = {
  common: [
    "linear-gradient(135deg, #C9ADA7, #9A8C98)",
    "linear-gradient(135deg, #b8998f, #8a7d84)",
    "linear-gradient(135deg, #d4b8b0, #a89da4)",
    "linear-gradient(135deg, #c4a89e, #968b92)",
    "linear-gradient(135deg, #bba099, #8d828a)",
    "linear-gradient(135deg, #cdb2aa, #9c9099)",
  ],
  childhood: [
    "linear-gradient(135deg, #9A8C98, #6b6379)",
    "linear-gradient(135deg, #8a7d87, #5e5569)",
    "linear-gradient(135deg, #a89ca6, #79708a)",
    "linear-gradient(135deg, #937e91, #645a7a)",
    "linear-gradient(135deg, #a08f9e, #706582)",
    "linear-gradient(135deg, #b09db0, #7b6f8c)",
  ],
  rare: [
    "linear-gradient(135deg, #7b3f5e, #4d2040)",
    "linear-gradient(135deg, #8a4a6e, #5a2a4e)",
    "linear-gradient(135deg, #6e3452, #3f1a36)",
    "linear-gradient(135deg, #7f4462, #4e2244)",
    "linear-gradient(135deg, #9b4f6f, #6b2f4f)",
    "linear-gradient(135deg, #7a3d5c, #4b1f40)",
    "linear-gradient(135deg, #883c66, #562044)",
  ],
  blood: [
    "linear-gradient(135deg, #4A4E69, #2d3050)",
    "linear-gradient(135deg, #535878, #303458)",
  ],
  gynecologic: [
    "linear-gradient(135deg, #b5917a, #8a6457)",
    "linear-gradient(135deg, #c4a08a, #966e61)",
  ],
  "head-neck": [
    "linear-gradient(135deg, #6e8fa8, #4a6a82)",
    "linear-gradient(135deg, #7a9eb8, #557892)",
  ],
};

// Folder face gradient per category
const FOLDER_GRADIENTS: Record<CancerCategory, string> = {
  common: "linear-gradient(135deg, #C9ADA7, #9A8C98)",
  childhood: "linear-gradient(135deg, #9A8C98, #6b6379)",
  rare: "linear-gradient(135deg, #7b3f5e, #4d2040)",
  blood: "linear-gradient(135deg, #4A4E69, #22223B)",
  gynecologic: "linear-gradient(135deg, #b5917a, #8a6457)",
  "head-neck": "linear-gradient(135deg, #6e8fa8, #4a6a82)",
};

export default function LearnPage() {
  const router = useRouter();

  const categorizedProjects = useMemo(() => {
    return CATEGORY_ORDER.map((cat) => {
      const colors = CATEGORY_CARD_COLORS[cat];
      const projects: FolderProject[] = CANCERS.filter(
        (c) => c.category === cat
      ).map((c, i) => ({
        id: c.id,
        title: c.name,
        color: colors[i % colors.length],
        url: `/learn/${c.id}`,
      }));
      return { category: cat, projects };
    });
  }, []);

  return (
    <>
      <Navigation />
      <main className="bg-[#22223B] min-h-screen pt-28 pb-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Learning Hub
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#F2E9E4] leading-tight mb-4"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Every diagnosis,<br />explained.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#9A8C98] text-base max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              25 types of cancer organized by category. Open a folder to explore
              each type — click any card to read the full breakdown.
            </motion.p>
          </div>

          {/* Browse label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-12"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Browse by category
          </motion.p>

          {/* Folder grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {categorizedProjects.map(({ category, projects }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="flex flex-col items-center"
              >
                <p
                  className="text-[#9A8C98] text-xs tracking-[0.2em] uppercase mb-6 self-start"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {CATEGORY_LABELS[category]}
                  <span className="ml-2 text-[#4A4E69]">({projects.length})</span>
                </p>

                <div className="relative rounded-[1.5rem] p-1">
                  <GlowingEffect
                    spread={40}
                    glow={false}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <AnimatedFolder
                    title={CATEGORY_LABELS[category]}
                    projects={projects}
                    gradient={FOLDER_GRADIENTS[category]}
                    onViewProject={(p) => router.push(`/learn/${p.id}`)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission statement — outside the padded container so it spans full width */}
        <MissionStatement />

        {/* Cancer history timeline */}
        <CancerTimeline />
      </main>
      <Footer />
    </>
  );
}
