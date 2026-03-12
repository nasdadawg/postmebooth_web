"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function Header() {
    const pathname = usePathname()
    const isLandingPage = pathname?.startsWith('/lp/')
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    // Only show header CTA if we're not on the home page OR we've scrolled down
    const showDesktopCTA = isLandingPage || pathname !== '/' || scrolled

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    React.useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav"
                )}
                style={{ pointerEvents: mobileMenuOpen ? "auto" : undefined }}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 relative" aria-label="Global">
                    <div className="flex z-50 md:flex-1 relative">
                        <Logo asLink className={cn(
                            "transition-colors duration-300 relative z-50",
                            scrolled ? "text-white hover:text-accent" : "text-white hover:text-accent"
                        )} />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden relative z-[100]">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex flex-col items-center justify-center p-4 gap-[5px] group transition-all duration-300 pointer-events-auto cursor-pointer touch-manipulation relative z-[100]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                        >
                            <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
                            {/* Top Line */}
                            <span
                                className={cn(
                                    "block h-[1px] bg-white transition-all duration-300 ease-out",
                                    mobileMenuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6 group-hover:w-5"
                                )}
                            />
                            {/* Middle Line */}
                            <span
                                className={cn(
                                    "block h-[1px] bg-white transition-all duration-300 ease-out",
                                    mobileMenuOpen ? "opacity-0 translate-x-4" : "w-4 opacity-100 group-hover:w-6"
                                )}
                            />
                            {/* Bottom Line */}
                            <span
                                className={cn(
                                    "block h-[1px] bg-white transition-all duration-300 ease-out",
                                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-5 group-hover:w-4"
                                )}
                            />
                        </button>
                    </div>
                    {/* Desktop navigation - REMOVED for minimalist aesthetic */}
                    <div className="hidden md:flex" />

                    <div className={cn("flex flex-1 justify-end relative z-50", showDesktopCTA ? (isLandingPage ? "flex" : "hidden md:flex") : "hidden md:flex")}>
                        <MagneticButton strength={0.25} radius={80}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white/15 text-[#F5F5F5] hover:bg-white hover:text-[#050505] transition-all duration-300 font-bold tracking-[0.16em] text-[11px] uppercase pointer-events-auto"
                                >
                                    Inquire
                                </Button>
                            </Link>
                        </MagneticButton>
                    </div>
                </nav>
            </header>

            {/* Mobile menu drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden" role="dialog" aria-modal="true" id="mobile-menu">
                    {/* Blurred Background Overlay */}
                    <div 
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity pointer-events-auto" 
                        onClick={() => setMobileMenuOpen(false)} 
                        aria-hidden="true"
                    />
                    
                    {/* Drawer Content */}
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#080808] px-6 py-5 sm:max-w-sm border-l border-white/10 shadow-2xl safe-area-pb flex flex-col pointer-events-auto">
                        <div className="flex items-center justify-between mb-8">
                            <Logo asLink className="text-white relative z-50" onClick={() => setMobileMenuOpen(false)} />
                            <button
                                type="button"
                                className="-m-2.5 inline-flex flex-col items-center justify-center p-4 gap-[5px] group z-[60] transition-all duration-300 relative"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close form"
                            >
                                <span className="sr-only">Close menu</span>
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out w-6 rotate-45 translate-y-[6px]" />
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out opacity-0 translate-x-4" />
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out w-6 -rotate-45 -translate-y-[6px]" />
                            </button>
                        </div>
                        <div className="flex-1 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-6 py-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                                            Activations
                                        </p>
                                        <div className="flex flex-col gap-3 pl-3 border-l border-white/10 ml-1">
                                            <Link href="/lp/corporate" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors block py-2">Corporate</Link>
                                            <Link href="/lp/nightlife" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors block py-2">Nightlife</Link>
                                            <Link href="/lp/weddings" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors block py-2">Weddings</Link>
                                        </div>
                                    </div>
                                    <div className="pt-4 space-y-4">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                                            Explore
                                        </p>
                                        <div className="flex flex-col gap-4 pl-3 border-l border-white/10 ml-1">
                                            <Link href="/past-events" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors block py-2">Past Events Archive</Link>
                                            <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors block py-2">FAQ</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <Link
                                        href={HONEYBOOK_URL}
                                        target="_blank"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Button className="w-full h-14 bg-[#D4C4A8] text-[#050505] hover:bg-white transition-colors font-bold tracking-[0.16em] text-[11px] uppercase shadow-[0_0_30px_rgba(212,196,168,0.15)]">
                                            Inquire
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

