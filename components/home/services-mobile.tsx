"use client"

import Link from "next/link"
import { servicesData } from "./services-desktop"

export function ServicesMobile() {
    return (
        <div className="mt-8 flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
            {servicesData.map((svc) => (
                <Link
                    key={svc.id}
                    href={svc.href}
                    className="group relative flex-none w-[85vw] sm:w-[60vw] snap-center overflow-hidden"
                    style={{ height: "400px" }}
                >
                    <img
                        src={svc.image}
                        alt={svc.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.65]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 z-10">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-1"
                            style={{ fontFamily: "var(--font-mono)" }}>The Experience</p>
                        <h3 className="font-display text-2xl font-light text-white mb-2">{svc.label}</h3>
                        <p className="text-xs text-[#C5A059] tracking-wider mt-1 pr-6">{svc.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
