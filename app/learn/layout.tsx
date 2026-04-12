import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancer Education Hub — Every Diagnosis Explained",
  description:
    "Explore 25 types of cancer organized by category. Fight Cancer Foundation's free education hub covers symptoms, diagnosis, treatment options, risk factors, and survival statistics for every major cancer type.",
  alternates: {
    canonical: "/learn",
  },
  keywords: [
    "cancer types",
    "cancer education",
    "cancer information",
    "types of cancer explained",
    "cancer symptoms",
    "cancer treatment options",
    "cancer diagnosis",
    "cancer survival rates",
    "nonprofit cancer resource",
    "Fight Cancer Foundation",
    "FCF",
  ],
  openGraph: {
    title: "Cancer Education Hub | Fight Cancer Foundation",
    description:
      "25 cancer types explained — symptoms, diagnosis, treatment, and survival rates. Free education from FCF.",
    type: "website",
    url: "/learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancer Education Hub | Fight Cancer Foundation",
    description:
      "25 cancer types explained — symptoms, diagnosis, treatment, and survival rates.",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
