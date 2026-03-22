"use client";

import { motion } from "framer-motion";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

function Entry({ text, sub }: { text: string; sub?: string }) {
  return (
    <div className="mb-2">
      <p
        className="text-[#C9ADA7] text-sm md:text-base leading-relaxed"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {text}
      </p>
      {sub && (
        <p
          className="text-[#4A4E69] text-xs md:text-sm mt-1 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Tag({ label, color = "#4A4E69" }: { label: string; color?: string }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mr-2 mb-2"
      style={{
        background: `${color}33`,
        border: `1px solid ${color}55`,
        color,
        fontFamily: "var(--font-jetbrains-mono)",
      }}
    >
      {label}
    </span>
  );
}

const timelineData: TimelineEntry[] = [
  {
    title: "Ancient",
    content: (
      <div>
        <Entry
          text="~1600 BCE — Edwin Smith Papyrus describes 8 cases of breast tumors, treated by fire-drilling. Ancient Egyptians called it 'a disease with no treatment.'"
        />
        <Entry
          text="~400 BCE — Hippocrates coins the term 'karkinos' (crab) to describe tumors. He observed that disturbing a tumor made it worse."
        />
        <div className="mt-3">
          <Tag label="observation" />
          <Tag label="no treatment" color="#7b3f5e" />
        </div>
      </div>
    ),
  },
  {
    title: "1700s",
    content: (
      <div>
        <Entry
          text="1775 — Percival Pott links scrotal cancer in chimney sweeps to soot exposure — the first recorded occupational carcinogen and the birth of cancer epidemiology."
        />
        <Entry
          text="1761 — Giovanni Morgagni performs autopsies to connect symptoms with internal organ changes, founding pathological anatomy."
        />
        <div className="mt-3">
          <Tag label="first carcinogen" />
          <Tag label="epidemiology" color="#9A8C98" />
        </div>
      </div>
    ),
  },
  {
    title: "1800s",
    content: (
      <div>
        <Entry
          text="1838 — Johannes Müller proves cancer is made of cells, not lymph — a pivotal shift in understanding the disease."
        />
        <Entry
          text="1895 — Wilhelm Röntgen discovers X-rays. Within a year, radiation is being used to treat cancer — the first non-surgical therapy."
        />
        <Entry
          text="1889 — Stephen Paget proposes the 'seed and soil' theory of metastasis — still referenced today."
        />
        <div className="mt-3">
          <Tag label="cell theory" />
          <Tag label="radiation therapy" color="#C9ADA7" />
        </div>
      </div>
    ),
  },
  {
    title: "1900–1950",
    content: (
      <div>
        <Entry
          text="1913 — American Cancer Society founded as the 'American Society for the Control of Cancer' — bringing public awareness into the fight."
        />
        <Entry
          text="1937 — National Cancer Institute (NCI) established by the U.S. government — the first federal commitment to cancer research."
        />
        <Entry
          text="1943 — Nitrogen mustard (derived from WWI mustard gas) becomes the first modern chemotherapy agent."
        />
        <div className="mt-3">
          <Tag label="public awareness" />
          <Tag label="first chemo" color="#7b3f5e" />
          <Tag label="federal funding" color="#4A4E69" />
        </div>
      </div>
    ),
  },
  {
    title: "1970s–90s",
    content: (
      <div>
        <Entry
          text="1971 — President Nixon signs the National Cancer Act — the 'War on Cancer' — allocating $1.5B to research."
        />
        <Entry
          text="1994–95 — BRCA1 and BRCA2 genes identified, unlocking hereditary breast and ovarian cancer risk screening."
        />
        <Entry
          text="1998 — Herceptin (trastuzumab) approved for HER2+ breast cancer — the first targeted biological therapy."
        />
        <div className="mt-3">
          <Tag label="genetic revolution" />
          <Tag label="targeted therapy" color="#C9ADA7" />
          <Tag label="BRCA" color="#9A8C98" />
        </div>
      </div>
    ),
  },
  {
    title: "2000s–2010s",
    content: (
      <div>
        <Entry
          text="2001 — Gleevec (imatinib) approved for CML — a precision therapy so effective it turned a fatal leukemia into a manageable condition."
        />
        <Entry
          text="2011 — Ipilimumab (Yervoy) approved — the first checkpoint immunotherapy, harnessing the immune system to fight cancer."
        />
        <Entry
          text="2013 — CRISPR-Cas9 adapted for gene editing, opening doors to cancer gene correction therapy."
        />
        <div className="mt-3">
          <Tag label="precision medicine" />
          <Tag label="immunotherapy" color="#C9ADA7" />
          <Tag label="CRISPR" color="#6e8fa8" />
        </div>
      </div>
    ),
  },
  {
    title: "Now",
    content: (
      <div>
        <Entry
          text="2024–25 — mRNA cancer vaccines (building on COVID-19 mRNA technology) enter Phase 3 trials for melanoma and lung cancer."
        />
        <Entry
          text="AI-driven early detection can identify cancers from imaging with accuracy matching or exceeding specialist radiologists."
        />
        <Entry
          text="Liquid biopsies can detect cancer DNA in a blood draw — before symptoms appear."
        />
        <div className="mt-3">
          <Tag label="mRNA vaccines" />
          <Tag label="AI detection" color="#C9ADA7" />
          <Tag label="liquid biopsy" color="#9A8C98" />
        </div>
      </div>
    ),
  },
  {
    title: "Next Steps",
    content: (
      <div>
        <p
          className="text-[#F2E9E4] text-sm md:text-base font-semibold mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Where Fight Cancer Foundation goes from here.
        </p>
        <div className="space-y-3">
          {[
            { label: "Cancer Education Expansion", desc: "Bring the Learning Hub to schools, clinics, and community centers across all 50 states." },
            { label: "Rare Cancer Grants", desc: "Fund research for cancers that receive less than 1% of NCI funding but kill thousands annually." },
            { label: "Multilingual Resources", desc: "Translate all 25 cancer breakdowns into 10+ languages — because cancer doesn't check citizenship." },
            { label: "Community Support Network", desc: "Connect newly diagnosed patients with survivors, advocates, and oncology navigators." },
            { label: "Policy Advocacy", desc: "Push for mandatory cancer literacy in high school curricula and expanded screening coverage." },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-4"
              style={{
                background: "rgba(74,78,105,0.15)",
                border: "1px solid rgba(201,173,167,0.12)",
              }}
            >
              <p
                className="text-[#C9ADA7] text-sm font-semibold mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                → {item.label}
              </p>
              <p
                className="text-[#9A8C98] text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function CancerTimeline() {
  return (
    <section className="bg-[#22223B] py-20" id="timeline">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          The Fight Through History
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#F2E9E4] leading-tight mb-4"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          3,600 years of cancer.<br />
          <span style={{ color: "#9A8C98" }}>The fight has always been ours.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#9A8C98] text-base max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          From ancient papyrus to mRNA vaccines — and where Fight Cancer Foundation
          takes the mission next.
        </motion.p>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
