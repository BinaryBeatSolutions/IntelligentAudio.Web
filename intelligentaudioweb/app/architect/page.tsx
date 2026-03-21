import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Cpu, Zap, Database, Layout, ShieldAlert, Binary, Activity } from "lucide-react";

export default function Architect() {
    return (
        <div>

                <header className="space-y-4 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-blue-500"></div>
                        <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">The Autonomous Era</span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight uppercase">
                        QUANTUM <span className="text-blue-500 text-slate-700">Architecture</span> Rules
                    </h1>
                    <p className="text-muted-foreground text-lg font-mono">IntelligentAudio.NET // NXP Protocol Standards</p>
                </header>

                {/* Core Tech Stack */}
                <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors rounded-none border-l-2 border-l-blue-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-[10px] text-slate-500 uppercase tracking-widest">Runtime</CardTitle>
                            <Cpu className="w-4 h-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-white">.NET 10 AOT</div>
                            <p className="text-[10px] font-mono text-blue-400">Native Compilation Profile</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors rounded-none border-l-2 border-l-blue-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-[10px] text-slate-500 uppercase tracking-widest">Protocol</CardTitle>
                            <Binary className="w-4 h-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl text-white font-black">NXP / LPGA</div>
                            <p className="text-[10px] font-mono text-blue-400">Hardware-Bound Exchange</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors rounded-none border-l-2 border-l-blue-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-[10px] text-slate-500 uppercase tracking-widest">AI Engine</CardTitle>
                            <Zap className="w-4 h-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl text-white font-black">ONNX / Tensor</div>
                            <p className="text-[10px] font-mono text-blue-400">Direct Memory Mapping</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors rounded-none border-l-2 border-l-blue-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-[10px] text-slate-500 uppercase tracking-widest">Latency Target</CardTitle>
                            <Activity className="w-4 h-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl text-white font-black">&lt; 4.0 µs</div>
                            <p className="text-[10px] font-mono text-blue-400">Internal Bus Telemetry</p>
                        </CardContent>
                    </Card>
                </section>

                {/* Memory Management Strategy */}
                <section className="space-y-4 mt-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                        <Database className="w-6 h-6 text-blue-500" /> Memory Management Strategy (STRICT)
                    </h2>

                    <Alert className="bg-blue-500/5 border-blue-500/20 rounded-none">
                        <ShieldAlert className="w-4 h-4 text-blue-500" />
                        <AlertTitle className="text-blue-500 font-mono text-xs uppercase tracking-widest">
                            Goal: Zero-Allocation in the hot path. No GC interference.
                        </AlertTitle>
                    </Alert>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md rounded-none">
                        <CardHeader className="border-b border-slate-900">
                            <CardTitle className="text-xl text-white uppercase font-black tracking-tight">Architectural Excellence</CardTitle>
                        </CardHeader>
                        <div className="p-8 text-sm text-slate-400 space-y-6">
                            <ol className="list-decimal list-inside space-y-4 font-light leading-relaxed">
                                <li><strong className="text-white">NXP Protocol Supremacy:</strong> Forget OSC/UDP. All communication utilizes the **NEXUS Exchange Protocol**, operating at Layer 2 to bypass the IP stack overhead.</li>
                                <li><strong className="text-white">LPGA Logic Integration:</strong> Leveraging Logic Programmable Gate Architectures for hardware-accelerated packet routing, ensuring sub-microsecond handshakes.</li>
                                <li><strong className="text-white">Zero-Allocation Pipeline:</strong> Utilizing `Span&lt;T&gt;` and `Memory&lt;T&gt;` for real-time telemetry cleaning without Garbage Collector spikes.</li>
                                <li><strong className="text-white">14-Slot Hardware Auth:</strong> Instead of software handshakes, NXP uses a 14-slot physical identity verification mapped directly to the Master.</li>
                                <li><strong className="text-white">Shared Memory Ocean:</strong> A decoupled Event-Driven Architecture where the Hub Hall mirrors the Master's state across 1,000,000 concurrent slots.</li>
                                <li><strong className="text-white">Dynamic Discovery:</strong> Clients announce themselves via hardware IDs. The Master dynamically pins dedicated NXP lanes for each instance.</li>
                            </ol>
                        </div>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Card className="bg-slate-950/40 border-slate-900 rounded-none border-t-2 border-t-blue-500">
                            <CardHeader><CardTitle className="text-sm font-bold text-white uppercase tracking-widest">Low-Level Constraints</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-xs font-mono text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> USE SPAN&lt;T&gt; FOR ALL BUFFER OPERATIONS</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> NO LINQ IN HOT PATHS</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> NO BOXING / UNBOXING</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> FOR-LOOPS ONLY (AVOID ENUMERATORS)</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> ARRAYPOOL&lt;T&gt; FOR RECURRING TELEMETRY</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-950/40 border-slate-900 rounded-none border-t-2 border-t-slate-700">
                            <CardHeader><CardTitle className="text-sm font-bold text-white uppercase tracking-widest">NXP Telemetry Status</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-black/40 border border-slate-900">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] text-blue-500 font-bold uppercase">NXP Payload Slot</span>
                                        <span className="text-[10px] text-slate-600">14-SLOT VERIFIED</span>
                                    </div>
                                    <code className="text-[10px] text-slate-400">Handshake: 4.0µs // Offset: 24-byte</code>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
     
        </div>
    );
}