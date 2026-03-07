"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export const servicesData = [
    {
        id: "corporate",
        label: "Corporate",
        body: "Brand safe portraits for teams, sponsors, and activations.",
        href: "/lp/corporate",
        image: "/events/easports-battleflied6-friendsandfamily/template/0069-ripple_studios-d1-template.jpg",
    },
    {
        id: "nightlife",
        label: "Nightlife",
        body: "Flash ready portraits built for dark rooms and fast flow.",
        href: "/lp/nightlife",
        image: "/events/dsrpt-noiselab-episode4/template/0130-NOIZE_LAB_004-d1-template.jpg",
    },
    {
        id: "weddings",
        label: "Weddings",
        body: "Timeless portraits your guests keep and share.",
        href: "/lp/weddings",
        image: "/events/wedding-jasmineandadrian-cityla/front/0370-wedding_-d1-template.jpg",
    },
]

export function ServicesDesktop() {
    const [activeId, setActiveId] = useState<string | null>(null)

    return (
        <div
            className="hidden lg:flex gap-4 w-full"
            style={{ height: "min(70vh, 680px)" }}
            onMouseLeave={() => setActiveId(null)}
        >
            {servicesData.map((svc) => {
                const isActive = activeId === svc.id
                const isAnyActive = activeId !== null

                return (
                    <Link
                        key={svc.id}
                        href={svc.href}
                        onMouseEnter={() => setActiveId(svc.id)}
                        className="relative overflow-hidden group block"
                        style={{
                            flex: isActive ? "2.4" : isAnyActive ? "0.75" : "1",
                            transition: "flex 0.6s cubic-bezier(0.4, 0, 0.15, 1)",
                        }}
                    >
                        {/* Portrait image */}
                        <div className="absolute inset-0">
                            <img
                                src={svc.image}
                                alt={svc.label}
                                className="w-full h-full object-cover"
                                style={{
                                    transform: isActive ? "scale(1.04)" : "scale(1)",
                                    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                                    filter: isAnyActive && !isActive ? "brightness(0.45)" : "brightness(0.7)",
                                }}
                            />
                        </div>

                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Side label — visible when NOT active */}
                        <div
                            className="absolute bottom-8 left-6 z-10"
                            style={{
                                opacity: isActive ? 0 : 1,
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <p className="font-display text-xl font-light text-white/90 tracking-wide writing-mode-vertical">
                                {svc.label}
                            </p>
                        </div>

                        {/* Expanded text — clip-path wipe reveal on hover */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-8 z-10"
                            style={{
                                clipPath: isActive ? "inset(0% 0 0% 0)" : "inset(100% 0 0% 0)",
                                transition: "clip-path 0.55s cubic-bezier(0.4, 0, 0.15, 1)",
                            }}
                        >
                            <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light text-white leading-tight mb-2">
                                {svc.label}
                            </h3>
                            <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6 max-w-[28ch]">
                                {svc.body}
                            </p>
                            <div className="flex items-center text-[#C5A059] text-xs font-semibold uppercase tracking-widest gap-2"
                                style={{ fontFamily: "var(--font-mono)", fontSize: "10px" }}>
                                Explore {svc.id}
                                <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </div>

                        {/* Top-left label always visible — subtle */}
                        <div className="absolute top-6 left-6 z-10">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">
                                0{servicesData.indexOf(svc) + 1}
                            </span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
