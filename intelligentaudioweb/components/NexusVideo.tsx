"use client"
import { useEffect, useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function NexusVideo({ src }: { src: string }) {
    const [isClient, setIsClient] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return <div className="aspect-video w-full bg-slate-950 animate-pulse rounded-sm" />

    const toggleAudio = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(videoRef.current.muted)
        }
    }

    return (
        <section className="relative w-full max-w-6xl mx-auto group">
            {/* Själva videosektionen */}
            <div className="relative aspect-video rounded-sm border border-white/10 overflow-hidden bg-[#02040a] shadow-2xl">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                >
                    <source src={src} type="video/mp4" />
                </video>
                <button
                    onClick={toggleAudio}
                    className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 px-4 py-2 transition-all active:scale-95"
                >
                    {isMuted ? (
                        <VolumeX className="w-3 h-3 text-slate-400" />
                    ) : (
                        <Volume2 className="w-3 h-3 text-blue-400" />
                    )}
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white italic">
                        {isMuted ? "Enable Audio" : "Audio Active"}
                    </span>
                </button>
            </div>

   
        </section>
    )
}
