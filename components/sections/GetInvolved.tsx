"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
import { LiquidPrimaryButton } from "@/components/ui/liquid-glass-button";

// Simple SVG icons for TikTok and X (Twitter)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.19 8.19 0 004.79 1.52V7.03a4.85 4.85 0 01-1.02-.34z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function GetInvolved() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [newsletter, setNewsletter] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterSubmitted(true);
  }

  return (
    <section
      id="get-involved"
      ref={ref}
      className="relative bg-[#22223B] py-28 md:py-36"
      aria-labelledby="get-involved-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A4E69] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#9A8C98] text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Get Involved
          </motion.p>
          <motion.h2
            id="get-involved-heading"
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
            Don't just be angry. Do something.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9A8C98] text-base max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whether you donate, volunteer, or simply share what you've learned — you're part of changing what it means to face cancer in America.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Donate + Social */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Donate block */}
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(201,173,167,0.09) 0%, rgba(74,78,105,0.12) 100%)",
                border: "1px solid rgba(201,173,167,0.2)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.5), transparent)" }}
                aria-hidden="true"
              />
              <h3
                className="text-[#F2E9E4] text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Make a Donation
              </h3>
              <p
                className="text-[#9A8C98] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Every dollar funds cancer education, awareness campaigns, and resources for patients who can't afford them.
              </p>
              <LiquidPrimaryButton
                size="lg"
                onClick={() => window.open("https://www.gofundme.com", "_blank", "noopener,noreferrer")}
                aria-label="Donate to F* Cancer Foundation (opens in new tab)"
              >
                Donate Now
                <ExternalLink size={14} aria-hidden="true" />
              </LiquidPrimaryButton>
            </div>

            {/* Newsletter */}
            <div>
              <h3
                className="text-[#F2E9E4] text-base font-semibold mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Stay informed.
              </h3>
              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-0">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-l-full bg-[#4A4E69]/20 border border-white/10 border-r-0 text-[#F2E9E4] placeholder-[#4A4E69] text-sm focus:border-[#C9ADA7]/40 focus:outline-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm font-semibold text-[#22223B] cursor-pointer flex-shrink-0 transition-all duration-200 hover:opacity-90 rounded-r-full"
                    style={{
                      background: "linear-gradient(135deg, #C9ADA7, #9A8C98)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <p
                  className="text-[#C9ADA7] text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  You're in. We'll be in touch.
                </p>
              )}
            </div>

            {/* Social */}
            <div>
              <h3
                className="text-[#9A8C98] text-xs tracking-[0.25em] uppercase mb-5"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Follow the fight
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
                  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                  { icon: XIcon, label: "X (Twitter)", href: "https://www.x.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — opens in new tab`}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-[#9A8C98] hover:text-[#F2E9E4] hover:border-[#C9ADA7]/40 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Interest form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col"
          >
            <h3
              className="text-[#F2E9E4] text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Volunteer or Collaborate
            </h3>
            <p
              className="text-[#9A8C98] text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Tell us how you want to get involved — takes less than 2 minutes.
            </p>

            {/* Tally embed card */}
            <div
              className="relative rounded-2xl overflow-hidden flex-1"
              style={{
                background: "linear-gradient(145deg, rgba(45,45,74,0.6) 0%, rgba(34,34,59,0.8) 100%)",
                border: "1px solid rgba(201,173,167,0.15)",
                minHeight: 420,
              }}
            >
              {/* Top refraction */}
              <div
                className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.3), transparent)" }}
                aria-hidden="true"
              />

              <iframe
                src="https://tally.so/embed/RGL78P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="420"
                title="Fight Cancer Foundation Interest Form"
                style={{ border: "none", background: "transparent" }}
              />
            </div>

            <p
              className="text-[#4A4E69] text-[10px] text-center mt-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Prefer a new tab?{" "}
              <a
                href="https://tally.so/r/RGL78P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A8C98] hover:text-[#C9ADA7] transition-colors underline underline-offset-2"
              >
                Open full form ↗
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
