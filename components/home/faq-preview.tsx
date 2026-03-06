"use client"

import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
    {
        category: "Space & Setup",
        items: [
            { q: "How much space do you need?", a: "Enough room for the booth setup and a clear guest line. We’ll confirm layout based on your venue." },
            { q: "How long is setup?", a: "We arrive early and set up before guests are in the way. Exact timing depends on venue access." }
        ]
    },
    {
        category: "Output & Delivery",
        items: [
            { q: "Is delivery digital only?", a: "Yes. We optimize for digital: instant SMS or email sharing so guests can post immediately." },
            { q: "Do you offer GIFs or boomerangs?", a: "Yes. Motion formats are captured alongside still portraits." },
            { q: "Can we add a logo or event overlay?", a: "Yes. Clean, bespoke digital framing is included to match your event." },
            { q: "How does delivery work?", a: "Guests get photos sent directly to their phones via SMS or email. You get a link to the complete private gallery after the event." }
        ]
    },
    {
        category: "Booking & Logistics",
        items: [
            { q: "What areas do you serve?", a: "Los Angeles, California. Travel beyond LA requires a custom quote." },
            { q: "What’s the booking process?", a: "Submit an inquiry to confirm availability. We’ll send a proposal, and a 50% retainer locks the date." }
        ]
    }
]

export function FaqPreview() {
    return (
        <section className="bg-[#050505] py-16 md:py-24 px-6 lg:px-8 border-t border-white/5" id="faq">
            <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 lg:gap-24">
                {/* Header Column */}
                <div>
                    <h2
                        className="font-serif text-[#F5F5F5] mb-4"
                        style={{
                            fontSize: "clamp(32px, 4vw, 52px)",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.0,
                        }}
                    >
                        FAQ
                    </h2>
                    <p
                        className="mb-8"
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.35)",
                            lineHeight: 1.7,
                            fontWeight: 300,
                        }}
                    >
                        Quick answers. No back and forth.
                    </p>
                </div>

                {/* Accordion Column */}
                <div className="lg:col-span-2 space-y-16">
                    {FAQS.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <h3 className="mb-6 text-[#C8B08A] tracking-[0.16em] uppercase"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                                    paddingBottom: "16px",
                                }}>
                                {cat.category}
                            </h3>
                            <Accordion type="single" collapsible className="w-full">
                                {cat.items.map((item, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`item-${catIdx}-${idx}`}
                                        style={{ borderColor: "rgba(255,255,255,0.08)" }}
                                    >
                                        <AccordionTrigger
                                            className="text-left hover:no-underline"
                                            style={{
                                                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                                                fontSize: "clamp(17px, 2vw, 21px)",
                                                fontWeight: 300,
                                                letterSpacing: "-0.01em",
                                                color: "#F2EFE9",
                                            }}
                                        >
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent
                                            style={{
                                                fontSize: "14px",
                                                color: "rgba(255,255,255,0.45)",
                                                lineHeight: 1.8,
                                                fontWeight: 300,
                                                paddingBottom: "24px",
                                            }}
                                        >
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
