"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import MidiDisplayProps from "@/contracts/MidiDisplayProps";

export const MidiDisplay = ({ chordName, midiNotes }: MidiDisplayProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mt-12 w-full max-w-md"
        >
            <Card className="bg-slate-950/60 border-blue-500/20 backdrop-blur-2xl p-8 overflow-hidden relative shadow-[0_0_50px_rgba(59,130,246,0.1)]">

                {/* Dynamisk bakgrundsglöd som reagerar på render */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.1, 0.05] }}
                    transition={{ duration: 2 }}
                    className="absolute -top-20 -right-20 h-64 w-64 bg-blue-500 rounded-full blur-[100px] pointer-events-none"
                />

                {/* HEADER SECTION */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex flex-col">
                        <h3 className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.5em] font-bold">
                            Signal Analysis
                        </h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-[1px] bg-blue-500/50 mt-1.5"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-blue-400 font-mono text-[9px] tracking-widest flex items-center gap-2 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
                            DECODED
                        </span>
                    </div>
                </div>

                {/* CHORD NAME - Med subtil text-glow */}
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-6xl font-extralight tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        {chordName}
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ top: "-100%" }}
                    animate={{ top: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none"
                />

                {/* MIDI NOTES GRID - Med Stagger-effekt */}
                <div className="grid grid-cols-3 gap-4">
                    {midiNotes?.map((item: any, i) => (
                        <motion.div
                            key={`${chordName}-${i}`} // Key-fix för att trigga om animation vid nytt ackord
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + (i * 0.1),
                                type: "spring",
                                stiffness: 300
                            }}
                            className="relative group bg-slate-900/40 border border-slate-800/50 p-5 rounded-sm text-center hover:border-blue-500/40 hover:bg-blue-500/[0.02] transition-all duration-300"
                        >
                            <div className="text-[8px] text-slate-600 font-mono mb-3 uppercase tracking-tighter group-hover:text-blue-400/50 transition-colors">
                                CH_{i + 1}
                            </div>
                            <div className="text-3xl font-mono text-white group-hover:text-blue-400 transition-colors tracking-tighter font-light">
                                {item.note}
                            </div>

                            {/* Subtil hover-dekor */}
                            <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500/0 group-hover:bg-blue-500/40 rounded-full transition-all" />
                        </motion.div>
                    ))}
                </div>

                {/* TECHNICAL FOOTER */}
                <div className="mt-12 pt-6 border-t border-slate-900/50 flex justify-between items-center opacity-40 group/footer">
                    <div className="flex gap-4 font-mono text-[8px] text-slate-500 uppercase tracking-widest">
                        <span>Lat: 142ms</span>
                        <span className="text-slate-800">|</span>
                        <span>Buf: 1024</span>
                    </div>
                    <div className="text-[8px] font-mono text-slate-400 font-bold tracking-widest group-hover/footer:text-blue-500 transition-colors">
                        IA.NET ENGINE v1.0
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
