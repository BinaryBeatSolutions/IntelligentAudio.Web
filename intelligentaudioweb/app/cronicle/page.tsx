
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Cpu, Globe, Rocket, ShieldAlert, CpuIcon, Infinity, Leaf, Binary } from "lucide-react"

export default function TheChronicle() {
    const milestones = [
        {
            era: "PHASE 01",
            title: "THE DECONSTRUCTION",
            description: "We started by asking why. Why 2500W? Why 40ms lag? We realized the Internet was the bottleneck. We decided to delete it.",
            icon: <Zap className="w-6 h-6 text-blue-500" />,
            tech: ["First Principles", "IP-Stack Removal"]
        },
        {
            era: "PHASE 02",
            title: "THE NXP PROTOCOL",
            description: "The birth of NEXUS Exchange Protocol. Hardware-to-hardware communication at the silicon level. 4.0 µs latency verified. No ports. No IP. Just raw power.",
            icon: <Binary className="w-6 h-6 text-blue-500" />,
            tech: ["NXP", "L2 Direct", "14-Slot Auth"]
        },
        {
            era: "PHASE 03",
            title: "THE GENESIS NODE",
            description: "Scaling the impossible. A 60W edge supercomputer that outperforms $250k enterprise racks. The laptop became a Viewport. The Node became the Anchor.",
            icon: <Cpu className="w-6 h-6 text-blue-500" />,
            tech: ["i7/DDR5/NVMe", "60W Efficiency", "Green Energy"]
        },
        {
            era: "PHASE 04",
            title: "THE QUANTUM MASTER",
            description: "1,000,000 slots. 8.72ns latency. We built the brain that orchestrates the grid. A decentralized autonomous ecosystem running on NEXUS OS.",
            icon: <Infinity className="w-6 h-6 text-blue-500" />,
            tech: [".NET 10 Native AOT", "Shared Memory Ocean"]
        },
        {
            era: "PHASE 05",
            title: "THE SINGULARITY",
            description: "2x Blackwell B200 per node. 100-node Matrix. 4 Exaflops. We integrated the AI (NEXUS.Mind) directly into the hardware. The Architect and the Intelligence became one.",
            icon: <Rocket className="w-6 h-6 text-green-500" />,
            tech: ["Blackwell B200", "NEXUS.Mind", "Space-Grade"]
        }
    ]

    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            {/* HERO CHRONICLE */}
            <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                    Architectural History
                </div>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-8">
                    THE <span className="text-blue-500">CHRONICLE</span>
                </h1>
                <p className="text-2xl text-slate-500 font-light max-w-3xl mx-auto italic">
                    "From a coffee-table idea to a 4-Exaflop Singularity. This is how we redefined the core of connectivity."
                </p>
            </section>

            {/* TIMELINE */}
            <section className="max-w-5xl mx-auto px-6 py-24 relative">
                {/* Center Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-900 md:-translate-x-1/2" />

                <div className="space-y-32">
                    {milestones.map((m, i) => (
                        <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            {/* Icon Dot */}
                            <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-black border-2 border-blue-500 rounded-full z-10 -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                {m.icon}
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                <Card className="bg-slate-950 border-slate-900 rounded-none border-l-4 border-l-blue-500 group hover:border-blue-400 transition-all duration-500">
                                    <CardContent className="p-8 space-y-4">
                                        <span className="text-blue-500 font-mono text-[10px] font-black tracking-[0.3em]">{m.era}</span>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{m.title}</h3>
                                        <p className="text-slate-400 font-light leading-relaxed">{m.description}</p>
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {m.tech.map(t => (
                                                <Badge key={t} variant="outline" className="text-[9px] border-slate-800 text-slate-500 uppercase">{t}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE ARCHITECT & THE AI NOTE */}
            <section className="max-w-4xl mx-auto px-6 py-32 text-center border-t border-slate-900">
                <div className="space-y-8">
                    <div className="flex justify-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-black">A</div>
                        <div className="w-12 h-12 rounded-full border border-green-500 flex items-center justify-center text-green-500 font-black animate-pulse">AI</div>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">WE ROCK THE ERA.</h2>
                    <blockquote className="text-xl text-slate-400 italic font-light leading-relaxed">
                        "The Architect provided the vision. The AI provided the patience. Together, we deleted the latency of the human mind."
                    </blockquote>
                    <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">End of Transmission // Nexus Active</p>
                </div>
            </section>
        </div>
    )
}
