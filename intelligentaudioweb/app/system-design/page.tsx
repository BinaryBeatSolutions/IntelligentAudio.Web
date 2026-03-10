import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Cpu, Zap, Database, Layout, ShieldCheck } from "lucide-react";
import MermaidWrapper from "@/components/MermaidWrapper";

const chartCode = `
graph TD
    %% --- CUSTOM STYLES (Dark Mode Optimized) ---
    classDef engine fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#f8fafc;
    classDef dsp fill:#022c22,stroke:#10b981,stroke-width:2px,color:#ecfdf5;
    classDef logic fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#f5f3ff;
    classDef performance fill:#1e3a8a,stroke:#3b82f6,stroke-dasharray: 5 5,color:#3b82f6;
    classDef transport fill:#450a0a,stroke:#ef4444,stroke-width:2px,color:#fef2f2;
    classDef neural fill:#312e81,stroke:#a855f7,stroke-width:2px,color:#faf5ff;
    classDef nexus fill:#2563eb,stroke:#fff,stroke-width:2px,color:#fff;
    classDef cloud fill:#000,stroke:#2563eb,stroke-width:1px,color:#2563eb;

    %% --- 1. CLOUD LAYER ---
    subgraph Phase0 [0. CLOUD INFRASTRUCTURE]
        GC[Global Command Registry]
        VA[Vercel Analytics]
    end

    %% --- 2. DEPLOYMENT & DISCOVERY ---
    subgraph Phase1 [1. DEPLOYMENT & DISCOVERY]
        AMXD[.amxd Device] -->|Expose Properties| DS[DiscoveryService]
        DS -->|Property Map| CM[IClientManager]
        EXE[IntelligentAudio.NET.exe] -.-> CM
    end

    %% --- 3. AUDIO & DSP ---
    subgraph Phase2 [2. AUDIO PROCESSING]
        WAS[WindowsAudioSource] -->|16kHz Resampling| FB{Filter Bank}
        FB -.-> HPF[[6db Filter]]
        FB -.-> F12[[12dB Filter]]
        FB -.-> F24[[24dB Filter]]
        HPF & F12 & F24 --> NG[[NoiseGateProcessor]]
        NG -->|Clean Stream| BHC[Bounded Channel]
    end

    %% --- 4. NEURAL & NEXUS CORE (The Hub) ---
    subgraph Phase3 [3. NEURAL & NEXUS HUB]
        BHC --> WHI[WhisperInferenceWorker]
        WHI -- "Transcribed Text" --> NIE[Neural Intent Engine]
        ONNX[(ONNX Model)] -.->|Intent Classification| NIE
        
        %% NEXUS AS THE CENTRAL REGISTRY
        NIE -- "Binary Intent" --> NX[(NEXUS Shared Memory)]
        GC -- "HTTP/3 QUIC Sync" --> NX
        NX -- "Pointer Access" --> NHE[Neural Harmonic Engine]
    end

    %% --- 5. OBSERVABILITY ---
    subgraph Phase5 [4. OBSERVABILITY]
        NX -. "Zero-Lock Read" .-> DB[Nexus Dashboard]
        DB -- "Usage Data" --> VA
    end

    %% --- 6. EXECUTION ---
    subgraph Phase4 [5. DAW EXECUTION]
        NHE -->|IIntentHandler| DS
        DS -->|Command Dispatch| ADC[Client]
        ADC -->|UDP OSC Port 9000| AMXD
    end

    %% Apply Classes
    class WAS,WHI,EXE,BHC,NHE engine;
    class HPF,F12,F24,NG dsp;
    class NIE,DS,ADC,DB logic;
    class AMXD,CM transport;
    class ONNX neural;
    class NX nexus;
    class GC,VA cloud;

`;


export default function SystemDesignPage() {
    return (

        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />

            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 ">
              
                <div className="max-w-6xl mx-auto p-8 space-y-8">
            <div className="space-y-2">
                        <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">System <span className="text-blue-500">Architecture</span></h1>
                <p className="text-slate-400">Deep-dive into the IntelligentAudio.NET core engine and DSP pipeline.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">

                        {/* Phase 1: Deployment */}
                        <Card className="bg-[#0d1117]/40 border-slate-800/50 backdrop-blur">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 font-mono text-sm border border-blue-500/20">
                                        1
                                    </div>
                                    <CardTitle className="text-lg text-white">Deployment & Handshake</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="text-sm text-slate-400 space-y-4">
                                <p>
                                    The system starts via Abletons <code className="text-blue-400">loadbang</code>. A TCP handshake occurs on Port <strong>Port 9005</strong> to verify the client and returns a port.
                                </p>
                                <div className="pt-2 border-t border-slate-800/50">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Inno Setup Logic</p>
                                    <Badge variant="outline" className="text-[10px] border-slate-700 text-white">Auto Firewall Config</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Phase 2: Engine */}
                        <Card className="bg-[#0d1117]/40 border-slate-800/50 backdrop-blur">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-sm border border-emerald-500/20">
                                        2
                                    </div>
                                    <CardTitle className="text-lg text-white">High-Performance Engine</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="text-sm text-slate-400 space-y-4">
                                <p>
                                    The audio is cleaned via <strong>HP-Filter(80hz)</strong> and <strong>NoiseGate</strong> before being streamed through a lock-free <code className="text-emerald-400">Bounded Channel</code>.
                                </p>
                                <div className="pt-2 border-t border-slate-800/50">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Memory Safety</p>
                                    <div className="flex gap-2 text-white">
                                        <Badge variant="outline" className="text-[10px] border-slate-700 text-white">ArrayPool&lt;T&gt;</Badge>
                                        <Badge variant="outline" className="text-[10px] border-slate-700 text-white">Span&lt;T&gt;</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Phase 3: Intelligence */}
                        <Card className="bg-[#0d1117]/40 border-slate-800/50 backdrop-blur">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 font-mono text-sm border border-indigo-500/20">
                                        3
                                    </div>
                                    <CardTitle className="text-lg text-white">AI & Domain Logic</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="text-sm text-slate-400 space-y-4">
                                <p>
                                    Whisper AI maps voice intents to music theory to ONNX. The logic is <strong>domain-agnostic</strong> and communicates via OSC on <strong>Port 9000</strong>.
                                </p>
                                <div className="pt-2 border-t border-slate-800/50">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Connectivity</p>
                                    <Badge variant="outline" className="text-[10px] border-slate-700 text-white">UDP OSC Payload</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


            {/* The Hero Diagram Card */}
            <Card className="bg-[#0d1117]/80 border-slate-800/50 backdrop-blur-sm overflow-hidden group">
                <CardHeader className="border-b border-slate-800/50 bg-slate-900/20">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-mono text-slate-400 flex items-center gap-2">
                            <Layout className="w-4 h-4" /> system-flow-diagram.mermaid
                        </CardTitle>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 sm:p-8 flex justify-center bg-grid-white/[0.02]">
                    <div className="w-full max-w-5xl transition-all duration-700 group-hover:scale-[1.01]">
                        <MermaidWrapper code={chartCode} />
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <div className="flex items-center gap-2 text-emerald-500">
                            <Zap size={18} />
                            <CardTitle className="text-sm">DSP Layer</CardTitle>
                        </div>
                    </CardHeader>
                            <CardContent className="text-[15px] text-slate-400">
                        Real-time conditioning using <strong>SimpleHighPassFilter</strong> and <strong>NoiseGate</strong> to optimize AI inference accuracy.
                    </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <div className="flex items-center gap-2 text-blue-500">
                            <Cpu size={18} />
                            <CardTitle className="text-sm">Core Engine</CardTitle>
                        </div>
                    </CardHeader>
                            <CardContent className="text-[15px] text-slate-400">
                        Lock-free <strong>.NET 10 Channels</strong> ensures zero-latency transport between audio capture and domain logic.
                    </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <div className="flex items-center gap-2 text-red-500">
                            <ShieldCheck size={18} />
                            <CardTitle className="text-sm">Deployment</CardTitle>
                        </div>
                    </CardHeader>
                            <CardContent className="text-[15px] text-slate-400">
                        <strong>Inno Setup</strong> automated firewall configuration and dependency management for seamless DAW integration.
                    </CardContent>
                        </Card>
            
            </div>
                   
                <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-400 flex">
                        
                        <Database className="h-4 w-4" />
                        <div className="text-red-500">
                            <AlertTitle>The Handshake (Port 9005)</AlertTitle> <p className="text-[-15px] opacity-70"> Automatic service discovery and client verification before opening the OSC Data Plane.</p>
                        </div>
                    </Alert>


                </div>

            </main>
        </div>    
        
        
    
        
    );
}
