import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/sections/Hero"
import { PlatformPreview } from "@/components/sections/PlatformPreview"
import { About } from "@/components/sections/About"
import { Impact } from "@/components/sections/Impact"
import { RareSpotlight } from "@/components/sections/RareSpotlight"
import { LearningPlatform } from "@/components/sections/LearningPlatform"
import { TakeActionCTA } from "@/components/sections/TakeActionCTA"
import { GetInvolved } from "@/components/sections/GetInvolved"
import { Footer } from "@/components/sections/Footer"
import { CancerTimeline } from "@/components/sections/CancerTimeline"
import { MissionStatement } from "@/components/sections/MissionStatement"

export const metadata: Metadata = {
  title: "Fight Cancer Foundation | Cancer Education Nonprofit",
  description:
    "Fight Cancer Foundation (FCF) is a nonprofit dedicated to cancer education — the disease, the cost, and the fight. Explore 25 cancer types, treatment options, and how to get involved.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fight Cancer Foundation | Cancer Education Nonprofit",
    description:
      "FCF is a nonprofit dedicated to cancer education — the disease, the cost, and the fight. Explore 25 cancer types and get involved.",
    url: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fight Cancer Foundation",
  alternateName: ["FCF", "F* Cancer Foundation", "Fight Cancer"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fcancers.com",
  description:
    "Fight Cancer Foundation (FCF) is a nonprofit organization dedicated to cancer education, awareness, and action. We cover 25+ cancer types with free, accessible information for patients, families, and advocates.",
  foundingDate: "2024",
  nonprofitStatus: "Nonprofit501c3",
  knowsAbout: [
    "Cancer Education",
    "Cancer Awareness",
    "Breast Cancer",
    "Lung Cancer",
    "Prostate Cancer",
    "Colon Cancer",
    "Childhood Cancer",
    "Rare Cancers",
  ],
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />
      <main>
        <Hero />
        <PlatformPreview />
        <About />
        <MissionStatement />
        <Impact />
        <RareSpotlight />
        <LearningPlatform />
        <CancerTimeline />
        <TakeActionCTA />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
