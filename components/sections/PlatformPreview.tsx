"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CANCERS, CATEGORY_LABELS } from "@/data/cancers";

const PREVIEW_CANCERS = CANCERS.slice(0, 9);

const CATEGORY_DOT: Record<string, string> = {
  common:      "#C9ADA7",
  childhood:   "#9A8C98",
  rare:        "#F2E9E4",
  blood:       "#C9ADA7",
  gynecologic: "#9A8C98",
  "head-neck": "#C9ADA7",
};

export function PlatformPreview() {
  return (
    <div className="relative bg-[#22223B] overflow-hidden">
      {/* Subtle connector gradient from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #22223B, transparent)" }}
        aria-hidden="true"
      />

      <ContainerScroll
        titleComponent={
          <div className="text-center px-4">
            <p
              className="text-[#9A8C98] text-[0.65rem] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Cancer Learning Platform
            </p>
            <h2
              className="text-[#F2E9E4] leading-tight mb-4"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                letterSpacing: "-0.025em",
              }}
            >
              25 cancer types.
              <br />
              <span className="gradient-text">Fully documented.</span>
            </h2>
            <p
              className="text-[#9A8C98] text-sm md:text-base max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Biology, symptoms, treatment, survival rates — everything you need, written for everyone.
            </p>
          </div>
        }
      >
        {/* Mini cancer card grid inside the 3D card */}
        <div className="w-full h-full overflow-auto p-4 md:p-6">
          {/* Mini search bar */}
          <div
            className="flex items-center gap-3 rounded-full px-4 py-2.5 mb-4 text-xs text-[#9A8C98]"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search cancer types...
          </div>

          {/* Mini grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {PREVIEW_CANCERS.map((cancer) => (
              <div
                key={cancer.id}
                className="p-3 rounded-xl transition-all duration-200 group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: CATEGORY_DOT[cancer.category] }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.55rem] tracking-[0.12em] uppercase text-[#9A8C98]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {CATEGORY_LABELS[cancer.category]}
                  </span>
                </div>
                <p
                  className="text-[#F2E9E4] font-bold text-xs leading-tight mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {cancer.name}
                </p>
                <p
                  className="text-[#9A8C98] text-[0.65rem] leading-relaxed line-clamp-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {cancer.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
