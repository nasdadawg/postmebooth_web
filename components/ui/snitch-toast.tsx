"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SnitchToast() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <AnimatePresence>
            {mounted && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="fixed bottom-6 lg:bottom-10 left-6 lg:left-10 right-auto z-[90] pointer-events-none flex justify-start"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="flex flex-col items-start gap-1 pb-2.5 pt-3.5 px-5 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-xl lg:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] max-w-full">
                        <div className="flex items-center gap-3" aria-label="Shared on social media">
                            {/* Pulse dot */}
                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>

                            {/* Label */}
                            <span
                                className="uppercase tracking-[0.18em] text-[10px]"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 600,
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                Shared
                            </span>

                            <div className="flex items-center gap-2.5 ml-1">
                                {/* IG icon */}
                                <svg
                                    width="13" height="13" viewBox="0 0 24 24" fill="none"
                                    stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    aria-label="Instagram"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.6)" stroke="none" />
                                </svg>

                                {/* TikTok icon */}
                                <svg
                                    width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"
                                    aria-label="TikTok"
                                >
                                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                                </svg>
                            </div>
                        </div>
                        <span className="font-mono text-[9px] font-medium tracking-widest text-white/40 uppercase pl-5 mt-0.5">
                            Delivered on-site
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
