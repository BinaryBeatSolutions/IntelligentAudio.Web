import { Badge, Zap } from "lucide-react";


export default function PricingPage() {
    return (
        <div>

            {/* --- QUANTUM PRICING & VALUE HEADER --- */}
            <section className="w-full pt-2 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <header className="space-y-12">
                        {/* Main Title Group */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-12 bg-blue-500"></div>
                                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Economic Disruption</span>
                            </div>
                            <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                                QUANTUM <br />
                                <span className="text-blue-500">PRICING</span> MODEL
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-tight max-w-2xl">
                                The end of overpriced hardware. <br className="hidden md:block" />
                                The start of <span className="text-white font-medium">immediate ROI.</span>
                            </p>
                        </div>

                        {/* The Architect's Note on Value */}
                        <div className="relative group max-w-4xl">
                            <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-blue-600"></div>
                            <div className="pl-8 space-y-4">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                    The Architect’s Note on Value
                                </span>
                                <blockquote className="text-2xl md:text-3xl font-light text-slate-200 leading-tight italic">
                                    "We don't charge for the silicon. We charge for the <span className="text-white font-bold">elimination of lag.</span> A traditional $250,000 server is a liability; a Genesis Node is a catalyst. You're not buying a box—you're buying <span className="text-blue-400">nanoseconds.</span>"
                                </blockquote>
                            </div>
                        </div>
                    </header>
                </div>
            </section>






            {/* --- THE ROI COMPARISON: 3-YEAR TCO --- */}
            <section className="w-full py-24 border-y border-slate-900 bg-black/40">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Financial Architecture</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">3-Year <span className="text-blue-500 text-slate-700">TCO</span> Analysis</h2>
                        </div>
                        <p className="text-slate-500 font-mono text-xs uppercase pb-2">Verified Baseline: 20 Node Cluster / 36 Months</p>
                    </div>

                    <div className="overflow-hidden border border-slate-800 bg-slate-950 rounded-none">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-800">
                                    <th className="p-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Value Driver</th>
                                    <th className="p-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Traditional Enterprise</th>
                                    <th className="p-6 text-[10px] uppercase tracking-widest text-blue-500 font-bold">NEXUS.QUANTUM</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/20 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium">Hardware Decay</td>
                                    <td className="p-6 text-slate-500">High (3-year replacement cycle)</td>
                                    <td className="p-6 text-blue-400 font-bold">Near Zero (Elastic Scaling)</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/20 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium">Network Latency</td>
                                    <td className="p-6 text-slate-500">20ms - 150ms (Standard IP-stack)</td>
                                    <td className="p-6 text-blue-400 font-bold">&lt; 4.0 µs (Hardware-to-Hardware)</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/20 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium">Security Surface</td>
                                    <td className="p-6 text-slate-500">Exposed (IP-based / VPN reliant)</td>
                                    <td className="p-6 text-blue-400 font-bold">Invisible (IP-Less Stealth)</td>
                                </tr>
                                <tr className="bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                                    <td className="p-6 text-white font-black uppercase tracking-tighter">Operational Efficiency</td>
                                    <td className="p-6 text-slate-500">High Admin/Cooling/Licensing</td>
                                    <td className="p-6 text-blue-500 font-black tracking-widest">MINIMAL (60W PEAK / AUTONOMOUS)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 p-8 border-l-2 border-blue-500 bg-blue-500/5">
                        <p className="text-xl text-slate-300 font-light leading-relaxed italic">
                            &#34;The value of Quantum is not found in the purchase price, but in the <strong className="text-white">total collapse of operational overhead.</strong> By removing the internet, we remove the costs associated with protecting it.&#34;
                        </p>
                    </div>
                </div>
            </section>


            {/* --- THE GREEN ARCHITECTURE: ENERGY CONSUMPTION GAP --- */}
            <section className="w-full py-24 border-b border-slate-900 bg-[#02040a]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono text-green-500 uppercase tracking-[0.4em]">Sustainability Layer</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                                THE GREEN <span className="text-green-500 text-slate-700 font-light">GAP</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-mono text-[10px] uppercase pb-2 italic">Architecture Optimized for Zero-Waste Compute</p>
                    </div>

                    <div className="overflow-hidden border border-slate-800 bg-slate-950 rounded-none">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                    <th className="p-6">System Architecture</th>
                                    <th className="p-6">Power Draw (Avg.)</th>
                                    <th className="p-6">Cooling Infrastructure</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/20 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium italic">Legacy Server Rack (Standard)</td>
                                    <td className="p-6 text-slate-500 font-mono">2,500W - 10,000W</td>
                                    <td className="p-6 text-slate-500 font-mono uppercase text-xs">Massive (Active AC / Chillers)</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/20 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium italic">High-Performance Workstation Cluster</td>
                                    <td className="p-6 text-slate-500 font-mono">1,200W - 3,500W</td>
                                    <td className="p-6 text-slate-500 font-mono uppercase text-xs">High (Fans / Liquid Cooling)</td>
                                </tr>
                                <tr className="bg-green-500/5 hover:bg-green-500/10 transition-colors">
                                    <td className="p-6 text-white font-black uppercase tracking-tighter">NEXUS GENESIS NODE</td>
                                    <td className="p-6 text-green-400 font-black text-2xl font-mono">60W</td>
                                    <td className="p-6 text-green-500 font-black tracking-widest uppercase text-xs">PASSIVE / ZERO OVERHEAD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-center gap-4 p-6 border border-green-500/20 bg-green-500/5 text-green-500/80">
                        <Zap className="w-5 h-5 animate-pulse" />
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em]">
                            Green Innovation: Performance without the carbon footprint. 99% Energy Reduction vs Industry Standard.
                        </p>
                    </div>
                </div>
            </section>



            {/* --- GENESIS NODE: HARDWARE ARCHITECTURE --- */}
            <section className="w-full py-24 border-b border-slate-900 bg-black/20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Node Specification</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                                GENESIS <span className="text-blue-500 text-slate-700 font-light">NODE</span>
                            </h2>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Type: Edge Supercomputer</p>
                            <p className="text-[10px] text-slate-600 italic uppercase font-bold tracking-[0.2em]">Validated for .NET 10 Native AOT</p>
                        </div>
                    </div>

                    <div className="overflow-hidden border border-slate-800 bg-slate-950 rounded-none shadow-2xl shadow-blue-500/5">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                    <th className="p-6 w-1/3">Component Layer</th>
                                    <th className="p-6 w-1/3">The Genesis Standard</th>
                                    <th className="p-6 w-1/3 text-blue-500">Quantum Advantage</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/10 transition-colors">
                                    <td className="p-6 text-slate-300 font-bold uppercase tracking-tighter italic">Compute Engine</td>
                                    <td className="p-6 text-slate-400 font-mono">NVIDIA Orin AGX 64GB</td>
                                    <td className="p-6 text-blue-400 font-mono">275 TOPS AI-Inference @ 60W</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/10 transition-colors">
                                    <td className="p-6 text-slate-300 font-bold uppercase tracking-tighter italic">Network Interface</td>
                                    <td className="p-6 text-slate-400 font-mono">Quad-SFP28 (100GbE)</td>
                                    <td className="p-6 text-blue-400 font-mono">IP-Less L2 NXP Protocol Link</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/10 transition-colors">
                                    <td className="p-6 text-slate-300 font-bold uppercase tracking-tighter italic">Protocol Logic</td>
                                    <td className="p-6 text-slate-400 font-mono">Embedded LPGA</td>
                                    <td className="p-6 text-blue-400 font-mono">Deterministic 4.0 µs Latency</td>
                                </tr>
                                <tr className="border-b border-slate-900/50 hover:bg-slate-900/10 transition-colors">
                                    <td className="p-6 text-slate-300 font-bold uppercase tracking-tighter italic">Vault Storage</td>
                                    <td className="p-6 text-slate-400 font-mono">Dual-Stream NVMe Gen5</td>
                                    <td className="p-6 text-blue-400 font-mono">Zero-Wait Memory Snapshots</td>
                                </tr>
                                <tr className="bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
                                    <td className="p-6 text-white font-black uppercase tracking-tighter">System Power</td>
                                    <td className="p-6 text-slate-400 font-mono italic text-xs">Legacy: 2,500W+</td>
                                    <td className="p-6 text-blue-500 font-black text-2xl font-mono">60W MAX</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-start gap-4 p-8 border-l-4 border-blue-600 bg-slate-900/40">
                        <div className="space-y-4">
                            <p className="text-xl text-slate-300 font-light italic leading-relaxed">
                                "The Genesis Node is the hardware anchor for the Quantum Master. By utilizing <strong className="text-white">LPGA logic</strong> instead of heavy software stacks, we deliver high-end GPU performance at a fraction of the cost, heat, and power consumption."
                            </p>
                            <div className="flex gap-4">
                                <Badge className="border-blue-500/20 text-[10px] text-blue-500 font-mono">14-SLOT VERIFIED</Badge>
                                <Badge className="border-blue-500/20 text-[10px] text-blue-500 font-mono">SILICON-BOUND SECURITY</Badge>
                                <Badge className="border-green-500/20 text-[10px] text-green-500 font-mono">ZERO EMISSIONS READY</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}