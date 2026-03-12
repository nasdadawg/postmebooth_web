"use client"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { motion } from "framer-motion"

const PILLARS = [
    {
        title: "The Look",
        description: "Sony A7IV full-frame uncompressed studio quality. We treat your guests like editorial cover models. Zero compromises on lighting, tone, or framing.",
        number: "01"
    },
    {
        title: "The Guest Data",
        description: "Stop flying blind. Every instant text or email capture feeds directly into your CRM. You own the data of the highest-status people in your room.",
        number: "02"
    },
    {
        title: "Weekly Recap Reels",
        description: "We don't just supply the booth; we supply your social media manager. High-energy vertical 9:16 recap videos delivered to you every single week.",
        number: "03"
    }
]

export function ValueProps() {
    return (
        <section className="relative w-full py-32 lg:py-48 px-6 lg:px-12 bg-[#050505]">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20">
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                    <h2 className="font-serif text-[4rem] lg:text-[5.5rem] leading-[0.9] text-[#F2EFE9] mb-8">
                        The End of <br />
                        <span className="text-white/30 line-through">Rentals.</span>
                    </h2>
                    <p className="text-[18px] font-light text-[#F2EFE9]/80 leading-relaxed max-w-md">
                        The days of one-off $1,200 "party rentals" and chaotic photo booth generic prints are over. We are a digital-native content engine integrated into the DNA of your venue. At <span className="text-[#C5A059] font-medium">$5,000/mo</span>, you aren't paying for a booth, you are buying the highest-ROI marketing system on the floor.
                    </p>
                </div>

                <div className="w-full lg:w-[60%] flex flex-col gap-6">
                    {PILLARS.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <SpotlightCard className="p-8 lg:p-12 border-white/5 bg-[#0A0A0A]/50">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                                    <span className="font-mono text-3xl font-light text-[#C5A059]/40">{pillar.number}</span>
                                    <div>
                                        <h3 className="font-serif text-3xl text-[#F2EFE9] mb-4">{pillar.title}</h3>
                                        <p className="font-sans text-[16px] text-[#F2EFE9]/70 leading-relaxed max-w-xl">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
