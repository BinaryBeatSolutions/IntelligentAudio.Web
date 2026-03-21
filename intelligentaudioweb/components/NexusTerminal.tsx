"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, X, Zap, Activity, Cpu, ShieldCheck } from "lucide-react"

export default function NexusTerminal() {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [log, setLog] = useState([
        { type: 'sys', text: 'NXP CORE v2.1 // BOOT SEQUENCE COMPLETE' },
        { type: 'sys', text: 'CONNECTION SECURED VIA MAGIC_KEY_0x87' },
        { type: 'ai', text: 'READY FOR COMMANDS. HOW CAN I ASSIST YOUR INFRASTRUCTURE?' }
    ])

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = inputValue.trim().toLowerCase();
        if (!cmd) return;

        // 1. Logga användarens kommando
        setLog(prev => [...prev, { type: 'user', text: `EXEC: ${cmd.toUpperCase()}` }]);
        setInputValue("");

        // 2. NXP-SIMULERING (SFS-SPECIAL)
        if (cmd.includes('sfs')) {
            setTimeout(() => {
                setLog(prev => [...prev,
                { type: 'sys', text: 'INITIATING BINARY SEARCH: [SFS_DATABASE_LOCAL]' },
                { type: 'ai', text: '[NXP://] MATCH FOUND: SFS 2010:800 (Skollag). Integrity Verified. No Latency.' },
                { type: 'ai', text: 'LEX NEXUS: "Beslutet är förenligt med 2 kap. 3 §. Arkivering i Vault påbörjad."' }
                ]);
            }, 400);
        } else {
            // Standardrespons
            setTimeout(() => {
                setLog(prev => [...prev, { type: 'ai', text: `[HUB_RESPONSE] Command '${cmd.toUpperCase()}' processed via nxp:// stream.` }]);
            }, 300);
        }
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 font-mono">
            {/* TERMINAL TRIGGER */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative p-4 bg-[#0b0e14] border border-blue-500/30 rounded-sm shadow-2xl hover:border-blue-500 transition-all active:scale-95"
            >
                <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/80 group-hover:text-blue-400">
                        Nexus Terminal
                    </span>
                </div>
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
            </button>

            {/* TERMINAL WINDOW */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="absolute bottom-16 right-0 w-[450px] h-[550px] bg-[#02040a]/95 border border-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                    >
                        {/* HEADER */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-blue-500/5">
                            <div className="flex items-center gap-3">
                                <Cpu className="w-3 h-3 text-blue-500" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-400 italic">
                                    HUB Control // NXP-Authenticated
                                </span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-white text-slate-600 transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* LOG AREA */}
                        <div className="flex-1 p-6 overflow-y-auto space-y-3 text-[11px] leading-relaxed">
                            {log.map((line, i) => (
                                <div key={i} className={
                                    line.type === 'sys' ? 'text-slate-600 italic' :
                                        line.type === 'user' ? 'text-white font-bold' :
                                            'text-blue-400'
                                }>
                                    <span className="mr-2">{line.type === 'user' ? 'λ' : line.type === 'ai' ? '◆' : '::'}</span>
                                    {line.text}
                                </div>
                            ))}
                        </div>

                        {/* COMMAND INPUT */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-black/40">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-500 font-bold text-xs">NXP@HUB:~$</span>
                                <input
                                    autoFocus
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter command..."
                                    className="bg-transparent border-none outline-none text-white text-xs flex-1 placeholder:text-slate-800 uppercase tracking-widest font-bold"
                                />
                                <Activity className="w-3 h-3 text-blue-900 animate-pulse" />
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
