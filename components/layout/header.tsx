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

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Past Events", href: "/past-events" },
    { name: "FAQ", href: "/faq" },
]

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

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav"
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Logo asLink className={cn(
                        "transition-colors duration-300",
                        scrolled ? "text-white hover:text-accent" : "text-white hover:text-accent"
                    )} />
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex flex-col items-center justify-center p-4 gap-[5px] group z-50 transition-all duration-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
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

                {/* Desktop navigation */}
                {!isLandingPage && (
                    <div className="hidden lg:flex lg:gap-x-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium tracking-wide leading-6 transition-colors duration-300 group",
                                    pathname === item.href ? "text-accent" : "text-secondary hover:text-white"
                                )}
                            >
                                {item.name}
                                {/* Sliding underline */}
                                <span className={cn(
                                    "absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#D4AF6A] to-[#B38B45]",
                                    "transition-all duration-300 ease-out",
                                    pathname === item.href
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>
                )}

                <div className={cn("flex flex-1 justify-end", showDesktopCTA ? (isLandingPage ? "flex" : "hidden lg:flex") : "hidden")}>
                    <MagneticButton strength={0.25} radius={80}>
                        <Link href={HONEYBOOK_URL} target="_blank">
                            <Button
                                size="sm"
                                variant="outline"
                                className="border-white/15 text-[#F5F5F5] hover:bg-white/5 hover:text-[#C5A059] hover:border-white/25 transition-all duration-300 font-medium tracking-widest text-xs uppercase"
                            >
                                Secure a Date
                            </Button>
                        </Link>
                    </MagneticButton>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#080808] px-6 py-5 sm:max-w-sm border-l border-white/10 shadow-2xl safe-area-pb">
                        <div className="flex items-center justify-between">
                            <Logo asLink className="text-white" onClick={() => setMobileMenuOpen(false)} />
                            <button
                                type="button"
                                className="-m-2.5 inline-flex flex-col items-center justify-center p-4 gap-[5px] group z-50 transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out w-6 rotate-45 translate-y-[6px]" />
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out opacity-0 translate-x-4" />
                                <span className="block h-[1px] bg-white transition-all duration-300 ease-out w-6 -rotate-45 -translate-y-[6px]" />
                            </button>
                        </div>
                        <div className="mt-10 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-6 py-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                                            Services
                                        </p>
                                        <div className="flex flex-col gap-3 pl-3 border-l border-white/10 ml-1">
                                            <Link href="/lp/corporate" className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Corporate</Link>
                                            <Link href="/lp/nightlife" className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Nightlife</Link>
                                            <Link href="/lp/weddings" className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Weddings</Link>
                                        </div>
                                    </div>
                                    <div className="pt-4 space-y-4">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                                            Explore
                                        </p>
                                        <div className="flex flex-col gap-4 pl-3 border-l border-white/10 ml-1">
                                            <Link href="/past-events" className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Past Events Archive</Link>
                                            <Link href="/faq" className="text-xl font-light tracking-wide text-white hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <Link
                                        href={HONEYBOOK_URL}
                                        target="_blank"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Button className="w-full h-14 bg-[#C5A059] text-black hover:bg-white hover:text-black transition-colors font-semibold tracking-widest text-xs uppercase shadow-[0_0_30px_rgba(197,160,89,0.15)]">
                                            Secure a Date
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
