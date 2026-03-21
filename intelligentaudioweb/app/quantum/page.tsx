import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Lock, Cpu, ArrowRight, Binary, Activity, Layers, Database, Globe, MousePointer2, Badge } from "lucide-react"
import Link from "next/link"
import NexusVideo from "../../components/NexusVideo"

export default function QuantumPage() {
    return (
        <div>

                {/* --- THE ARCHITECT'S NOTE --- */}
                <section className="max-w-6xl mx-auto border-b border-slate-900">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px]  tracking-[0.4em] text-blue-500 font-bold">The Architect's Note</span>
                            <div className="h-[1px] flex-1 bg-slate-900"></div>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                            Forget everything you learned about the internet and technology.
                            <span className="block text-slate-700">We are not using it.</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 pt-8 pb-12">
                            <p className="text-xl text-slate-400 leading-relaxed">
                                NEXUS.Quantum is not a faster version of the old web. It is a fundamental departure from IP-based limitations.
                                By replacing the layers of lag with a direct hardware-to-master link.
                            </p>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                This is the first autonomous ecosystem where the machine in your hand is merely a window to the supercomputer
                                operating at the edge of your own office.
                            </p>
                        </div>
                    </div>
                </section>


                {/* SUPERCOMPUTER ARGUMENT */}
                <div className="mb-32 py-12">
                    <h2 className="text-center text-4xl font-bold mb-16">A Supercomputer in your Pocket</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Cpu className="w-8 h-8 text-blue-500" />}
                            title="Hardware Agnostic"
                            description="Run heavy 3D software on a $500 laptop. The NEXUS Hub provides the muscle; your screen is just the window."
                        />
                        <FeatureCard
                            icon={<Activity className="w-8 h-8 text-blue-500" />}
                            title="Zero-Lag Rendering"
                            description="Complex 3D scenes that took 45 minutes to render now finish in 45 seconds. Instant results, always."
                        />
                        <FeatureCard
                            icon={<Layers className="w-8 h-8 text-blue-500" />}
                            title="Infinite Scalability"
                            description="Need power for 100 new employees? We mirror your installation in our HUB-hall instantly. No downtime."
                        />
                    </div>
                </div>

                {/* CINEMATIC VISION - THE NEXUS REVEAL */}
                <section className="mb-40 relative group">
                    {/* Glow-effekt bakom filmen */}
                    <div className="absolute -inset-1 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative overflow-hidden shadow-2xl">
                        <div className="aspect-video w-full relative">
                        <NexusVideo src="/NEXUS-264.mp4" />
                        </div>
                    </div>
            </section>

            {/* --- PERFORMANCE NOTATION: THE NANOSECOND STANDARD --- */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <div className="relative group">
                    {/* Subtle glow background */}
                    <div className="absolute -inset-0.5 bg-blue-500/10 rounded-none blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative p-8 border border-slate-800 bg-slate-950/80 backdrop-blur-xl">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* The "Big Number" Visual */}
                            <div className="flex-shrink-0 text-center md:text-left">
                                <div className="text-4xl font-black text-white tracking-tighter leading-none mb-1">
                                    1 MILLION <span className="text-blue-500">SLOTS</span>
                                </div>
                                <div className="text-2xl font-mono text-slate-500 font-bold">
                                    17.79 MS EXECUTION
                                </div>
                            </div>

                            {/* The Descriptive Text */}
                            <div className="flex-1 space-y-3">
                                <p className="text-slate-300 leading-relaxed font-light italic">
                                    "While standard enterprise systems measure latency in milliseconds, <strong className="text-white">NEXUS.Quantum</strong> measures in nanoseconds. Our verified baseline shows a full lifecycle for one million hardware-bound slots in under 18ms."
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">Zero-Copy</span>
                                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">Zero-Lag</span>
                                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">Zero-Competition</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



                {/* --- QUANTUM: THE IP-LESS NETWORK SECTION --- */}
                <section className="py-8 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold  tracking-widest">
                                    Security Architecture
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                                    The IP-less <span className="text-blue-500">Network.</span>
                                </h2>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    Traditional internet relies on 40-year-old IP addresses—addresses that can be tracked, scanned, and hacked.
                                    <span className="text-white"> QUANTUM discards the old technology.</span>
                                </p>
                                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 italic text-slate-300 border-l-4 border-l-blue-500">
                                    &#34;For the outside world, your network does not exist. No ports to knock on, no addresses to ping.
                                    We have created a digital ghost infrastructure where security is built directly into the hardware.&#34;
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 gap-4 w-full">
                                <div className="group p-8 rounded-3xl bg-[#0a0c14] border border-slate-800 hover:border-blue-500/50 transition-all">
                                    <ShieldCheck className="w-10 h-10 text-blue-500 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2 font-mono">STEALTH MODE</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Without an IP stack, there is nothing for a hacker to scan. Your local HUB is physically invisible to the public web.
                                    </p>
                                </div>
                                <div className="group p-8 rounded-3xl bg-[#0a0c14] border border-slate-800 hover:border-blue-500/50 transition-all">
                                    <Binary className="w-10 h-10 text-blue-500 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2 font-mono">HARDWARE TRUTH</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Identity is locked to the silicon. Only verified hardware IDs can communicate with the Master. No spoofing, no faking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* --- QUANTUM: FULL WIDTH SUPERCOMPUTER ARCHITECTURE --- */}
                <section className="w-full py-24 border-y border-slate-900 bg-[#02040a]">
                    <div className="w-full">
                        <Card className="bg-slate-950 border-y border-blue-500/20 overflow-hidden relative rounded-none border-l-0">
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />

                            <CardHeader className="border-b border-slate-900 bg-slate-900/10 p-8 md:px-16">
                                <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-[1px] w-8 bg-blue-500"></div>
                                            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Architect&#39;s Infrastructure</span>
                                        </div>
                                        <CardTitle className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                                            Quantum <span className="text-blue-500">Distributed</span> Compute
                                        </CardTitle>
                                    </div>
                                    <div className="hidden md:flex gap-4">
                                        <div className="text-right">
                                            <p className="text-[10px] font-mono text-slate-500 uppercase">System Status</p>
                                            <p className="text-xs font-mono text-green-400">MASTER LINK ESTABLISHED</p>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="p-0">
                                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2">
                                    {/* Left: The "Window" Concept */}
                                    <div className="p-8 md:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-slate-900">
                                        <div className="space-y-6">
                                            <h4 className="text-2xl font-bold text-white flex items-center gap-3 tracking-tighter">
                                                <MousePointer2 className="w-6 h-6 text-blue-500" />
                                                The Device is a Window
                                            </h4>
                                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                                Forget the hardware in your hand. In the Quantum ecosystem, your device is merely a <strong className="text-white font-bold">Viewport</strong>. All heavy lifting—3D rendering, AI processing, and complex logic—is executed at the Edge.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-none border-l-2 border-l-slate-700">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Load</span>
                                                    <span className="text-[10px] font-mono text-slate-600 italic">Idle State</span>
                                                </div>
                                                <div className="text-3xl font-mono font-bold text-white mb-2">0.2<span className="text-sm text-slate-600">%</span></div>
                                                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500/20 w-[2%]"></div>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-none border-l-2 border-l-blue-500">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Quantum Core</span>
                                                    <span className="text-[10px] font-mono text-blue-500/50 italic">Processing</span>
                                                </div>
                                                <div className="text-3xl font-mono font-bold text-blue-500 mb-2">99.8<span className="text-sm text-blue-800">%</span></div>
                                                <div className="h-1 w-full bg-blue-950 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 animate-pulse w-[98%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: The Raw Metrics (Performance) */}
                                    <div className="p-8 md:p-16 bg-black/40 flex flex-col justify-center space-y-12">
                                        <div className="space-y-6">
                                            {[
                                                { label: "8K 3D Rendering", val: "REAL-TIME", desc: "No upload, no download, zero wait", color: "text-blue-400" },
                                                { label: "AI Model Injection", val: "INSTANT", desc: "Master-level intelligence locally shared", color: "text-white" },
                                                { label: "Network Latency", val: "N/A", desc: "IP-Less direct hardware bridge", color: "text-green-400" }
                                            ].map((m) => (
                                                <div key={m.label} className="flex justify-between items-end border-b border-slate-900 pb-4 group">
                                                    <div className="space-y-1">
                                                        <div className="text-xs text-slate-500 font-bold tracking-tight group-hover:text-blue-500 transition-colors">{m.label}</div>
                                                        <div className="text-xs text-slate-600 italic font-mono">{m.desc}</div>
                                                    </div>
                                                    <div className={`text-3xl font-mono font-bold ${m.color}`}>{m.val}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-slate-900">
                                            <p className="text-xs text-slate-500 leading-relaxed font-mono uppercase tracking-[0.2em]">
                                                    / / Hardware Sympathy: Active <br />
                                                    / / Decoupled compute protocol: v2.1.0-Quantum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>


                {/* --- NXP: THE EXCHANGE PROTOCOL --- */}
                <section className="w-full py-24 border-b border-slate-900 bg-[#02040a]">
                    <div className="w-full">
                        <Card className="bg-black border-y border-blue-500/10 overflow-hidden relative rounded-none">
                            {/* Background Gradient Pulse */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

                            <CardContent className="p-0">
                                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2">

                                    {/* Left: Why NXP? */}
                                    <div className="p-8 md:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-slate-900">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">
                                                Protocol Layer 0
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                                                NXP <br />
                                                <span className="text-slate-700 font-light">The Exchange Protocol</span>
                                            </h2>
                                            <p className="text-lg text-slate-400 leading-relaxed font-light">
                                                Standard protocols like TCP/IP were never designed for supercomputing. They are too heavy, too slow, and too vulnerable.
                                                <strong className="text-white"> NXP (NEXUS Exchange Protocol)</strong> is our proprietary hardware-to-hardware language.
                                            </p>
                                        </div>

                                        <Link href="/nxp">
                                            <Button variant="outline" className="rounded-none cursor-pointer border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all px-8 py-6 uppercase font-black tracking-widest text-xs">
                                                Explore NXP Architecture <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Right: Technical Justification (The "Why") */}
                                    <div className="p-8 md:p-16 bg-blue-950/10 flex flex-col justify-center space-y-8">
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-blue-500">
                                                    <span>Payload Efficiency</span>
                                                    <span>99.2%</span>
                                                </div>
                                                <div className="h-1 bg-slate-800 w-full">
                                                    <div className="h-full bg-blue-500 w-[99%]"></div>
                                                </div>
                                                <p className="text-[10px] text-slate-600 font-mono italic">Zero overhead. No IP-headers. Just raw data packets.</p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500">
                                                    <span>Handshake Latency</span>
                                                    <span>&lt; 4.0 µs</span>
                                                </div>
                                                <div className="h-1 bg-slate-800 w-auto">
                                                    <div className="h-full bg-slate-600 w-[10%]"></div>
                                                </div>
                                                <p className="text-[10px] text-slate-600 font-mono italic">Utilizing 14-slot hardware-bound authentication.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-black/40 border border-slate-800 font-mono text-[11px] text-slate-400 leading-relaxed">
                                            <span className="text-blue-500 font-bold">/ / WHY NXP IS MANDATORY:</span> <br />
                                            1. Direct L2 Hardware Routing (No IP Stack) <br />
                                            2. Predictable Jitter-free Telemetry <br />
                                            3. Native Encryption at 112M entries/sec <br />
                                            4. Distributed Memory Mapping across Hub-Halls
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>


                {/* --- QUANTUM: THE SUPERCOMPUTER ARGUMENT --- */}
                <section className="py-24 bg-blue-600/5">
                    <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">The infinit workstation</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <Cpu className="w-12 h-12 text-blue-500 mx-auto" />
                                <h4 className="text-xl font-bold">Hardware Agnostic</h4>
                                <p className="text-slate-400 text-sm">Run 8K rendering or heavy AI on a $500 laptop. The NEXUS Hub provides the muscle; your screen is just the window.</p>
                            </div>
                            <div className="space-y-4">
                                <Activity className="w-12 h-12 text-blue-500 mx-auto" />
                                <h4 className="text-xl font-bold">Zero-Lag Rendering</h4>
                                <p className="text-slate-400 text-sm">Scenes that took 45 minutes now finish in 45 seconds. Real-time feedback, real-time creativity.</p>
                            </div>
                            <div className="space-y-4">
                                <Layers className="w-12 h-12 text-blue-500 mx-auto" />
                                <h4 className="text-xl font-bold">Quantum Scaling</h4>
                                <p className="text-slate-400 text-sm">Our HUB-hall mirroring ensures that 100+ concurrent users never fight for power. It's a shared ocean of compute.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-colors group">
            <CardHeader>
                <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
                    {icon}
                </div>
                <CardTitle className="text-xl text-white">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-slate-400 leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    )
}
