"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BlurText } from "@/components/ui/blur-text"

const SPRING_CFG = { stiffness: 60, damping: 20, mass: 1.2 }
const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function HeroMobile() {
    const sectionRef = useRef<HTMLElement>(null)
    const inView = useInView(sectionRef, { once: true, amount: 0.15 })

    return (
        <section
            ref={sectionRef}
            className="flex lg:hidden relative flex-col justify-center bg-[#040404] min-h-[90svh] px-6 pt-32 pb-20"
        >
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 80% at 50% 30%, rgba(197,160,89,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="flex flex-col relative z-20">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING_CFG, delay: 0 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(212,196,168,0.8)",
                        marginBottom: "24px",
                    }}
                >
                    FOR LOS ANGELES
                </motion.p>

                <h1
                    className="text-[clamp(2.5rem,9.5vw,4rem)] xs:text-[3.5rem] sm:text-[4.5rem] leading-[0.95]"
                    style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                        fontWeight: 300,
                        letterSpacing: "-0.04em",
                        color: "#F2EFE9",
                        marginBottom: "32px",
                    }}
                >
                    <span className="block pr-2 whitespace-nowrap">
                        <BlurText text="THE LOOK." delay={35} duration={0.65} animateBy="chars" style={{ color: "#F2EFE9" }} />
                    </span>
                    <span className="block pr-2 whitespace-nowrap">
                        <BlurText text="THE ROOM." delay={45} duration={0.65} animateBy="chars" style={{ color: "#F2EFE9" }} />
                    </span>
                    <span className="block pr-2 whitespace-nowrap">
                        <BlurText text="CAPTURED CLEAN." delay={55} duration={0.7} animateBy="chars" style={{ color: "#C5A059", fontStyle: "italic" }} />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING_CFG, delay: 0.42 }}
                    style={{
                        fontSize: "15px",
                        color: "rgba(242,239,233,0.7)",
                        lineHeight: 1.6,
                        maxWidth: "100%",
                        fontWeight: 300,
                        marginBottom: "40px",
                    }}
                >
                    Full frame portraits and instant delivery. Guests repost. You get a private, organized archive after.
                    <br /><br />
                    <span style={{ color: "rgba(212,196,168,0.78)" }}>
                        SMS delivery · Private gallery
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING_CFG, delay: 0.54 }}
                    className="flex flex-col gap-6 w-full"
                >
                    <Link href={HONEYBOOK_URL} className="w-full">
                        <button
                            id="hero-request-access-mobile"
                            className="w-full relative overflow-hidden rounded-md"
                            style={{
                                height: "64px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "#0B0B0C",
                                background: "#C5A059",
                                border: "none",
                            }}
                        >
                            SECURE A DATE
                        </button>
                    </Link>

                    <Link
                        href="/past-events"
                        className="group flex items-center justify-center gap-3 w-full"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "rgba(242,239,233,0.8)",
                            paddingTop: "12px"
                        }}
                    >
                        <span className="border-b border-[rgba(242,239,233,0.3)] pb-1">
                            VIEW THE ARCHIVE
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
