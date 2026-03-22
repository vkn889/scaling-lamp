import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CANCERS, CATEGORY_LABELS } from "@/data/cancers";

interface PageProps {
  params: Promise<{ cancer: string }>;
}

export async function generateStaticParams() {
  return CANCERS.map((c) => ({ cancer: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cancer: slug } = await params;
  const cancer = CANCERS.find((c) => c.id === slug);
  if (!cancer) return { title: "Not Found" };
  return {
    title: `${cancer.fullName} — Fight Cancer Foundation`,
    description: cancer.summary,
    openGraph: {
      title: `${cancer.fullName} — Fight Cancer Foundation`,
      description: cancer.summary,
      type: "article",
    },
  };
}

const TOC_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-develops", label: "How It Develops" },
  { id: "symptoms", label: "Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "statistics", label: "Statistics" },
  { id: "risk-factors", label: "Risk Factors" },
  { id: "resources", label: "Resources" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-4"
      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[#F2E9E4] text-2xl font-bold mb-6 scroll-mt-28"
      style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}
    >
      {children}
    </h2>
  );
}

export default async function CancerDetailPage({ params }: PageProps) {
  const { cancer: slug } = await params;
  const cancer = CANCERS.find((c) => c.id === slug);

  if (!cancer) notFound();

  return (
    <div className="min-h-screen bg-[#22223B]">
      {/* Top bar */}
      <div className="border-b border-white/5 bg-[#22223B]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/learn"
            className="flex items-center gap-2 text-[#9A8C98] hover:text-[#F2E9E4] text-sm transition-colors duration-200 group"
            aria-label="Back to Learning Platform"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
            <span style={{ fontFamily: "var(--font-syne)" }}>Back</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-[#9A8C98] hover:text-[#F2E9E4] transition-colors duration-200"
            aria-label="Fight Cancer Foundation Home"
          >
            <span
              className="spin-slow text-[#C9ADA7]"
              style={{ fontSize: "1.25rem", fontWeight: 900 }}
              aria-hidden="true"
            >
              ✳
            </span>
            <span
              className="text-sm font-bold hidden sm:block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Fight Cancer
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-16">
          {/* Main content */}
          <main>
            {/* Header */}
            <div className="mb-16 pb-12 border-b border-white/5">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className="text-xs px-3 py-1.5 bg-[#4A4E69]/40 text-[#C9ADA7] tracking-[0.15em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {CATEGORY_LABELS[cancer.category]}
                </span>
                {cancer.isRare && (
                  <span
                    className="text-xs px-3 py-1.5 border border-[#C9ADA7]/30 text-[#C9ADA7] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Rare Cancer
                  </span>
                )}
              </div>

              <h1
                className="text-[#F2E9E4] leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {cancer.name}
              </h1>
              {cancer.name !== cancer.fullName && (
                <p
                  className="text-[#9A8C98] text-xl mb-6"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {cancer.fullName}
                </p>
              )}
              <p
                className="text-[#C9ADA7] text-lg leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {cancer.summary}
              </p>

              {/* Quick stats */}
              {(cancer.survivalRate || cancer.incidence) && (
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {cancer.survivalRate && (
                    <div className="border border-white/10 bg-[#4A4E69]/10 px-6 py-5">
                      <p
                        className="text-[#9A8C98] text-[0.65rem] tracking-[0.25em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        Survival Rate
                      </p>
                      <p
                        className="text-[#F2E9E4] text-base font-semibold leading-snug"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {cancer.survivalRate}
                      </p>
                    </div>
                  )}
                  {cancer.incidence && (
                    <div className="border border-white/10 bg-[#4A4E69]/10 px-6 py-5">
                      <p
                        className="text-[#9A8C98] text-[0.65rem] tracking-[0.25em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        Incidence
                      </p>
                      <p
                        className="text-[#F2E9E4] text-base font-semibold leading-snug"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {cancer.incidence}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Overview */}
            <section className="mb-14" aria-labelledby="overview">
              <SectionLabel>What it is</SectionLabel>
              <SectionHeading id="overview">Overview</SectionHeading>
              <p
                className="text-[#9A8C98] leading-relaxed text-base"
                style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "1.8" }}
              >
                {cancer.overview}
              </p>
            </section>

            {/* How it develops */}
            <section className="mb-14" aria-labelledby="how-it-develops">
              <SectionLabel>Biology</SectionLabel>
              <SectionHeading id="how-it-develops">How It Develops</SectionHeading>
              <p
                className="text-[#9A8C98] leading-relaxed text-base"
                style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "1.8" }}
              >
                {cancer.howItDevelops}
              </p>
            </section>

            {/* Symptoms */}
            <section className="mb-14" aria-labelledby="symptoms">
              <SectionLabel>Warning signs</SectionLabel>
              <SectionHeading id="symptoms">Symptoms</SectionHeading>
              <ul className="space-y-3" role="list">
                {cancer.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[#C9ADA7]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span
                      className="text-[#9A8C98] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Diagnosis */}
            <section className="mb-14" aria-labelledby="diagnosis">
              <SectionLabel>Detection</SectionLabel>
              <SectionHeading id="diagnosis">Diagnosis Methods</SectionHeading>
              <ul className="space-y-3" role="list">
                {cancer.diagnosisMethods.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[#C9ADA7]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span
                      className="text-[#9A8C98] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Treatment */}
            <section className="mb-14" aria-labelledby="treatment">
              <SectionLabel>Medical care</SectionLabel>
              <SectionHeading id="treatment">Treatment Options</SectionHeading>
              <ul className="space-y-3" role="list">
                {cancer.treatmentOptions.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[#C9ADA7]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span
                      className="text-[#9A8C98] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Statistics */}
            <section className="mb-14" aria-labelledby="statistics">
              <SectionLabel>Data</SectionLabel>
              <SectionHeading id="statistics">Statistics</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {cancer.survivalRate && (
                  <div className="border-l-2 border-[#C9ADA7] pl-6 py-2">
                    <p
                      className="text-[#9A8C98] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      Survival Rate
                    </p>
                    <p
                      className="text-[#F2E9E4] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {cancer.survivalRate}
                    </p>
                  </div>
                )}
                {cancer.incidence && (
                  <div className="border-l-2 border-[#9A8C98]/50 pl-6 py-2">
                    <p
                      className="text-[#9A8C98] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      Incidence (US)
                    </p>
                    <p
                      className="text-[#F2E9E4] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {cancer.incidence}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Risk Factors */}
            <section className="mb-14" aria-labelledby="risk-factors">
              <SectionLabel>Prevention</SectionLabel>
              <SectionHeading id="risk-factors">Risk Factors</SectionHeading>
              <ul className="space-y-3" role="list">
                {cancer.riskFactors.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[#C9ADA7]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span
                      className="text-[#9A8C98] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Resources */}
            {cancer.resources && cancer.resources.length > 0 && (
              <section className="mb-14" aria-labelledby="resources">
                <SectionLabel>Further reading</SectionLabel>
                <SectionHeading id="resources">Resources</SectionHeading>
                <div className="space-y-3">
                  {cancer.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#C9ADA7] hover:text-[#F2E9E4] transition-colors duration-200 group"
                    >
                      <ExternalLink
                        size={14}
                        className="flex-shrink-0 group-hover:text-[#C9ADA7]"
                        aria-hidden="true"
                      />
                      <span
                        className="text-base underline underline-offset-4"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {res.label}
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="border border-white/10 bg-[#4A4E69]/10 p-8 text-center mt-16">
              <p
                className="text-[#9A8C98] text-xs tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Take action
              </p>
              <h3
                className="text-[#F2E9E4] text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}
              >
                Knowledge is not enough. Act on it.
              </h3>
              <p
                className="text-[#9A8C98] text-sm mb-8 max-w-md mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Donate to cancer research, volunteer with the foundation, or simply share what you've learned. Every action matters.
              </p>
              <Link
                href="/#get-involved"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base text-[#22223B] cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-[#C9ADA7]/25 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #F2E9E4 0%, #C9ADA7 100%)", fontFamily: "var(--font-syne)" }}
              >
                Get Involved
              </Link>
            </div>
          </main>

          {/* Sticky sidebar TOC (desktop) */}
          <aside className="hidden lg:block" aria-label="Table of contents">
            <div className="sticky top-28">
              <p
                className="text-[#9A8C98] text-[0.65rem] tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                On this page
              </p>
              <nav>
                <ul className="space-y-2">
                  {TOC_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-[#4A4E69] hover:text-[#C9ADA7] transition-colors duration-200 py-1"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 pt-8 border-t border-white/5">
                <Link
                  href="/learn"
                  className="flex items-center gap-2 text-sm text-[#9A8C98] hover:text-[#F2E9E4] transition-colors duration-200 group"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <ArrowLeft
                    size={14}
                    className="group-hover:-translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  All Cancers
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#4A4E69] text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            © 2026 Fight Cancer Foundation
          </p>
          <Link
            href="/learn"
            className="text-[#9A8C98] text-xs hover:text-[#F2E9E4] transition-colors"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            ← Back to Learning Platform
          </Link>
        </div>
      </footer>
    </div>
  );
}
