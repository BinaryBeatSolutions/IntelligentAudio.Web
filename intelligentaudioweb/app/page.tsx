import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Share2, Activity } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            {/* Subtle blue top-down gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />

            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 py-24">

                {/* HERO SECTION */}
                <section className="text-center space-y-8 mb-32">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1 mb-4 animate-pulse">
                        .NET 10 LTS + High Precision Audio
                    </Badge>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        IntelligentAudio<span className="text-blue-500">.NET</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Decoupled audio engine for real-time processing.
                        Engineered with <span className="text-blue-400 font-medium whitespace-nowrap">Zero-copy architecture</span> for next-generation local AI integration.
                    </p>
                    <div className="flex justify-center gap-4 pt-6">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 rounded-sm transition-all font-semibold">
                            <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" target="_blank">IntelligentAudio.NET on GitHub</Link>
                        </Button>
                       
                    </div>
                </section>

                {/* CORE PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Performance Card */}
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader>
                            <Cpu className="text-blue-500 mb-3 w-7 h-7" />
                            <CardTitle className="text-xl text-white font-semibold tracking-wide text-left uppercase text-[13px]">Zero-Allocation Core</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-[15px] leading-relaxed text-left">
                            Utilizing <code className="text-blue-400 px-1 bg-blue-500/10 rounded">Span&lt;T&gt;</code> and <code className="text-blue-400 px-1 bg-blue-500/10 rounded">MemoryPool</code> to eliminate GC overhead.
                            Audio buffers remain in-memory without copying, ensuring ultra-low latency processing.
                        </CardContent>
                    </Card>

                    {/* Architecture Card */}
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader>
                            <Share2 className="text-blue-500 mb-3 w-7 h-7" />
                            <CardTitle className="text-xl text-white font-semibold tracking-wide text-left uppercase text-[13px]">Agnostic Architecture</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-[15px] leading-relaxed text-left">
                            Completely decoupled from the host application. Implement custom logic via <span className="italic text-slate-100 font-medium">Contracts</span> and manage clients with guaranteed response integrity using unique ClientIDs.
                        </CardContent>
                    </Card>

                    {/* AI/Whisper Card */}
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader>
                            <Activity className="text-blue-500 mb-3 w-7 h-7" />
                            <CardTitle className="text-xl text-white font-semibold tracking-wide text-left uppercase text-[13px]">AI-Native Pipeline</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-[15px] leading-relaxed text-left">
                            Optimized for Whisper and local LLM inference. The CPU remains idle during AI transcription thanks to asynchronous <code className="text-blue-400">Channels</code> and efficient resource orchestration.
                        </CardContent>
                    </Card>

                </div>

                {/* TECH STACK FOOTER */}
                <footer className="mt-40 pt-10 border-t border-slate-900/40 text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mb-8 font-bold">The Engineering Stack</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:opacity-60 transition-opacity">
                        <span className="text-xs font-black text-white italic">.NET 10 LTS</span>
                        <span className="text-xs font-black text-white italic">C# 14 / Span&lt;T&gt;</span>
                        <span className="text-xs font-black text-white italic">Next.js 15</span>
                        <span className="text-xs font-black text-white italic">Whisper.NET</span>
                        <span className="text-xs font-black text-white italic">BuildSoft.OscCore</span>
                        <span className="text-xs font-black text-white italic">Tailwind v4</span>
                    </div>
                </footer>

            </main>
        </div>
    )
}
