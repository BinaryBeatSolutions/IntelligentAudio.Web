"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"; // Från din shadcn-installation
import { cn } from "@/lib/utils";
import MidiDisplayProps from "@/contracts/MidiDisplayProps";

export const MidiDisplay = ({ chordName, midiNotes }: MidiDisplayProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-12 w-full max-w-md"
        >
            <Card className="bg-slate-950/40 border-cyan-500/20 backdrop-blur-xl p-8 overflow-hidden relative shadow-2xl">
                {/* Futuristisk dekorations-glöd i bakgrunden */}
                <div className="absolute -top-20 -right-20 h-40 w-40 bg-cyan-500/5 blur-[80px] rounded-full" />

                {/* Header med Monospace-känsla */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex flex-col">
                        <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                            Signal Analysis
                        </h3>
                        <div className="h-[1px] w-12 bg-cyan-500/50 mt-1" />
                    </div>
                    <span className="text-cyan-400 font-mono text-[10px] animate-pulse flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        DECODED
                    </span>
                </div>

                {/* Ackordnamnet - Den stora stjärnan */}
                <div className="mb-10">
                    <h2 className="text-5xl font-extralight tracking-tighter text-white">
                        {chordName}
                    </h2>
                </div>

                {/* MIDI-noterna i ett grid */}
                <div className="grid grid-cols-3 gap-4">
                    {midiNotes?.map((item: any, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-slate-900/60 border border-slate-800/50 p-4 rounded-lg text-center group hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="text-[9px] text-slate-500 font-mono mb-2 group-hover:text-cyan-400/50 transition-colors">
                                MIDI_CH_{i + 1}
                            </div>
                            <div className="text-2xl font-mono text-white group-hover:text-cyan-400 transition-colors tracking-tighter">
                                {item.note.toString().padStart(2, 0)}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dekorativ "Binary"-footer för den där extra Sci-Fi touchen */}
                <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-center opacity-30">
                    <div className="text-[9px] font-mono text-slate-500">
                        LATENCY: 142MS // BUFFER: 1024
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase">
                        IntelligentAudio.NET // v1.0
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
