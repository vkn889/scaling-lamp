import { CTASection } from "@/components/ui/cta-with-rectangle"

export function TakeActionCTA() {
  return (
    <div
      className="relative"
      style={{ background: "linear-gradient(180deg, #22223B 0%, #2e2d4a 50%, #22223B 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,173,167,0.25), transparent)" }} aria-hidden="true" />
      <CTASection
        badge={{ text: "Make a Difference" }}
        title={"Knowledge is the first act of resistance."}
        description="Everything on this platform is free. Share it. Use it. Fight like hell. No one should face cancer without information."
        action={{ text: "Get Involved", href: "#get-involved" }}
        withGlow
      />
    </div>
  )
}
