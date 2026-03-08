// components/footer.tsx
import { Terminal } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#02040a] pt-24 pb-8 font-mono">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* System Log / Manifest */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-[11px] font-bold mb-4 flex items-center gap-2 text-blue-500 tracking-[0.2em]">
                            <Terminal className="h-4 w-4" />
                            SYSTEM_MANIFEST.LOG
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-md uppercase">
                            High-performance audio engine utilizing <span className="text-blue-400">C# 14</span> features.
                            Built for <span className="text-white">zero-allocation</span> hot paths and sub-millisecond
                            OSC dispatching via BuildSoft.OscCore.
                        </p>
                    </div>

                    {/* Architecture - Nu med bättre kontrast */}
                    <div className="col-span-1">
                        <h4 className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-4">Architecture</h4>
                        <ul className="text-[11px] space-y-2.5">
                            <li className="flex items-center gap-2 font-bold text-blue-400 italic">
                                <div className="h-1 w-1 bg-blue-500 rounded-full animate-pulse" />
                                Neural Engine (ONNX &amp; Whisper)
                            </li>

                            <li className="flex items-center gap-2 font-bold text-blue-400 italic">
                                <div className="h-1 w-1 bg-blue-500 rounded-full animate-pulse" />
                                Infrastructure (UDP/OSC)
                            </li>
                            <li className="flex items-center gap-2 font-bold text-blue-400 italic">
                                <div className="h-1 w-1 bg-blue-500 rounded-full animate-pulse" />
                                Contracts (Agnostic)
                            </li>
                            <li className="flex items-center gap-2 font-bold text-blue-400 italic">
                                <div className="h-1 w-1 bg-blue-500 rounded-full animate-pulse" />
                                Lock-Free Channels
                            </li>
                        </ul>
                    </div>

                    {/* Real-time Specs */}
                    <div className="col-span-1">
                        <h4 className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-4">Node Stats</h4>
                        <div className="space-y-2 text-[10px]">
                            <div className="flex justify-between border-b border-white/5 pb-1">
                                <span className="text-slate-400 uppercase">Memory</span>
                                <span className="text-blue-500 font-bold">SPAN&lt;T&gt;</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-1">
                                <span className="text-slate-400 uppercase">GC_Pressure</span>
                                <span className="text-blue-500 font-bold">NON_ALLOC</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-1">
                                <span className="text-slate-400 uppercase">Jitter</span>
                                <span className="text-blue-500 font-bold">&lt; 0.1ms</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-500 uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-500/50"></span>
                        <span className="text-slate-600">v1.0.10-LTS</span>
                    </div>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-emerald-500 rounded-full" /> Pipeline: Active</span>
                        <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-emerald-500 rounded-full" /> Thread_Safety: Atomic</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
