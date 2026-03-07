import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Search, Zap, Code2, Network, Terminal } from "lucide-react"
import Link from "next/link"
import InferenceWorker from "../../components/InterferenceWorker"

export default function NeuralEnginePage() {
    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            {/* Syncade bakgrundselement från startsidan */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />

            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 py-24">

                {/* HERO SECTION */}
                <section className="text-center space-y-8 mb-20">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1 mb-4">
                        .NET 10 LTS + High Precision Audio
                    </Badge>
                    <h1 className="sm:text-xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                        Neural<span className="text-blue-500 text-glow">Engine</span>
                    </h1>
                    <p className="sm:text-md md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Transforming <span className="text-blue-400 font-medium">Natural Language</span> into real-time software actions through local ONNX-driven intent classification.
                    </p>
                </section>



                {/* THE FLOW - STEP BY STEP */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { icon: Mic, title: "Capture", desc: "Whisper AI Transcribing" },
                        { icon: Brain, title: "Interpret", desc: "ONNX Intent Analysis" },
                        { icon: Search, title: "Discover", desc: "Property Mapping" },
                        { icon: Zap, title: "Execute", desc: "Zero-Latency Dispatch" }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center p-6 bg-slate-950/40 border border-slate-900 rounded-sm hover:border-blue-500/20 transition-all group">
                            <step.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-300">{step.title}</h3>
                            <p className="text-[13px] text-slate-500 text-center mt-2 font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* SUPPORTED INTENTS SECTION */}
                <section className="mt-8 space-y-8 mb-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white  tracking-tight ">Supported Intents</h2>
                        <p className="text-slate-500 text-sm mt-2">Examples of natural language commands mapped via ONNX</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { category: "Transport", examples: ["Start recording", "Set BPM to 124", "Quantize track"] },
                            { category: "Mixing", examples: ["Mute master", "Add Reverb to track 4", "Low-pass at 500Hz"] },
                            { category: "Theory", examples: ["Create Cmaj7 chord", "Transpose +1 octave", "Generate bassline"] }
                        ].map((item, i) => (
                            <div key={i} className="p-5 border border-slate-900 bg-slate-950/20 rounded-sm">
                                <span className="text-blue-500 font-bold text-[10px] uppercase tracking-tighter">{item.category}</span>
                                <ul className="mt-3 space-y-2">
                                    {item.examples.map((ex, j) => (
                                        <li key={j} className="text-slate-400 text-[13px] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-blue-500/50 rounded-full" />
                                            &quot;{ex}&quot;
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ARCHITECTURE DEEP DIVE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: IIntentHandler */}
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader>
                            <Network className="text-blue-500 mb-3 w-7 h-7" />
                            <CardTitle className="text-xl text-white font-semibold tracking-wide text-left uppercase text-[13px]">Modular Intent Injection</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-[15px] leading-relaxed text-left space-y-4">
                            <p>
                                NeuralEngine utilizes the <code className="text-blue-400 px-1 bg-blue-500/10 rounded">IIntentHandler</code> interface, allowing for seamless injection into the system core.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                This architecture decouples the AI interpretation from the target host, making it possible to control Ableton, Logic, or any external software with the same neural logic.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2: DiscoveryService */}
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader>
                            <Code2 className="text-blue-500 mb-3 w-7 h-7" />
                            <CardTitle className="text-xl text-white font-semibold tracking-wide text-left uppercase text-[13px]">Real-time Discovery</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-[15px] leading-relaxed text-left space-y-4">
                            <p>
                                Our <span className="text-blue-400 font-medium whitespace-nowrap">DiscoveryService</span> dynamically maps intent to software properties.
                            </p>
                            <p className="text-slate-400 text-sm">
                                By processing ONNX models locally, we match transcribed voice commands to live-parameters in real-time, eliminating the need for static MIDI mappings or cloud processing.
                            </p>
                        </CardContent>
                    </Card>
                </div>





                {/* THE "WHY" SECTION - LINKEDIN OPTIMIZED */}
                <div className="p-8 mt-12 bg-slate-950/40 border border-slate-900 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Terminal className="w-32 h-32 text-blue-500" />
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-500 fill-blue-500/20" />
                        Musical Intent to Execution
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl">
                        The NeuralEngine isn&apos;t just a bridge; it&apos;s a context-aware controller.
                        By combining <b>OpenAI Whisper</b> for transcription and custom <b>ONNX models</b> for classification,
                        we enable a fluid workflow where your voice directly manipulates the DSP environment.
                        No cloud, no latency—just intelligent, local execution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[".NET 10", "Whisper.NET", "ONNX Runtime", "Ableton Live", "OSC"].map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border-none font-mono text-[10px] px-3">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                {/* Global Floating AI Interface */}
                <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
                    <div className="scale-75 origin-bottom-right">  
                        <InferenceWorker />
                    </div>
                </div>

                {/* THE "WHY" SECTION - LINKEDIN OPTIMIZED */}
                <div className="p-8 mt-12 bg-slate-950/40 border border-slate-900 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Mic className="w-32 h-32 text-blue-500" />
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Mic className="w-5 h-5 text-blue-500 fill-blue-500/20" />
                        Neural Harmonic Engine
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl">
                        Test Neural Engine directly. Click the microphone button and see the result.
                        For now its only mockup data, but the call to the service is real.
                        When the service runs locally this will also be a Live service.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[".NET 10", "Ableton Live", "Midi generation"].map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border-none font-mono text-[10px] px-3">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                {/* Global Floating AI Interface */}
                <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
                    <div className="scale-75 origin-bottom-right">
                        <InferenceWorker />
                    </div>
                </div>

            </main>
        </div>
    )
}
