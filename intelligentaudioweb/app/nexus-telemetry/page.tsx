

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Search, Zap, Code2, Network, Terminal } from "lucide-react"
import Link from "next/link"

export default function NexusTelemetryPage() {
    return (
    <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 ">

                <section className="text-center space-y-2 mb-4 pt-12 px-6">
                    <div className="">
                        <h3 className="text-blue-500 tracking-[0.3em] text-xs uppercase">The Observability Layer</h3>
                        <h1 className="ext-4xl lg:text-7xl font-bold tracking-tighter text-white">
                            Nexus<span className="text-blue-500">Telemetry</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A high-performance <span className="text-white font-medium">Native AOT</span> dashboard designed to visualize shared memory space with <span className="text-blue-400 italic font-medium">zero interference</span>.
                    </p>
                </section>

            </main>
     </div>

)}

