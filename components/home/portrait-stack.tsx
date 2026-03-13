
import { cn } from "@/lib/utils"

export function PortraitStack() {
    return (
        <div className="relative h-full min-h-[500px] w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center p-8">
            {/* Card 3 - Back - New Year's Eve */}
            <div className="absolute right-0 top-12 w-48 lg:w-56 aspect-[9/16] rounded-lg overflow-hidden border border-white/5 bg-surface-highlight transform rotate-6 hover:rotate-3 transition-transform duration-500 shadow-2xl opacity-60 z-0 scale-90">
                <img
                    src="/events/jstaparty-newyears/front/0045-nye-d1-template (1).jpg"
                    alt="New Year's Eve"
                    className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Nightlife</span>
                </div>
            </div>

            {/* Card 2 - Middle - Equinox */}
            <div className="absolute left-4 top-4 w-48 lg:w-56 aspect-[9/16] rounded-lg overflow-hidden border border-white/5 bg-surface-highlight transform -rotate-3 hover:-rotate-1 transition-transform duration-500 shadow-2xl z-10 opacity-80 scale-95">
                <img
                    src="/events/flair-runclub-eqinox-v2/front/0101-FLAIR_-d1.mp4"
                    alt="Equinox Run Club II"
                    className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Corporate</span>
                </div>
            </div>

            {/* Card 1 - Front - La Maison Olivera */}
            <div className="relative w-56 lg:w-64 aspect-[9/16] rounded-lg overflow-hidden border border-white/10 bg-surface-highlight transform rotate-0 hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-20">
                <img
                    src="/events/la-maison-olivera/front/0013-Gabe_Oliveiras_25th_birthday-d1-template.jpg"
                    alt="La Maison Olivera"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1 block">Nightlife</span>
                </div>
            </div>
        </div>
    )
}
