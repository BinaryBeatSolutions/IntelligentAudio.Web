"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { MicButtonProps } from "@/contracts/MicButtonProps";

export const NeuralMicButton = ({ isRecording, onClick }: MicButtonProps) => {
    // Här kan du senare skicka in en prop 'isGateOpen' från din signal-analys
    const isGateOpen = isRecording; // Demo-logik: lyser när vi spelar in
    const handleMicClick = () => {
        // 1. Trigga en kort, distinkt vibration (50ms)
        // Vi kollar om webbläsaren stöder det (mest Android/PWA)
        if (typeof window !== "undefined" && window.navigator.vibrate) {
            window.navigator.vibrate(60); // En skön "klick"-känsla
        }

        // 2. Kör din befintliga logik
        onClick();
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative group">
                <AnimatePresence>
                    {isRecording && (
                        <>
                            {/* Yttre Glöd som pulserar med "NoiseGate"-känsla */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isGateOpen ? [0.2, 0.4, 0.2] : 0.1,
                                    scale: isGateOpen ? [1, 1.1, 1] : 1
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-[-20px] rounded-full bg-red-500/10 blur-2xl z-0"
                            />

                            {/* Den tekniska 3-sekunders-ringen (Progress) */}
                            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 z-20 pointer-events-none">
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="54"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-red-500/40"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3.5, ease: "linear" }}
                                />
                            </svg>
                        </>
                    )}
                </AnimatePresence>

                <button
                    onClick={handleMicClick}
                    className={cn(
                        "relative z-10 h-28 w-28 rounded-full border transition-all duration-700 flex items-center justify-center overflow-hidden cursor-pointer",
                        "bg-slate-950/60 backdrop-blur-xl",
                        isRecording
                            ? "border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.15)] scale-105"
                            : "border-slate-800 hover:border-cyan-500/40"
                    )}
                >
                    <div className="flex flex-col items-center gap-1">
                        <motion.div
                            animate={isRecording ? { y: [0, -2, 0] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Mic className={cn(
                                "h-10 w-10 transition-colors duration-700",
                                isRecording ? "text-red-500" : "text-slate-400"
                            )} />
                        </motion.div>

                        {/* Liten NoiseGate-indikator inuti knappen */}
                        <AnimatePresence>
                            {isRecording && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-1"
                                >
                                    <Activity className="h-3 w-3 text-red-500/60 animate-pulse" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </button>
            </div>

            {/* Status-text som matchar din "Signal Analysis"-design */}
            <div className="h-4 overflow-hidden">
                <AnimatePresence mode="wait">
                    {isRecording ? (
                        <motion.p
                            key="recording"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-500"
                        >
                            Signal Active
                        </motion.p>
                    ) : (
                        <motion.p
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500"
                        >
                            Standby
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
