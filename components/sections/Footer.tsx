import { Instagram, Linkedin, Mail } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.19 8.19 0 004.79 1.52V7.03a4.85 4.85 0 01-1.02-.34z"/>
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Learn", href: "#learn" },
  { label: "Get Involved", href: "#get-involved" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/asterisk.svg"
                alt=""
                aria-hidden="true"
                className="spin-slow"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <span
                className="text-[#F2E9E4] font-bold text-lg tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Fight Cancer Foundation
              </span>
            </div>
            <p
              className="text-[#9A8C98] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Educating the world about cancer — the disease, the cost, and the fight.
            </p>
            <p
              className="text-[#4A4E69] text-xs mt-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Est. 2026
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <h3
              className="text-[#9A8C98] text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9A8C98] text-sm hover:text-[#F2E9E4] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + Social */}
          <div>
            <h3
              className="text-[#9A8C98] text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Connect
            </h3>
            <a
              href="mailto:hello@fcancerfoundation.org"
              className="flex items-center gap-2 text-[#9A8C98] text-sm hover:text-[#F2E9E4] transition-colors duration-200 mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <Mail size={14} aria-hidden="true" />
              hello@fcancerfoundation.org
            </a>
            <div className="flex gap-3">
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
                  aria-label={`${label}`}
                  className="w-9 h-9 flex items-center justify-center border border-white/8 text-[#9A8C98] hover:text-[#F2E9E4] hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#4A4E69] text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            © 2026 Fight Cancer Foundation. Fight. Freedom.
          </p>
          <p
            className="text-[#4A4E69] text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
