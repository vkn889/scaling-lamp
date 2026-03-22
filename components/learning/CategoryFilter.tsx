"use client";

import { CancerCategory, CATEGORY_LABELS, CATEGORY_ORDER } from "@/data/cancers";

interface CategoryFilterProps {
  selected: CancerCategory | "all";
  onChange: (cat: CancerCategory | "all") => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const all = ["all" as const, ...CATEGORY_ORDER];

  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter cancers by category"
    >
      {all.map((cat) => {
        const label = cat === "all" ? "All" : CATEGORY_LABELS[cat];
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`text-xs px-4 py-2 rounded-full border tracking-wide transition-all duration-200 cursor-pointer ${
              isActive
                ? "font-semibold text-[#22223B] border-transparent"
                : "border-white/15 text-[#9A8C98] hover:border-[#C9ADA7]/40 hover:text-[#F2E9E4]"
            }`}
            style={{
              fontFamily: "var(--font-syne)",
              ...(isActive
                ? { background: "linear-gradient(135deg, #F2E9E4 0%, #C9ADA7 100%)" }
                : {}),
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
