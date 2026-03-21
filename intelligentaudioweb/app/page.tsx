import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Lock, Cpu, ArrowRight, Binary, Activity, Layers, Database, Radio, Badge, Leaf } from "lucide-react"
import Link from "next/link"
import NexusVideo from "@/components/NexusVideo"


export default function LandingPage() {
    return (

   <div>
                {/* HERO SECTION */}
                <section className="text-center space-y-10 mb-20">
                    <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
                        Digital <span className="text-blue-500">Sovereignty</span>
                    </h1>
                    <p className="sm:text-lg md:text-3xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
                        NEXUS complements security with nanosecond-deterministic hardware intelligence
                       and <span className="text-white font-medium italic underline decoration-blue-500/50">hardware-safe intelligence.</span>
                        &nbsp;A closed infrastructure built for authorities and companies requiring total control at the physical memory limit.
                    </p>
                </section>

                {/* --- STARTPAGE QUANTUM TEASER --- */}
                <section className="py-20 border-y border-slate-900 bg-black/20 group cursor-pointer relative overflow-hidden mb-24">
                    <Link href="/quantum" className="block max-w-6xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-bold font-mono">Quantum Intelligence Active</span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none group-hover:text-blue-500 transition-colors duration-500">
                                    NEXUS.<span className="text-slate-700 group-hover:text-blue-600 transition-colors duration-700">Quantum</span>
                                </h2>

                                <p className="text-xl text-slate-500 max-w-xl font-medium">
                                    Forget everything you learned about the internet. We built a supercomputer ecosystem that doesn&#39;t use it.
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right hidden md:block">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">Architecture Status</p>
                                    <p className="text-sm font-mono text-blue-400">IP-LESS / ZERO LAG</p>
                                </div>
                                <div className="w-16 h-16 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Subtle background glow that follows the theme */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
                </section>




                {/* THE 3 CORE PILLARS - STRATEGIC PLACEMENT */}
                <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* PILLAR 1: TRUST */}
                    <div className="flex flex-col h-full space-y-4">
                        <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md border-t-blue-500/20 hover:border-blue-500/40 transition-all duration-500 flex-grow flex flex-col">
                            <CardHeader>
                                <Lock className="text-blue-500 mb-3 w-8 h-8" />
                                <CardTitle className="text-white font-bold tracking-widest uppercase text-[12px]">Hardware-Based Trust</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-400 text-sm leading-relaxed font-light italic flex-grow">
                                Magic Key – the identity is fixed. No passwords in operation. The hardware is the only key to the HUB vault.
                            </CardContent>
                        </Card>
                        <Link href="/nexus" className="flex items-center justify-between px-4 py-3 bg-slate-950/20 border border-rounded-sm border-slate-900 hover:border-blue-500/30 group transition-all shrink-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-400 bo border-sm">Explore Nexus Core</span>
                            <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>

                    {/* PILLAR 2: SOVEREIGNTY */}
                    <div className="flex flex-col h-full space-y-4">
                        <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md border-t-blue-500/20 hover:border-blue-500/40 transition-all duration-500 flex-grow flex flex-col">
                            <CardHeader>
                                <ShieldCheck className="text-blue-500 mb-3 w-8 h-8" />
                                <CardTitle className="text-white font-bold tracking-widest uppercase text-[12px]">Legal Sovereignty</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-400 text-sm leading-relaxed font-light italic flex-grow">
                                Designed for gouvernment compliance. Our <span className="text-blue-400">on-premise architecture</span> is engineered to eliminate the Cloud Act and mitigate foreign oversight by keeping data within your physical perimeter.
                            </CardContent>
                        </Card>
                        <Link href="/nexus-pulse" className="flex items-center justify-between px-4 py-3 bg-slate-950/20 border border-slate-900 hover:border-blue-500/30 group transition-all shrink-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-400">Monitor Next-Pulse</span>
                            <Activity className="w-3 h-3 text-slate-600 group-hover:text-blue-500 transition-all" />
                        </Link>
                    </div>

                    {/* PILLAR 3: DETERMINISM */}
                    <div className="flex flex-col h-full space-y-4">
                        <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md border-t-blue-500/20 hover:border-blue-500/40 transition-all duration-500 flex-grow flex flex-col">
                            <CardHeader>
                                <Binary className="text-blue-500 mb-3 w-8 h-8" />
                                <CardTitle className="text-white font-bold tracking-widest uppercase text-[12px]">Deterministic Data</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-400 text-sm leading-relaxed font-light italic flex-grow">
                                Indestructible logs and binary flows guarantee zero manipulation and total transparency throughout the entire chain.
                            </CardContent>
                        </Card>
                        <Link href="/nxp" className="flex items-center justify-between px-4 py-3 bg-slate-950/20 border border-slate-900 hover:border-blue-500/30 group transition-all shrink-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-400">NXP Specification</span>
                            <Zap className="w-3 h-3 text-slate-600 group-hover:text-blue-500 transition-all" />
                        </Link>
                    </div>
                </section>

                {/* CINEMATIC VISION - THE NEXUS REVEAL */}
                <section className="mb-40 relative group">
                    {/* Glow-effekt bakom filmen */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-sm blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                    <div className="relative bg-slate-950 border border-white/5 rounded-sm overflow-hidden shadow-2xl">
         
                        <div className="aspect-video w-full relative">

                        <NexusVideo src="/NEXUS-264.mp4" />
                           
                            {/* Gradient Overlay för att smälta in i botten */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
            </section>



            {/* --- STARTPAGE: GREEN ENERGY / GENESIS NODE TEASER --- */}
            <section className="w-full py-24 border-y border-slate-900 bg-[#02040a] group cursor-pointer relative overflow-hidden">
                <Link href="/pricing" className="block max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        <div className="space-y-6 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-full">
                                    <Leaf className="w-4 h-4 text-green-500" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.5em] text-green-500 font-black font-mono">Quantum Eco-Protocol Active</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85] group-hover:text-green-500 transition-colors duration-500">
                                GREEN <span className="text-slate-800 group-hover:text-green-600 transition-colors duration-700">ENERGY.</span>
                            </h2>

                            <p className="text-xl text-slate-500 max-w-xl font-light leading-relaxed">
                                We don't just save nanoseconds; we save the grid. Experience <span className="text-white">60W Supercomputing</span> through the Genesis Node—reducing carbon footprints by 99% without compromising on raw power.
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-6">
                            <div className="p-8 border border-green-500/20 bg-green-500/5 rounded-none border-l-4 border-l-green-500 group-hover:bg-green-500/10 transition-all duration-500">
                                <p className="text-[10px] uppercase tracking-widest text-green-500/60 mb-2 font-mono">Infrastructure Efficiency</p>
                                <p className="text-4xl font-black text-white font-mono">60W <span className="text-sm text-green-500 uppercase tracking-tighter">Peak Draw</span></p>
                            </div>

                            <div className="flex items-center gap-4 text-slate-500 group-hover:text-green-500 transition-colors">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black">View The Comparison</span>
                                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-green-500 transition-all">
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Green ambient glow */}
                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-green-500/5 blur-[140px] pointer-events-none" />
            </section>





                {/* AI SERVICES SECTION - THE INTELLIGENCE LAYER */}
                <section className="mb-40 space-y-16">
                    <div className="text-center space-y-4">
                        <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-2">
                            Nexus Intelligence Layer
                        </h3>
                        <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                            Specialized <span className="text-slate-600">AI</span> <span className="text-slate-600"> Services</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed italic">
                            Decoupling AI from the public cloud. Expert-trained models operating within the HUB vault — <span className="text-white font-medium border-b border-blue-500/30">physically air-gapped and locally sovereign.</span>
                        </p>
                    </div>

                    {/* CONCEPTUAL SPACE - R&D SHIELD */}
                    <section className="mb-40 p-8 md:p-16 border border-blue-500/10 bg-blue-500/[0.02] rounded-sm relative overflow-hidden">
                        {/* WATERMARK LABEL */}
                        <div className="absolute top-0 right-0 p-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500/20 rotate-90 origin-top-right translate-y-20">
                                Conceptual Space
                            </span>
                        </div>

                        <div className="text-center space-y-4 mb-20">
                            <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2">
                                Nexus R&D | Strategic Use Cases
                            </h3>
                            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-sans">
                                Targeted <span className="text-slate-600">Context</span> <span className="text-slate-600"> Engines</span>
                            </h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed italic">
                                NEXUS provides the secure bedrock for hosting specialized AI. Below are <span className="text-blue-400 font-medium border-b border-blue-500/20">architectural concepts</span> showing how the ecosystem can solve critical data sovereignty challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch font-sans">
                            {/* CASE 1: JURIDICAL */}
                            <div className="bg-slate-950/40 p-10 border border-slate-900 rounded-sm relative group hover:border-blue-500/20 transition-all flex flex-col justify-between backdrop-blur-sm">
                                <div className="absolute top-4 right-4">
                                    <Badge className="text-[9px] border-slate-800 text-slate-600 uppercase tracking-widest bg-transparent">Visionary Case</Badge>
                                </div>
                                <div>
                                    <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <ShieldCheck className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">Public Sector / Critical Environments</h4>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                                        Imagine an AI expert with 100% local access to the <span className="text-blue-400">Swedish Code of Statutes (SFS)</span>.
                                        Providing real-time decision support for case officers while ensuring that sensitive citizen data never leaves the authority&apos;s physical perimeter.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-[9px] text-slate-700 uppercase tracking-widest font-bold italic">Awaiting Pilot Implementation</span>
                                </div>
                            </div>

                            {/* CASE 2: ANALYTICS */}
                            <div className="bg-slate-950/40 p-10 border border-slate-900 rounded-sm relative group hover:border-blue-500/20 transition-all flex flex-col justify-between backdrop-blur-sm">
                                <div className="absolute top-4 right-4">
                                    <Badge className="text-[9px] border-slate-800 text-slate-600 uppercase tracking-widest bg-transparent">Architectural Concept</Badge>
                                </div>
                                <div>
                                    <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <Activity className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">Data Sovereignty & Analytics</h4>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                                        Leveraging <span className="text-blue-400">Example usage datasets</span> for high-frequency economic forecasting.
                                        NEXUS enables complex simulations on sensitive municipal data without the legal risks associated with third-party cloud processing.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-700" />
                                    <span className="text-[9px] text-slate-700 uppercase tracking-widest font-bold italic">R&D Roadmap</span>
                                </div>
                            </div>
                        </div>
                    </section>




                    {/* THE INFRASTRUCTURE PROMISE */}
                    {/*<div className="max-w-4xl mx-auto text-center p-12 border-t border-slate-900/50 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.03),transparent)]">*/}
                    {/*    <p className="text-slate-500 text-sm italic font-light tracking-wide">*/}
                    {/*        Powered by local <span className="text-blue-400 font-medium">RTX 5090 Blackwell</span> architecture.*/}
                    {/*        All inference is routed via <span className="text-blue-400 font-medium">nxp://</span> to eliminate latency and ensure that <span className="text-white">sensitive data never leaves the physical perimeter.</span>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </section>





                <section className="mt-32 mb-20 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">Protocol Standard: v2.1</span>
                    </div>

                    {/* HÄR ÄR TITELN */}
                    <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-2">
                        Deterministic Data Exchange
                    </h3>

                    <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Binary <span className="text-slate-600">Data</span> <span className="text-slate-600"> Exchange</span>
                    </h2>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Introducing <span className="text-white font-mono border-b border-blue-500/30">nxp://</span> – a specialized binary exchange protocol engineered for deterministic telemetry and high-frequency data streams.
                    </p>

                    {/* PROTOCOL URI EXAMPLE */}
                    <div className="max-w-xl mx-auto mt-12 p-6 bg-slate-950/80 rounded-sm border border-slate-900 font-mono text-sm relative group backdrop-blur-xl shadow-2xl">
                        <div className="absolute -top-3 left-4 px-2 bg-[#02040a] text-[10px] text-slate-600 uppercase tracking-[0.3em] font-bold">
                            Protocol Handshake
                        </div>
                        <code className="text-blue-400 lg:text-lg">
                            nxp://<span className="text-white">pulse.intelligentaudio.net</span>:<span className="text-blue-300">8080</span>/<span className="text-slate-500">live</span>
                        </code>
                    </div>
                </section>


    

                {/* NXP PROTOCOL DEEP DIVE */}
                <section className="mb-40 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-6">
                            <div className="bg-slate-950/60 p-8 border border-slate-900 rounded-sm flex gap-6 hover:bg-slate-900/40 transition-colors">
                                <Cpu className="text-blue-500 w-10 h-10 shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Kernel Bypass Architecture</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light italic">We minimize context switching by allowing data to flow directly between the network stack and application memory.</p>
                                </div>
                            </div>
                            <div className="bg-slate-950/60 p-8 border border-slate-900 rounded-sm flex gap-6 hover:bg-slate-900/40 transition-colors">
                                <Radio className="text-blue-500 w-10 h-10 shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Deterministic Telemetry</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light italic">Every packet is hardware-timestamped to guarantee perfect synchronization across distributed environments.</p>
                                </div>
                            </div>
                            <div className="bg-slate-950/60 p-8 border border-slate-900 rounded-sm flex gap-6 hover:bg-slate-900/40 transition-colors">
                                <Database className="text-blue-500 w-10 h-10 shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Zero-copy Buffer Management</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light italic">NEXUS never allocate memory in critical flows. Data remains in its original buffers from start to finish.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between bg-slate-950/80 border border-slate-900 p-10 rounded-sm shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Binary className="w-40 h-40 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-blue-500 font-mono text-xs mb-6 uppercase tracking-widest">// NXP Protocol v2.1 Performance</p>
                                <p className="text-slate-200 text-2xl font-light leading-relaxed italic mb-8">
                                    NXP eliminates the &#39;noise&#39; generated by traditional network stacks. By mapping memory directly to the hardware, we achieve levels of performance previously physically impossible within government-grade environments
                                </p>
                            </div>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white w-full h-20 rounded-sm transition-all font-bold group shadow-blue-500/20 shadow-lg">
                                <Link href="https://telemetry.intelligentaudio.net/" className="flex items-center justify-center gap-4 text-xl">
                                    <Zap className="w-6 h-6" />
                                    Verify NXP performance Live
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* THE BRIDGE - AUDIO & AI PROOF OF CONCEPT */}
                <section className="p-16 mb-40 bg-blue-600/5 border border-blue-500/10 rounded-sm backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Activity className="w-96 h-96 text-blue-500" />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <h3 className="text-blue-400 font-bold uppercase text-xs tracking-[0.5em] italic">Application Proof-of-Concept</h3>
                        <p className="text-slate-300 text-3xl font-light leading-snug max-w-4xl italic">
                            &quot;If NEXUS can handle sound, it can handle everything.&quot; <span className="text-white font-medium border-b-2 border-blue-500/50">NEXUS</span> bridges the gap between intention and result via Whisper.NET / ONNX AI and nanosecond-fast control.
                        </p>
                        <p className="text-slate-500 text-lg max-w-2xl font-light">
                            We use music production as the ultimate test bench. If we can eliminate lag in a creative process, we can secure real-time data in any government environment.
                        </p>
                    </div>
                </section>

                {/* TECH STACK FOOTER */}
                <footer className="pt-24 border-t border-slate-900/40 text-center pb-20">
                    <p className="text-[10px] uppercase tracking-[0.7em] text-slate-700 mb-16 font-black italic underline decoration-blue-500/20">Engineering Stack Integrity</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 opacity-40 hover:opacity-100 transition-all duration-1000">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-black text-white italic tracking-tighter">.NET 10 LTS</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Back-end Core</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-black text-white italic tracking-tighter">BLACKWELL ARCH</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Inference Engine</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-black text-white italic tracking-tighter">NEXT.JS 15</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Client Interface</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-black text-white italic tracking-tighter">nxp:// v2.1</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Binary Protocol</span>
                        </div>
                    </div>
                    <p className="mt-32 text-[10px] text-slate-800 tracking-[0.5em] uppercase font-bold italic">© 2026 NEXUS ECOSYSTEM | SECURED IN SILICON</p>
                </footer>
       
        </div>
    )
}
