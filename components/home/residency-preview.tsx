"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import Link from "next/link"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function ResidencyPreview() {
    return (
        <section
            className="bg-[#050505] px-6 lg:px-8 border-t border-white/5 pb-24 lg:pb-32"
            style={{ paddingTop: "clamp(80px, 10vw, 140px)" }}
        >
            <div className="mx-auto max-w-5xl">
                <FadeIn className="mb-12 text-center flex flex-col items-center">
                    <p className="text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-4"
                        style={{ fontFamily: "var(--font-mono)" }}>
                        The Retainer
                    </p>
                    <h2 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] font-light tracking-tight text-[#F2EFE9] leading-[0.95] mb-6">
                        EDITORIAL RESIDENCY.
                    </h2>
                    <p className="text-[18px] lg:text-[22px] font-light text-[#F2EFE9]/80 leading-relaxed max-w-2xl mx-auto">
                        We aren't a vendor. We are your venue's outsourced content department.
                    </p>
                </FadeIn>

                <FadeIn>
                    <SpotlightCard className="p-8 lg:p-14 border-white/10 bg-[#0A0A0A]/80 text-center flex flex-col items-center gap-8 mb-16">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-b border-white/5 py-8 my-4">
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-mono text-3xl text-[#C5A059] font-light">04</span>
                                <span className="font-sans text-[14px] text-white/60 uppercase tracking-widest font-semibold">Nights / Mo</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 border-t md:border-t-0 md:border-l md:border-r border-white/5 pt-8 md:pt-0">
                                <span className="font-mono text-3xl text-[#C5A059] font-light">02</span>
                                <span className="font-sans text-[14px] text-white/60 uppercase tracking-widest font-semibold">Recap Reels</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 border-t md:border-t-0 border-white/5 pt-8 md:pt-0">
                                <span className="font-mono text-3xl text-[#C5A059] font-light">∞</span>
                                <span className="font-sans text-[14px] text-white/60 uppercase tracking-widest font-semibold">Guest SMS Lead Data</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <p className="font-serif text-[28px] lg:text-[36px] text-[#F2EFE9] italic">
                                "Fire your photographer. Hire a Residency."
                            </p>

                            <MagneticButton strength={0.2} radius={100}>
                                <Link href={HONEYBOOK_URL} target="_blank">
                                    <button className="h-[56px] px-10 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#050505] bg-[#D4C4A8] hover:bg-white transition-colors duration-300">
                                        Apply for $5k/mo
                                    </button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </SpotlightCard>
                </FadeIn>
            </div>
        </section>
    )
}
