import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Cpu, Zap, Database, Layout, ShieldCheck } from "lucide-react";
import MermaidWrapper from "@/components/MermaidWrapper";

const chartCode = `
graph TD
    %% Custom Styles för din Next.js Dark Mode
    classDef engine fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#f8fafc;
    classDef dsp fill:#022c22,stroke:#10b981,stroke-width:2px,color:#ecfdf5;
    classDef logic fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#f5f3ff;
    classDef performance fill:#1e3a8a,stroke:#3b82f6,stroke-dasharray: 5 5,color:#3b82f6;
    classDef transport fill:#450a0a,stroke:#ef4444,stroke-width:2px,color:#fef2f2;
    classDef external fill:#000,stroke:#475569,stroke-dasharray: 5 5,color:#94a3b8;

    %% 1. Deployment & Handshake
    subgraph Phase1 [1. DEPLOYMENT & HANDSHAKE]
        IS[Inno Setup Installer] -->|Port Config| FW[Firewall: 9000/9005]
        AMXD[.amxd Device] -->|TCP Handshake| CM[IClientManager]
        EXE[IntelligentAudio.NET.exe] -.-> CM
    end

    %% 2. The Core Pipeline (Hjärtat)
    subgraph Phase2 [2. HIGH-PERFORMANCE ENGINE]
        WAS[WindowsAudioSource] -->|Span T / ArrayPool| RS[Resampler 16kHz]
        RS --> HPF[[SimpleHighPassFilter]]
        HPF --> NG[[NoiseGateProcessor]]
        
        %% Lock-Free Badge kopplad till kanalen
        NG -->|Clean Stream| BHC[Bounded Channel]
        LFC((LOCK-FREE)) -.- BHC
    end

    %% 3. Inference & Logic (Hjärnan)
    subgraph Phase3 [3. INFERENCE & ACTION]
        BHC --> WHI[WhisperInferenceWorker]
        WHI -->|Text Intent| IIH{IIntentHandler}
        IIH -->|Module| MT[MusicTheory.ChordFactory]
        MT --> ADC[AbletonDawClient]
    end

    %% Execution Loop
    ADC -->|UDP OSC Port 9000| AMXD
    AMXD -->|MIDI| SOUND[Real-time Audio]

    %% Apply Classes
    class WAS,RS,WHI,EXE,BHC engine;
    class HPF,NG dsp;
    class IIH,MT,ADC logic;
    class LFC performance;
    class AMXD,CM transport;
    class ABL,SOUND external;
`;


export default function SystemDesignPage() {
    return (

        <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />

            <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto p-8 space-y-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">System Architecture</h1>
                <p className="text-slate-400">Deep-dive into the IntelligentAudio.NET core engine and DSP pipeline.</p>
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
