"use client"

import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
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
            {/* Background Video */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4]"
                        poster="/events/jstaparty-newyears/front/0045-nye-d1-template (1).jpg"
                    >
                        <source src="/events/jstaparty-newyears/gif/0217-nye-d1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 z-[2]" />
            </div>

            {/* Added a mobile-only text backing for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-[75svh] bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.65)] to-transparent lg:hidden pointer-events-none z-[5]" />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-32 lg:pb-0 pt-32 flex flex-col justify-end lg:justify-center items-start flex-1">

                {/* Desktop Text Content (Original) */}
                <div className="hidden lg:flex flex-col w-[65%] pointer-events-auto relative z-10">
                    <h1
                        className="leading-[0.9] font-serif mb-10 w-full flex flex-col"
                        style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
                    >
                        <VariableProximity
                            label="THE LOOK. THE ROOM."
                            className="block cursor-default text-[#F2EFE9]"
                            fromFontVariationSettings="'wght' 300, 'opsz' 14"
                            toFontVariationSettings="'wght' 700, 'opsz' 14"
                            containerRef={containerRef}
                            radius={200}
                            falloff="gaussian"
                        />
                        <span className="block mt-4 italic text-[#D4C4A8]">CAPTURED CLEAN.</span>
                    </h1>

                    <p className="text-[20px] font-light text-[#F2EFE9]/90 leading-relaxed max-w-lg mb-10">
                        Studio-quality portraits + instant delivery for Los Angeles rooms that matter. Guests repost. You get the archive.
                    </p>

                    <div className="flex flex-row gap-4 items-center">
                        <MagneticButton strength={0.2} radius={100}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <button className="h-[56px] px-8 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#050505] bg-[#D4C4A8] hover:bg-white transition-colors duration-300">
                                    Secure A Date
                                </button>
                            </Link>
                        </MagneticButton>
                    </div>
                </div>

                {/* Mobile Text Content (Updated for Legibility & UX) */}
                <div className="flex flex-col w-full lg:hidden pointer-events-auto relative z-10">
                    
                    <p className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[#C5A059] uppercase mb-4 drop-shadow-md">
                        FOR LOS ANGELES ROOMS THAT MATTER
                    </p>

                    <h1
                        className="leading-[0.9] font-serif mb-6 w-full flex flex-col"
                        style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)", textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
                    >
                        <VariableProximity
                            label="THE LOOK. THE ROOM."
                            className="block cursor-default text-[#F2EFE9]"
                            fromFontVariationSettings="'wght' 300, 'opsz' 14"
                            toFontVariationSettings="'wght' 700, 'opsz' 14"
                            containerRef={containerRef}
                            radius={200}
                            falloff="gaussian"
                        />
                        <span className="block mt-2 italic text-[#D4C4A8]">CAPTURED CLEAN.</span>
                    </h1>

                    <p className="text-[17px] font-light text-[#F2EFE9] leading-relaxed max-w-lg mb-6 drop-shadow">
                        Studio-quality portraits with instant delivery. Guests repost. You keep the archive.
                    </p>

                    <p className="text-[11px] font-mono text-[#F2EFE9]/80 mb-10 tracking-widest leading-loose">
                        QR + SMS delivery · Private gallery · GIFs · Brand-safe overlays
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <MagneticButton strength={0.2} radius={100}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <button className="h-[56px] px-8 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#050505] bg-[#D4C4A8] hover:bg-white transition-colors duration-300">
                                    SECURE A DATE
                                </button>
                            </Link>
                        </MagneticButton>
                        <Link href="/past-events" className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-white/80 hover:text-white transition-colors duration-300 underline underline-offset-8 decoration-white/30 hover:decoration-white/80 py-4 sm:py-0">
                            VIEW THE ARCHIVE
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
