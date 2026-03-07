"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { ServicesDesktop } from "./services-desktop"
import { ServicesMobile } from "./services-mobile"

export function ServicesPreview() {
    return (
        <section
            className="bg-[#050505] px-6 lg:px-8 border-b border-white/5"
            style={{ paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}
        >
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <FadeIn className="mb-16">
                    <div className="flex items-baseline justify-between mb-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4"
                                style={{ fontFamily: "var(--font-mono)" }}>
                                Choose your event type
                            </p>
                            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-light tracking-tight text-[#F5F5F5] leading-[1.05]">
                                Three lanes.<br />
                                <em className="text-[#B8B8B8] font-light">One standard: studio quality output.</em>
                            </h2>
                        </div>
                    </div>
                </FadeIn>

                <ServicesDesktop />
                <ServicesMobile />
            </div>
        </section>
    )
}
