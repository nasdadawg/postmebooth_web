import { Metadata } from 'next'
import { ResidencyHero } from '@/components/residencies/hero'
import { ValueProps } from '@/components/residencies/value-props'
import { TheDifference } from '@/components/home/the-difference'
import { FinalCta } from '@/components/home/final-cta'
import { HairlineDivider } from '@/components/ui/hairline-divider'
import { TrustedBy } from '@/components/home/trusted-by'

export const metadata: Metadata = {
    title: 'The Content Engine Residency | PostMeBooth',
    description: 'Transform your venue with our $5k/mo Residency program. We provide The Look, The Guest Data, and Weekly Recap Reels.',
}

function Divider() {
    return (
        <div style={{ padding: "0 clamp(24px, 5vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}>
            <HairlineDivider />
        </div>
    )
}

export default function ResidenciesPage() {
    return (
        <main className="min-h-screen bg-[#050505] overflow-hidden">
            {/* 9:16 Video Recap Hero (Above the Fold) */}
            <ResidencyHero />

            <TrustedBy />
            <Divider />

            {/* Value Proposition: The Look, Data, Reels */}
            <ValueProps />

            <Divider />
            <TheDifference />

            {/* Final CTA driving to HoneyBook */}
            <FinalCta />
        </main>
    )
}
