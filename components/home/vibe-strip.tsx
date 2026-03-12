"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const VIBE_ITEMS = [
    {
        type: "video",
        src: "/events/dsrpt-noiselab-episode4/gif/0397-NOIZE_LAB_004-d1.mp4",
        label: "NIGHTLIFE // SOFITEL LA",
        aspect: "aspect-[9/16]",
        width: "w-[280px] lg:w-[320px]"
    },
    {
        type: "image",
        src: "/events/easports-battleflied6-friendsandfamily/front/0165-ripple_studios-d1-template.jpg",
        label: "CORPORATE // EA SPORTS",
        aspect: "aspect-[16/9]",
        width: "w-[400px] lg:w-[500px]"
    },
    {
        type: "video",
        src: "/events/dsrpt-ericbellinger-cover-releaseparty/gif/0361-Eric_-_ep006-d1.mp4",
        label: "WEDDING // PRIVATE ESTATE",
        aspect: "aspect-[9/16]",
        width: "w-[280px] lg:w-[320px]"
    }
]

export function VibeStrip() {
    const sectionRef = useRef<HTMLElement>(null)
    const inView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section ref={sectionRef} className="w-full py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-[11px] lg:text-[12px] font-semibold tracking-[0.2em] text-[#D4C4A8] uppercase flex items-center gap-3"
                >
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE FROM THE ROOM
                </motion.h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto hide-scrollbar pl-6 lg:pl-12 pr-6 pb-8">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-row gap-6 w-max"
                >
                    {VIBE_ITEMS.map((item, i) => (
                        <div key={i} className={`relative flex-shrink-0 ${item.width} ${item.aspect} rounded-xl overflow-hidden group bg-black/50 border border-white/5`}>
                            {item.type === "video" ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            )}

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                            {/* Label */}
                            <div className="absolute bottom-5 left-5">
                                <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-widest text-white uppercase backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-sm border border-white/10">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}
