import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Search, Zap, Code2, Network, Terminal, Cpu, Layers, Box, Shield, TrendingDown, ArrowRight, Globe, Cloud } from "lucide-react"
import Link from "next/link"

export default function NexusPulsePage() {
    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 ">

                {/*HEADER*/ }
                <section className="text-center space-y-8 mb-8">
                    <h1 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white">
                        Nexus<span className="text-blue-500">Pulse</span>
                    </h1>
                    <p className="sm:text-md md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Engineered with <span className="text-blue-400 font-medium whitespace-nowrap">the Zero-Latency Parameter Engine</span>
                    </p>
                </section>

                <section className="mt-32 mb-20 text-center space-y-6">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">New Standard: NXP://</span>
    </div>
    
    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
        Beyond <span className="text-slate-500">HTTP.</span> Beyond <span className="text-slate-500">gRPC.</span>
    </h2>
    
    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
        Introducing <span className="text-white font-mono">nxp://</span> – a specialized binary exchange protocol engineered for deterministic telemetry and high-frequency data streams.
    </p>

    {/* PROTOCOL URI EXAMPLE */}
    <div className="max-w-xl mx-auto mt-10 p-4 bg-slate-950 rounded-lg border border-slate-800 font-mono text-sm relative group">
        <div className="absolute -top-3 left-4 px-2 bg-[#02040a] text-[10px] text-slate-500 uppercase tracking-widest">
            Connection String
        </div>
        <code className="text-blue-400">
            nxp://<span className="text-white">pulse.intelligentaudio.net</span>:<span className="text-blue-300">8080</span>/<span className="text-slate-500">live</span>
        </code>
    </div>
</section>


                {/* PERFORMANCE METRICS GRID */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 relative">
    <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800/50 backdrop-blur-sm">
        <div className="text-blue-500 mb-2"><Zap size={20} /></div>
        <div className="text-3xl font-mono font-bold text-white">11,858<span className="text-sm text-slate-500 ml-1">ns</span></div>
        <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Ingestion Latency</div>
    </div>
    <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800/50 backdrop-blur-sm">
        <div className="text-blue-500 mb-2"><Layers size={20} /></div>
        <div className="text-3xl font-mono font-bold text-white">1,000,000</div>
        <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Entity Pulse Capacity</div>
    </div>
    <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800/50 backdrop-blur-sm">
        <div className="text-blue-500 mb-2"><Box size={20} /></div>
        <div className="text-3xl font-mono font-bold text-white">24<span className="text-sm text-slate-500 ml-1">bytes</span></div>
        <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Symmetrical NXP Frame</div>
    </div>
</section>

{/* THE PROTOCOL EXPLAINER */}
<section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
    <div className="space-y-6">
        <Badge variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/5 px-4 py-1">
            NXP Protocol v1.0
        </Badge>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The Death of the <br />
            <span className="text-slate-500 font-light">Serialization Tax.</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
            Traditional cloud services choke on JSON and Protobuf overhead. <strong>NEXUS.Pulse</strong> operates on the hardware level. By utilizing 24-byte symmetrical frames, we stream raw memory layouts directly to the wire. 
        </p>
        <div className="flex gap-4 pt-4">
            <Link href="https://telemetry.intelligentaudio.net">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8">
                    View Live Pulse
                </Button>
            </Link>
        </div>
    </div>

    {/* PROTOCOL VISUALIZATION - Denna bit förklarar din 24-byte symmetri */}
    <div className="bg-slate-900/20 border border-slate-800 rounded-3xl p-8 font-mono text-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Network size={120} className="text-blue-500" />
        </div>
        <div className="space-y-4 relative">
            <div className="pb-4 border-b border-slate-800">
                <span className="text-blue-400">// NXP Header - 24 Bytes</span>
                <div className="grid grid-cols-2 gap-2 mt-2 text-slate-300">
                    <div>AppKeyHash</div><div className="text-right text-slate-500 text-xs">8 Bytes</div>
                    <div>Timestamp</div><div className="text-right text-slate-500 text-xs">8 Bytes</div>
                    <div>Metadata</div><div className="text-right text-slate-500 text-xs">8 Bytes</div>
                </div>
            </div>
            <div className="pt-2">
                <span className="text-blue-400">// Payload - 24 Bytes / Entry</span>
                <div className="flex flex-wrap gap-1 mt-3">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold">
                            P
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-600 italic">
                        ...
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



             </main>
        </div>
    );
}