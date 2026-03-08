import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Alert,  AlertTitle } from "@/components/ui/alert";
import { Cpu, Zap, Database, Layout } from "lucide-react";

export default function Architect() {
    return (
        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 py-2">

            <header className="space-y-4">
                    <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight">AI <span className="text-blue-500">Architecture</span> Rules</h1>
                <p className="text-muted-foreground text-lg">IntelligentAudio.NET Documentation & Standards</p>
                </header>
            {/* Core Tech Stack */}
            <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
                <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm text-white font-medium">Framework</CardTitle>
                        <Cpu className="w-4 h-4 text-white" />
                    </CardHeader>
                    <CardContent>
                            <div className="text-2xl font-bold text-white">.NET 10 LTS</div>
                        <p className="text-xs text-muted-foreground ">High-Performance Profile</p>
                    </CardContent>
                </Card>
                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm text-white font-medium">Communication</CardTitle>
                        <Zap className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl text-white font-bold">OSC / UDP</div>
                        <p className="text-xs text-muted-foreground">BuildSoft.OscCore</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm text-white font-medium">AI Engine</CardTitle>
                        <Zap className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl text-white font-bold">Speach Engine</div>
                        <p className="text-xs text-muted-foreground">Whisper.NET</p>
                    </CardContent>
                    </Card>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm text-white font-medium">Audio Engine</CardTitle>
                            <Zap className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl text-white font-bold">Audio</div>
                            <p className="text-xs text-muted-foreground">NAudio</p>
                        </CardContent>
                    </Card>
            </section>

            {/* Memory Management Strategy - ALERT STYLE */}
                <section className="space-y-4 mt-4 bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <h2 className="text-2xl font-semibold italic flex items-center gap-2">
                            <Database className="w-6 h-6" /> Memory Management Strategy (STRICT)
                        </h2>
                    <Alert variant="destructive" className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <AlertTitle>Goal: Zero-Allocation in the hot path</AlertTitle>
                    </Alert>

                    <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                        <CardHeader><CardTitle className="text-xl text-white">Architectural Excellence</CardTitle></CardHeader>
                        <div className="pl-6 text-sm text-white">
                            <ol className="list-decimal list-inside mt-0">
                                <li>No LINQ, avoid boxing, and prioritize Span&lt;T&gt; for all buffer handling. Important!</li>
                                <li>This version represents a complete architectural rebuild, moving away from legacy Reflection-based systems to a modern,decoupled **Event-Driven Architecture**:</li>
                                <li>Zero-Allocation Pipeline: Leveraging `Span&alt;float&gt;` and `Memory&alt;T&gt;` for real-time audio cleaning without Garbage Collector spikes.</li>
                                <li>Asynchronous Orchestration: Powered by `System.Threading.Channels` for non-blocking communication between the Microphone, AI Engine, and Network layers.</li>
                                <li>DAW-Agnostic Design: A Factory-based driver system (`IDawClient`) that currently supports Ableton Live via OSC, (roadmap for FL Studio, Logic Pro, (VST Bridge).</li>
                                <li>In-Memory Event Bus: A `DefaultEventAggregator` that decouples AI analysis from hardware delivery, ensuring a (No-Bug) environment.</li>
                                <li>IntelligentAudio.NET uses a Dynamic Discovery Architecture.</li>
                                <li>Instead of hardcoding ports, clients announce themselves via a handshake protocol.</li>
                                <li>The server dynamically spins up dedicated UDP transmitters for each instance, ensuring perfect isolation and zero configuration for the end user.</li>
                            </ol>
                        </div>
                    </Card>

                    <div className="grid gap-2 md:grid-cols-2">
                         <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                            <CardHeader><CardTitle className="text-md text-white">Constraints</CardTitle></CardHeader>
                            <CardContent className="space-y-2 text-white ">
                                <ul className="list-disc pl-5 space-y-1 text-sm text-white">
                                    <li>Use <code>Span&lt;T&gt;</code> and <code>Memory&lt;T&gt;</code></li>
                                    <li>NO LINQ in audio processing or OSC parsing pipelines.</li>
                                    <li>Avoid boxing. Use generics with where T : struct where applicable.</li>
                                    <li>Prohibit <code>foreach</code> (use <code>for</code> or Span iteration)</li>
                                    <li>Use <code>ArrayPool&lt;T&gt;</code> for recurring objects</li>
                                </ul>
                            </CardContent>
                        </Card>


                        <Card className="bg-slate-950/40 border-slate-900 backdrop-blur-md hover:border-blue-500/20 transition-colors">
                            <CardHeader><CardTitle className="text-md text-white">Architectural Principles</CardTitle></CardHeader>
                            <CardContent className="space-y-2 text-white ">
                                <ol className="list-disc pl-5 space-y-1 text-sm text-white">
                                    <li>Decoupled Design: DAW-specific logic must be abstracted via interfaces.</li>
                                    <li>Pipeline-Driven: Use System.IO.Pipelines or Channels for data flow between modules.</li>
                                    <li>Event-Driven: Use high-performance events or ValueTask to minimize heap pressure.</li>
                                    <li>Naming Convention: Do NOT use words like &#34; Simple&#34; in class names. Use Default[Name]Impl.cs or specific descriptive names.</li>
                                </ol>
                            </CardContent>
                        </Card>

                    </div>
                </section>


            {/* Project Structure */}
            <section className="space-y-6 mt-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Layout className="w-6 h-6" /> Project Structure & Responsibilities
                </h2>
                <div className="grid gap-4">
                        {[
                        { title: "IntelligentAudio.NeuralEngine", desc: "Core brain. Implements the context-aware controller", badge: "The brain " },
                        { title: "IntelligentAudio.Contracts", desc: "ZERO external dependencies. Contains interfaces, record struct, and const.", badge: "Abstractions and shared types." },
                        { title: "IntelligentAudio.Infrastructure", desc: "Houses BuildSoft.OscCore. Implements non-allocating UDP listeners.", badge: "Technical implementation and I/O." },
                        { title: "IntelligentAudioEngine", desc: "TWhisper.net, Span<T> logic, chord detection, and transport control.", badge: "Real-time pipeline." },
                        { title: "IntelligentAudio.Server", desc: "Composition Root and DI setup. Dependency Injection setup, and service lifecycle management.", badge: "Host, Composition Root" },
                        { title: "IntelligentAudio.Integrations.Common", desc: "Middleware: Connect external apps layer.", badge: "No Deps" },
                        { title: "IntelligentAudio.Integrations.Ableton", desc: "Plugin: Ableton specific commands.", badge: "Plugin Library" },
                        { title: "IntelligentAudio.MusicTheory", desc: "Plugin: Musictheory lib.", badge: "Plugin Library" }
                    ].map((project) => (
                        <div key={project.title} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <h3 className="font-bold">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.desc}</p>
                            </div>
                            <Badge className="text-white" variant="outline">{project.badge}</Badge>
                        </div>
                    ))}
                </div>
            </section>

            </main>
            </div>
        
    );
}

