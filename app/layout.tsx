import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MobileTabBar } from "@/components/MobileTabBar";
import { InterestFormModal } from "@/components/InterestFormModal";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fcancers.com"
  ),
  title: {
    default: "Fight Cancer Foundation | Cancer Education Nonprofit",
    template: "%s | Fight Cancer Foundation",
  },
  description:
    "Fight Cancer Foundation (FCF) is a nonprofit dedicated to cancer education — the disease, the cost, and the fight. No one should face it uninformed, unprepared, or alone.",
  keywords: [
    "Fight Cancer Foundation",
    "FCF",
    "F* Cancer Foundation",
    "F cancer foundation",
    "cancer nonprofit",
    "nonprofit cancer education",
    "cancer foundation",
    "cancer awareness",
    "cancer education",
    "cancer types",
    "cancer treatment",
    "cancer research nonprofit",
    "cancer support organization",
  ],
  authors: [{ name: "Fight Cancer Foundation" }],
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fight Cancer Foundation | Cancer Education Nonprofit",
    description:
      "FCF is a nonprofit dedicated to cancer education — the disease, the cost, and the fight. No one should face it uninformed, unprepared, or alone.",
    type: "website",
    siteName: "Fight Cancer Foundation",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fight Cancer Foundation | Cancer Education Nonprofit",
    description:
      "FCF is a nonprofit dedicated to cancer education — the disease, the cost, and the fight.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#22223B] text-[#F2E9E4] pb-20 md:pb-0">
        {children}
        <MobileTabBar />
        <InterestFormModal />
      </body>
    </html>
  );
}
