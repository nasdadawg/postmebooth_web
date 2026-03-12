"use client"

import Link from "next/link"
import { useRef } from "react"
import { VariableProximity } from "@/components/ui/variable-proximity"
import { MagneticButton } from "@/components/ui/magnetic-button"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function ResidencyHero() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden bg-[#050505]"
        >
            {/* 9:16 Video Background showing high-energy event recap */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 lg:opacity-50"
                >
                    <source src="/events/dsrpt-noiselab-episode4/gif/0133-NOIZE_LAB_004-d1 (1).mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-24 pt-32 flex flex-col items-center justify-center text-center gap-8">

                <p className="font-mono text-[10px] lg:text-[12px] font-semibold tracking-[0.2em] text-[#D4C4A8] uppercase mb-2">
                    Not A Vendor.
                </p>

                <h1
                    className="leading-[0.9] font-serif text-[#F2EFE9] w-full max-w-5xl mx-auto flex flex-col items-center"
                    style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
                >
                    <VariableProximity
                        label="THE CONTENT ENGINE."
                        className="block cursor-default text-center"
                        fromFontVariationSettings="'wght' 300, 'opsz' 14"
                        toFontVariationSettings="'wght' 700, 'opsz' 14"
                        containerRef={containerRef}
                        radius={200}
                        falloff="gaussian"
                    />
                </h1>

                <p className="text-[17px] lg:text-[21px] font-light text-[#F2EFE9]/90 leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
                    We supply Los Angeles's most exclusive venues with ongoing editorial content.
                    <strong className="block text-[#C5A059] font-normal mt-4 text-[15px] tracking-wide uppercase font-mono">
                        The Look • The Guest Data • Weekly Recap Reels
                    </strong>
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <MagneticButton strength={0.2} radius={100}>
                        <Link href={HONEYBOOK_URL} target="_blank">
                            <button className="h-[60px] px-10 font-mono text-[12px] font-bold tracking-[0.18em] uppercase text-[#050505] bg-[#D4C4A8] hover:bg-white transition-colors duration-300">
                                Apply For Residency
                            </button>
                        </Link>
                    </MagneticButton>
                    <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
                        Starting at $5,000 / mo
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-white/40">
                <span className="font-mono text-[9px] uppercase tracking-widest">Discover The Value</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </section>
    )
}
