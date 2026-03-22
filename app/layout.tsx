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
  title: "Fight Cancer Foundation — Fight. Freedom.",
  description:
    "Educating the world about cancer — the disease, the cost, and the fight. No one should face it uninformed, unprepared, or alone.",
  openGraph: {
    title: "Fight Cancer Foundation",
    description:
      "Fight. Freedom. Education, awareness, and action against cancer.",
    type: "website",
    siteName: "Fight Cancer Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fight Cancer Foundation",
    description: "Fight. Freedom.",
  },
  keywords: ["cancer", "cancer education", "cancer awareness", "cancer foundation", "cancer types", "treatment costs"],
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
