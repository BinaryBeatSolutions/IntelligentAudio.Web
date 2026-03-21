import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Lock, Cpu, ArrowRight, Binary, Activity, Layers, Database, Radio, Badge } from "lucide-react"
import Link from "next/link"
import MermaidWrapper from "../../components/MermaidWrapper";

const chartCodePast = `
graph LR
    subgraph "Standard Infrastructure (The 'Old' Way)"
        A[User Device] -->|HTTPS/JSON| B[Public DNS]
        B --> C[Identity Provider]
        C --> B
        B --> D[Cloud Load Balancer]
        D --> E[API Gateway]
        E --> F[Microservice]
        F --> G[(Unencrypted DB)]
        G --> F
        F --> A
    end
    style G fill:#411,stroke:#f44,stroke-width:2px
    style A fill:#333,stroke:#666
    style B fill:#222,stroke:#444
`;

const chartCodeFuture = `
graph LR
    subgraph "NEXUS Ecosystem (The NXP Standard)"
        H[NEXUS.Space] <==>|Binary nxp:// Stream| I{NXP Gateway}
        I <==>|Hardware Auth| J[Magic Key Validator]
        J <==>|Kernel Bypass| K[Nexus HUB Vault]
        K <==>|Local Inference| L[Specialized AI Services]
    end
    style H fill:#002244,stroke:#0066cc,stroke-width:2px
    style K fill:#002244,stroke:#0066cc,stroke-width:2px
    style L fill:#003311,stroke:#008800,stroke-width:3px
`;


export default function LandingPage() {
    return (
        <div>
                { /*Page content*/}


                <section className="mb-24 space-y-12 max-w-5xl mx-auto font-sans">
                    <div className="border-l-4 border-blue-600 pl-8 py-2">
                        <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                            Critical Infrastructure Gap
                        </h3>
                        <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-tight italic">
                            Why your current AI strategy is a <span className="text-slate-600">legal and technical hostage.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-light leading-relaxed">
                        <div className="space-y-6">
                            <p className="text-xl">
                                Most organizations believe that standard encryption (SSL/TLS) is enough. But the truth is, the moment your data leaves the building in a <span className="text-white font-medium italic underline decoration-blue-500/30">standard JSON packet</span>, you have surrendered physical control.
                            </p>
                            <p className="border-t border-slate-900 pt-6 text-sm italic">
                                In today&apos;s legacy cloud, your information passes through dozens of unverified &quot;hops&quot;. Every hop is an opportunity for <span className="text-blue-400 font-medium">latency spikes</span>, third-party metadata harvesting, and foreign jurisdiction oversight (Cloud Act).
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl text-white font-medium italic">
                                NEXUS with the NXP protocol erases the middleman.
                            </p>
                            <div className="bg-blue-600/5 p-8 border border-blue-500/10 rounded-sm italic relative">
                                <div className="absolute -top-3 left-4 bg-[#02040a] px-2 text-[9px] text-blue-500 uppercase tracking-widest font-bold">The Nexus Reality</div>
                                <p className="text-slate-300 leading-relaxed">
                                    &quot;We have eliminated the need to &apos;trust&apos; a cloud provider. By routing a binary stream directly to your local or dedicated HUB node, we create an architecture where data isn&apos;t just encrypted – it is <span className="text-blue-400 font-bold">physically inaccessible</span> to anyone without your Magic Key.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* THE "YOU DON'T HAVE THIS" COMPARISON */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                        <div className="p-6 bg-slate-950/50 border border-slate-900 rounded-sm flex flex-col justify-between">
                            <p className="text-slate-500 font-bold text-[10px] uppercase mb-4 tracking-widest">Legacy IT Stack</p>
                            <p className="text-slate-400 text-xs italic leading-relaxed">Dependent on public DNS, foreign certificate authorities, and shared network paths.</p>
                        </div>
                        <div className="p-6 bg-slate-950/50 border border-slate-900 rounded-sm flex flex-col justify-between">
                            <p className="text-slate-500 font-bold text-[10px] uppercase mb-4 tracking-widest">Public Cloud AI</p>
                            <p className="text-slate-400 text-xs italic leading-relaxed">Data stored in shared multi-tenant environments with secondary access for providers.</p>
                        </div>
                        <div className="p-6 bg-blue-600/10 border border-blue-500/30 rounded-sm flex flex-col justify-between shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                            <p className="text-blue-400 font-bold text-[10px] uppercase mb-4 tracking-widest">NEXUS NXP Core</p>
                            <p className="text-white text-xs italic leading-relaxed font-medium">Isolated binary tunnels. Your hardware. Your laws. Absolute data containment.</p>
                        </div>
                    </div>
                </section>


                {/* NXP TECHNICAL SPECIFICATION SECTION */}
                <section className="mb-40 space-y-4">
                    <section className="mt-8 mb-20 text-center space-y-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
                        {/* BINARY INTERFACE BOX */}
                        <div className="p-10 border border-slate-900 bg-slate-950/60 backdrop-blur-xl rounded-sm">
                            <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-[0.4em] mb-6">Binary Interface Standard</h3>
                            <p className="text-slate-200 text-xl font-light leading-relaxed italic mb-8">
                                NXP bypasses the standard OS network stack. By utilizing <span className="text-white font-medium border-b border-blue-500/30">Kernel Bypass</span>, we map memory directly to the high-frequency data stream.
                            </p>
                            <ul className="space-y-3 text-sm text-slate-500 font-mono italic">
                                <li>&gt; No JSON Overhead</li>
                                <li>&gt; Zero Context Switching</li>
                                <li>&gt; Deterministic Packet Arrival</li>
                            </ul>
                        </div>

                        {/* DETERMINISTIC STREAMING BOX */}
                        <div className="p-10 border border-slate-900 bg-slate-950/60 backdrop-blur-xl rounded-sm border-t-blue-500/30">
                            <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-[0.4em] mb-6">High-Frequency Determinism</h3>
                            <p className="text-slate-200 text-xl font-light leading-relaxed italic mb-8">
                                Every frame in the NXP ecosystem is <span className="text-white font-medium italic">Clock-Synchronized</span> at the hardware level. This ensures absolute integrity for AI-Inference and Retail Supply Chains.
                            </p>
                            <div className="flex gap-4">
                                <Badge className="bg-blue-600/10 border-blue-500/20 text-blue-400 text-[9px] uppercase tracking-widest">RDMA Capable</Badge>
                                <Badge className="bg-blue-600/10 border-blue-500/20 text-blue-400 text-[9px] uppercase tracking-widest">L1-Optimized</Badge>
                            </div>
                        </div>
                    </div>
                </section>





                <div className="space-y-12 w-full max-w-6xl mx-auto font-sans">

                    {/* FUTURE ARCHITECTURE: NXP STREAM */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-sm blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-slate-950/80 border border-blue-500/30 backdrop-blur-xl p-8 rounded-sm shadow-2xl">
                            <div className="flex justify-between items-center mb-8 border-b border-blue-500/10 pb-4">
                                <div>
                                    <h3 className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] mb-1">Current Standard</h3>
                                    <p className="text-xl font-bold text-white tracking-tighter italic">The NXP Sovereign Stream</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                    <span className="text-[10px] font-mono text-blue-500/50 uppercase tracking-widest italic">Deterministic Logic</span>
                                </div>
                            </div>
                            <div className="w-full transition-all duration-700 group-hover:scale-[1.01] overflow-hidden">
                                <MermaidWrapper code={chartCodeFuture} />
                            </div>
                            <p className="mt-6 text-[11px] text-slate-500 font-light italic leading-relaxed">
                                Binary exchange bypassing kernel overhead. Every node is hardware-attested via Magic Key.
                            </p>
                        </div>
                    </div>

                    {/* PAST ARCHITECTURE: LEGACY CLOUD */}
                    <div className="group relative opacity-60 hover:opacity-100 transition-opacity duration-700">
                        <div className="relative bg-slate-950/40 border border-slate-900 backdrop-blur-sm p-8 rounded-sm">
                            <div className="flex justify-between items-center mb-8 border-b border-slate-900 pb-4">
                                <div>
                                    <h3 className="text-slate-600 font-black uppercase tracking-[0.4em] text-[10px] mb-1">Legacy Stack</h3>
                                    <p className="text-lg font-bold text-slate-400 tracking-tighter italic">Standard Cloud Complexity</p>
                                </div>
                                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest italic">Request-Response Latency</span>
                            </div>
                            <div className="w-full transition-all duration-700 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 overflow-hidden">
                                <MermaidWrapper code={chartCodePast} />
                            </div>
                            <p className="mt-6 text-[11px] text-slate-700 font-light italic leading-relaxed">
                                Traditional multi-hop routing with heavy JSON serialization. High surface area for data interception.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
    );
}