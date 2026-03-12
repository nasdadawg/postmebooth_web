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
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-4 lg:bottom-10 left-4 right-4 lg:left-10 lg:right-auto z-[100] pointer-events-none flex justify-start lg:justify-start"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="flex items-start lg:items-center gap-3 px-4 py-3 lg:px-5 lg:py-3 bg-[#050505]/90 backdrop-blur-md border border-white/10 rounded-xl lg:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)] max-w-full">
                        <span className="relative flex h-2 w-2 flex-shrink-0 mt-1.5 lg:mt-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-widest text-[#F2EFE9] uppercase leading-relaxed break-words">
                            LIVE: {data.count} Portraits delivered to guests at {data.venue} <span className="text-white/40 ml-1 inline-block">// 12m ago</span>
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
