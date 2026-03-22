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

export default function Home() {
  return (
    <>
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
