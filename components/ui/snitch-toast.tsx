"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SnitchData {
    count: number
    venue: string
    timestamp: string
}

export function SnitchToast() {
    const [data, setData] = useState<SnitchData | null>(null)

    useEffect(() => {
        // In production, this would make a real API call to a local MCP endpoint or watcher API
        // which watches the BoothEvents directory.
        const fetchLatestEvent = async () => {
            try {
                // Mocking the data that an MCP watcher would extract
                setData({
                    count: Math.floor(Math.random() * 3) + 120, // 120-122
                    venue: "The Sofitel Residency",
                    timestamp: new Date().toISOString()
                })
            } catch (error) {
                console.error("Failed to fetch live proof data", error)
            }
        }

        fetchLatestEvent()
        const interval = setInterval(fetchLatestEvent, 15000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {data && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full lg:top-6 left-1/2 -translate-x-1/2 mt-4 lg:mt-0 z-[100] pointer-events-none"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="flex items-center gap-3 px-5 py-2.5 bg-[#050505]/95 backdrop-blur-md border border-[#C5A059]/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(197,160,89,0.15)]">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#F2EFE9] uppercase whitespace-nowrap">
                            LIVE: <span className="text-[#C5A059] font-semibold">{data.count}</span> Portraits just delivered to <span className="text-[#C5A059] font-semibold">{data.venue}</span> guests.
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
