"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { VariableProximity } from "@/components/ui/variable-proximity"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { MagneticButton } from "@/components/ui/magnetic-button"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

const SERVICE_LANES = [
    { title: "Nightlife", desc: "High-energy residencies.", href: "/lp/nightlife" },
    { title: "Weddings", desc: "Editorial after-parties.", href: "/lp/weddings" },
    { title: "Corporate", desc: "Brand activations.", href: "/lp/corporate" },
]

export function HeroRedesigned() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden bg-black"
        >
            {/* 9:16 Video Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 lg:opacity-50"
                >
                    {/* Using one of the existing 9:16 MP4 recaps */}
                    <source src="/events/dsrpt-noiselab-episode4/gif/0397-NOIZE_LAB_004-d1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-24 lg:pb-0 pt-32 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex flex-col w-full lg:w-[55%] pointer-events-auto">
                    <p className="font-mono text-[10px] lg:text-[11px] font-semibold tracking-[0.2em] text-[#D4C4A8] uppercase mb-6 lg:mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#D4C4A8]/50"></span>
                        The Content Engine
                    </p>

                    <h1 className="text-[3.5rem] leading-[0.9] lg:text-[7.5rem] font-serif text-[#F2EFE9] mb-8 lg:mb-10 w-full">
                        <VariableProximity
                            label="THE LOOK. THE ROOM."
                            className="block cursor-default"
                            fromFontVariationSettings="'wght' 300, 'opsz' 14"
                            toFontVariationSettings="'wght' 700, 'opsz' 14"
                            containerRef={containerRef}
                            radius={200}
                            falloff="gaussian"
                        />
                    </h1>

                    <p className="text-[16px] lg:text-[19px] font-light text-[#F2EFE9]/80 leading-relaxed max-w-md mb-10">
                        Full frame portraits and instant delivery. Guests repost. You get a private, organized archive after. No prints. Just high-status digital assets.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <MagneticButton strength={0.2} radius={100}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <button className="h-[56px] px-8 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#050505] bg-[#D4C4A8] hover:bg-white transition-colors duration-300">
                                    Secure A Date
                                </button>
                            </Link>
                        </MagneticButton>
                    </div>
                </div>

                {/* Service Lanes */}
                <div className="flex flex-col gap-4 w-full lg:w-[35%] pointer-events-auto">
                    {SERVICE_LANES.map((lane, i) => (
                        <Link href={lane.href} key={i}>
                            <SpotlightCard className="p-6 cursor-pointer group border-white/5 bg-[#050505]/40 hover:bg-[#050505]/60 transition-colors duration-300">
                                <h3 className="font-serif text-2xl lg:text-3xl text-[#F2EFE9] mb-2">{lane.title}</h3>
                                <p className="font-sans text-sm text-[#F2EFE9]/60">{lane.desc}</p>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4C4A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </SpotlightCard>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
