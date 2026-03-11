import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Search, Zap, Code2, Network, Terminal, Cpu, Layers, Box, Shield, TrendingDown, ArrowRight, Globe, Cloud } from "lucide-react"
import Link from "next/link"

export default function NexusPage() {
    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 ">

                {/*HEADER*/ }
                <section className="text-center space-y-8 mb-8">
                    <h1 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white">
                        Nexus<span className="text-blue-500">Engine</span>
                    </h1>
                    <p className="sm:text-md md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Engineered with <span className="text-blue-400 font-medium whitespace-nowrap">the Zero-Latency Parameter Engine</span>
                    </p>
                </section>

                {/* --- Nexus Engine: Shared Memory Section --- */}
                <section className="max-w-5xl mx-auto px-6 pt-16 pb-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="space-y-8 lg:w-1/2">
                            <div className="space-y-2">
                                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                                    Beyond Traditional
                                </h2>
                                <span className="text-slate-500 text-2xl lg:text-4xl font-bold block">Storage Models.</span>
                            </div>

                            <p className="text-2xl lg:text-3xl text-blue-400 font-medium leading-snug italic">
                                &#34;Nexus is not a database. <br />It is a shared memory space.&#34;
                            </p>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                Instead of relying on sluggish disk I/O or heavy API layers, Nexus maps its entire registry directly into the system&#39;s RAM. Using <strong>Memory-Mapped Files (MMF)</strong>, we&#39;ve created a zero-latency bridge where the engine and the dashboard exist in the same physical memory space.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:w-1/2 lg:pt-4">
                            <div className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                    <h4 className="text-white font-bold tracking-wide uppercase text-sm group-hover:text-blue-400 transition-colors">Engine Access</h4>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    Utilizing <span className="text-slate-200 font-mono">unsafe pointers</span> and Binary Search for nanosecond lookups during the audio hot-path. No locks, no waiting.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                    <h4 className="text-white font-bold tracking-wide uppercase text-sm group-hover:text-blue-400 transition-colors">Dashboard Telemetry</h4>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    Non-blocking polling of the MMF header. Visualizing 1,000,000 slots with zero overhead on the processing thread. <Link className="text-blue-400" href="/nexus-telemetry">See Dashboard</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- THE NANO STANDARD: THE NEW BASELINE --- */}
                <section className="max-w-5xl mx-auto px-6 py-32">
                    <div className="relative p-12 bg-blue-600/5 border border-blue-500/20 rounded-sm overflow-hidden group">
                        {/* Subtle background text for that 'Standard' feel */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none">
                            <h2 className="text-[200px] font-bold text-blue-500">NANO</h2>
                        </div>

                        <div className="relative space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-blue-500 font-mono tracking-[0.3em] text-xs uppercase flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    The NANO Standard
                                </h3>
                                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
                                    Defining a New <br />
                                    <span className="text-blue-400 italic">Engineering Baseline.</span>
                                </h2>
                                <p className="text-slate-400 text-xl font-light max-w-2xl">
                                    Performance is not a goal; it is a constraint. Every line of code in Nexus
                                    must adhere to the NANO principles to guarantee real-time integrity.
                                </p>
                            </div>

                            {/* The Specs as "Index Boxes" */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Zero-Allocation",
                                        desc: "Strictly prohibiting heap-churn in the hot path using Span<T> and ArrayPool.",
                                        icon: <Zap className="w-5 h-5 text-blue-500" />
                                    },
                                    {
                                        title: "No Boxing",
                                        desc: "Ensuring every byte is predictable. No hidden overhead, just raw value-type speed.",
                                        icon: <Box className="w-5 h-5 text-blue-500" />
                                    },
                                    {
                                        title: "O(log n) Scale",
                                        desc: "Sorted binary indexing ensures consistent latency across 1,000,000 parameters.",
                                        icon: <TrendingDown className="w-5 h-5 text-blue-500" />
                                    }
                                ].map((spec) => (
                                    <div key={spec.title} className="space-y-4 p-6 bg-slate-950/60 border border-slate-900 rounded-sm">
                                        <div className="flex items-center gap-3">
                                            {spec.icon}
                                            <span className="text-white font-bold tracking-tight">{spec.title}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {spec.desc}
                                        </p>
                                        <Badge variant="outline" className="border-blue-500/30 text-blue-500/70 font-mono text-[9px] uppercase">
                                            Mandatory
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- The Indexing Strategy (Clean Flow) --- */}
                <section className="max-w-5xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">

                        <div className="lg:w-1/2 space-y-6">
                            <h3 className="text-blue-500 font-mono tracking-[0.3em] text-xs uppercase">The Indexing Strategy</h3>
                            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-none">
                                Massive Scale. <br />
                                <span className="text-slate-700 italic">Constant Speed.</span>
                            </h2>
                        </div>

                        <div className="lg:w-1/2 space-y-8 pt-2">
                            <p className="text-slate-400 text-xl font-light leading-relaxed">
                                Nexus utilizes a strictly sorted, memory-mapped  <strong>Index Table</strong>. While a theoretical binary search for 1,000,000 entries requires ~20 logical comparisons, our architecture is engineered for L1/L2 Cache Locality.
                                By aligning our raw 24-byte structs to the CPU cache line, we’ve collapsed the search space.
                                <br/><br/>
                                  Retrieving any parameter—regardless of dataset size—takes only 6–7 real-world memory hops.
                                  Sub-microsecond execution time that remains constant whether the registry holds 10 or 1,000,000 entries.
                            </p>

                            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4 border-t border-slate-900">
                                <div>
                                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Algorithm</span>
                                    <span className="text-blue-400 font-medium">Binary Search</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Complexity</span>
                                    <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-4">O(log n)</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Memory Footprint</span>
                                    <span className="text-slate-300 font-medium tracking-tight">24.0 MB Fixed</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- THE BRIDGE TO TELEMETRY --- */}
                <section className="max-w-5xl mx-auto px-6 py-32 text-center">
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tighter">
                            Theory is nothing without <span className="text-blue-500 italic">Visibility.</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            NANO principles ensure the engine stays silent and fast.
                            The Telemetry Dashboard makes the invisible shared memory space visible.
                        </p>

                        <div className="pt-8">
                            <a href="/nexus-telemetry" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all group">
                                Explore Nexus Telemetry Dashboard
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <p className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.4em] pt-4">
                            Connection: Shared Memory (MMF) | Heartbeat: 200ms
                        </p>
                    </div>
                </section>

                {/* --- THE CLOUD BRIDGE: HYBRID-CLOUD SYNCHRONIZATION --- */}
                <div className="p-8 mt-12 bg-slate-950/40 border border-slate-900 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-blue-500">
                        <Cloud className="w-32 h-32" />
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-500 fill-blue-500/20" />
                        Hybrid-Cloud Intelligence
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl">
                        Nexus doesn't work in isolation. When a new VST or Parameter is discovered,
                        the engine initiates a <strong>0-RTT handshake</strong> via Vercel Edge.
                        Metadata is fetched over <strong>HTTP/3 (QUIC)</strong> and patched directly
                        into the local MMF registry—seamlessly expanding the engine's knowledge
                        without ever dropping a sample.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["Vercel Edge Config", "HTTP/3 QUIC", "0-RTT Handshake", "Global Metadata"].map(tag => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-blue-500/10 text-blue-400 border-none font-mono text-[10px] px-3 uppercase tracking-wider"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>



                {/* --- THE NEXUS SPECS - CONSISTENT BADGE DESIGN --- */}
                <div className="p-8 mt-12 bg-slate-950/40 border border-slate-900 rounded-sm relative overflow-hidden group mb-12">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Cpu className="w-32 h-32 text-blue-500" />
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-500 fill-blue-500/20" />
                        The Registry Architecture
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl">
                        Nexus operates on a pre-allocated 24.0 MB binary memory map.
                        By bypassing the standard heap, we ensure that parameter lookups never trigger
                        Garbage Collection, maintaining a solid 100ns response time even under heavy load.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["MemoryMappedFiles", "Zero-Allocation", "O(log n)", "Lock-Free"].map(tag => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-blue-500/10 text-blue-400 border-none font-mono text-[10px] px-3 uppercase tracking-wider"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}