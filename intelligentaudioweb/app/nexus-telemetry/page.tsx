

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Search, Zap, Code2, Network, Terminal, Cpu, MousePointer2, Activity, Unlock } from "lucide-react"
import Link from "next/link"

export default function NexusTelemetryPage() {
    return (
    <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 ">

                <section className="text-center space-y-2 mb-4 pt-12 px-6">
                    <div className="">
                        <h3 className="text-blue-500 tracking-[0.3em] text-xs uppercase">The Observability Layer</h3>
                        <h1 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white">
                            Nexus<span className="text-blue-500">Telemetry</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A high-performance <span className="text-white font-medium">Native AOT</span> dashboard designed to visualize shared memory space with <span className="text-blue-400 italic font-medium">zero interference</span>.
                    </p>
                </section>


                {/* --- THE OBSERVABILITY STANDARD: VISUALIZING THE VOID --- */}
                <section className="max-w-5xl mx-auto px-6 py-32">
                    <div className="relative p-12 bg-blue-600/5 border border-blue-500/20 rounded-sm overflow-hidden group">
                        {/* Large background text for that 'Visual Identity' */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none">
                            <h2 className="text-[180px] font-bold text-blue-500">VIEW</h2>
                        </div>

                        <div className="relative space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-blue-500 font-mono tracking-[0.3em] text-xs uppercase flex items-center gap-2">
                                    <Activity className="w-4 h-4" />
                                    The Observability Standard
                                </h3>
                                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
                                    Visualizing the <br />
                                    <span className="text-blue-400 italic">Shared Memory Space.</span>
                                </h2>
                                <p className="text-slate-400 text-xl font-light max-w-2xl leading-relaxed">
                                    A dashboard is only as good as its impact on the system. We've defined
                                    a strict set of rules for the Telemetry Layer to ensure zero friction.
                                </p>
                            </div>

                            {/* The Specs as "Registry Index Boxes" */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Zero-Lock Polling",
                                        desc: "Reading the MMF header without ever touching a Mutex or Monitor. Pure read-only observation.",
                                        icon: <Unlock className="w-5 h-5 text-blue-500" />
                                    },
                                    {
                                        title: "Direct Pointer Access",
                                        desc: "Bypassing managed abstractions. Reading raw RegistryEntry structs directly from the shared RAM.",
                                        icon: <MousePointer2 className="w-5 h-5 text-blue-500" />
                                    },
                                    {
                                        title: "Skia Acceleration",
                                        desc: "Hardware-accelerated rendering to visualize 1,000,000 parameters at a steady 60 FPS.",
                                        icon: <Zap className="w-5 h-5 text-blue-500" />
                                    }
                                ].map((spec) => (
                                    <div key={spec.title} className="space-y-4 p-6 bg-slate-950/60 border border-slate-900 rounded-sm hover:border-blue-500/20 transition-all">
                                        <div className="flex items-center gap-3">
                                            {spec.icon}
                                            <span className="text-white font-bold tracking-tight">{spec.title}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {spec.desc}
                                        </p>
                                        <Badge variant="outline" className="border-blue-500/30 text-blue-500/70 font-mono text-[9px] uppercase">
                                            Telemetry Rule
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col items-center justify-center py-20 border-t border-slate-900/50">
                    <Link href="https://telemetry.intelligentaudio.net" target="_blank">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-xl font-bold rounded-sm transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                            Launch Live Portal
                        </Button>
                    </Link>
                    <p className="mt-4 text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                        Strict NANO-Compliance Mode Enabled // Authentication Required
                    </p>
                </div>



                {/* --- THE ENGINE FOR THE INTERFACE (AVALONIA) --- */}
                <section className="max-w-5xl mx-auto px-6 py-8 border-t border-slate-900/50">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2 space-y-6">
                            <h3 className="text-blue-500 font-mono tracking-[0.3em] text-[10px] uppercase">The UI Framework</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-none">
                                Built with <br />
                                <span className="text-slate-200">Avalonia 11.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                To match the raw power of the Nexus Engine, we needed a UI framework that could operate at the speed of C#. Avalonia 11 provides the perfect balance of modern flexibility and extreme performance.
                            </p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                            {/* Native AOT Feature Box */}
                            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-sm group hover:border-blue-500/30 transition-all">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-500" />
                                    Native AOT Ready
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    Compiled directly to machine code. No JIT-compilation, no managed overhead—just instant startup and a microscopic footprint.
                                </p>
                            </div>

                            {/* Direct Memory Rendering */}
                            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-sm group hover:border-blue-500/30 transition-all">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-blue-500" />
                                    Skia-Based Rendering
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    Utilizing high-performance GPU acceleration to visualize 1,000,000 parameters without dropping a single frame in the UI thread.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="p-8 mt-12 mb-8 bg-slate-950/40 border border-slate-900 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Zap className="w-32 h-32 text-blue-500" />
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-500 fill-blue-500/20" />
                        Compiled for the Metal
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl">
                        To match the performance of the Nexus Engine, the Telemetry Dashboard is built with <strong>Avalonia 11</strong> and compiled via <strong>Native AOT</strong>. This ensures a minimal memory footprint and instant startup times, running as a pure machine-code binary.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Avalonia 11", "Native AOT", "C# 14", "Zero JIT-overhead"].map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border-none font-mono text-[10px] px-3">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>


            </main>
     </div>

)}

