"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LiquidPrimaryButton } from "@/components/ui/liquid-glass-button";

const navLinks = [
  { label: "About",       href: "/#about" },
  { label: "Impact",      href: "/#impact" },
  { label: "Learn",       href: "/learn" },
  { label: "Get Involved", href: "/#get-involved" },
];

function getActiveLabel(pathname: string): string {
  if (pathname.startsWith("/learn")) return "Learn";
  return "About"; // default on home
}

export function Navigation() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => getActiveLabel(pathname));
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    setActiveTab(getActiveLabel(pathname));
  }, [pathname]);

  useEffect(() => {
    const handler = () => {
      setScrollDepth(Math.min(window.scrollY / 180, 1));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bgOpacity = 0.07 + scrollDepth * 0.07;
  const blurPx = 24 + scrollDepth * 12;
  const borderOpacity = 0.12 + scrollDepth * 0.08;
  const shadowStrength = scrollDepth * 0.3;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-4xl"
      >
        <nav
          className="relative flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,${bgOpacity + 0.03}) 0%, rgba(255,255,255,${bgOpacity}) 50%, rgba(201,173,167,${bgOpacity * 0.7}) 100%)`,
            backdropFilter: `blur(${blurPx}px) saturate(160%)`,
            WebkitBackdropFilter: `blur(${blurPx}px) saturate(160%)`,
            border: `1px solid rgba(255,255,255,${borderOpacity})`,
            boxShadow: [
              `0 8px 32px rgba(0,0,0,${0.2 + shadowStrength})`,
              `0 1px 0 rgba(255,255,255,${0.18 + scrollDepth * 0.08}) inset`,
              `0 -1px 0 rgba(0,0,0,0.15) inset`,
              `0 0 0 0.5px rgba(201,173,167,${0.1 + scrollDepth * 0.08})`,
            ].join(", "),
          }}
        >
          {/* Top-edge refraction */}
          <div
            className="absolute top-0 left-8 right-8 h-px rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,${0.3 + scrollDepth * 0.15}), rgba(201,173,167,${0.35 + scrollDepth * 0.15}), rgba(255,255,255,${0.3 + scrollDepth * 0.15}), transparent)`,
            }}
            aria-hidden="true"
          />

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none flex-shrink-0"
            aria-label="Fight Cancer Foundation — Home"
          >
            <span
              className="spin-slow select-none leading-none"
              style={{
                fontFamily: "var(--font-syne), system-ui",
                fontWeight: 900,
                fontSize: "1.35rem",
                color: "#C9ADA7",
                lineHeight: 1,
                display: "inline-block",
                filter: "drop-shadow(0 0 10px rgba(201,173,167,0.55)) drop-shadow(0 0 28px rgba(201,173,167,0.22))",
              }}
              aria-hidden="true"
            >
              *
            </span>
            <span
              className="font-bold tracking-tight text-[#F2E9E4] group-hover:text-[#C9ADA7] transition-colors duration-200 text-[0.95rem]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Fight Cancer
            </span>
          </a>

          {/* Desktop nav links with lamp effect */}
          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveTab(link.label)}
                    className="relative px-4 py-2 rounded-full text-sm transition-colors duration-200 whitespace-nowrap block"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: isActive ? "#F2E9E4" : "#9A8C98",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-lamp"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ background: "rgba(201,173,167,0.12)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      >
                        {/* Lamp glow above */}
                        <span
                          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-t-full block"
                          style={{ background: "#C9ADA7" }}
                        >
                          <span className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2 block" style={{ background: "rgba(201,173,167,0.28)" }} />
                          <span className="absolute w-8 h-5 rounded-full blur-md -top-1 block" style={{ background: "rgba(201,173,167,0.22)" }} />
                        </span>
                      </motion.span>
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <LiquidPrimaryButton
              size="sm"
              onClick={() => { window.location.href = "/#get-involved"; }}
              aria-label="Donate to Fight Cancer Foundation"
            >
              Donate
            </LiquidPrimaryButton>
          </div>

          {/* Mobile: logo only (MobileTabBar handles nav) */}
          <div className="md:hidden flex-shrink-0">
            <LiquidPrimaryButton
              size="sm"
              onClick={() => { window.location.href = "/#get-involved"; }}
            >
              Donate
            </LiquidPrimaryButton>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
