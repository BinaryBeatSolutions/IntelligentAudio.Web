"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { BrainIcon } from "./BrainIcon"; // Se till att sökvägen stämmer
import { cn } from "@/lib/utils";

// Utökad interface för att hantera offline-state
export interface MicButtonProps {
    isRecording: boolean;
    isOffline?: boolean; // Ny prop
    onClick: () => void;
}

export const NeuralMicButton = ({ isRecording, isOffline, onClick }: MicButtonProps) => {
    const isGateOpen = isRecording;

    const handleMicClick = () => {
        if (isOffline) return; // Inaktivera klick om offline
        if (typeof window !== "undefined" && window.navigator.vibrate) {
            window.navigator.vibrate(60);
        }
        onClick();
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative group">
                <AnimatePresence>
                    {(isRecording || isOffline) && (
                        <>
                            {/* Glöd: Röd vid inspelning, Bärnsten vid offline */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isOffline ? [0.1, 0.3, 0.1] : (isGateOpen ? [0.2, 0.4, 0.2] : 0.1),
                                    scale: isOffline ? [1, 1.2, 1] : (isGateOpen ? [1, 1.1, 1] : 1),
                                    backgroundColor: isOffline ? "rgba(245, 158, 11, 0.15)" : "rgba(239, 68, 68, 0.1)"
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: isOffline ? 3 : 1.5, repeat: Infinity }}
                                className="absolute inset-[-30px] rounded-full blur-3xl z-0"
                            />

                            {/* Teknisk ring (Gömmer den vid offline för att skilja lägena) */}
                            {!isOffline && (
                                <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 z-20 pointer-events-none">
                                    <motion.circle
                                        cx="50%" cy="50%" r="54" fill="none"
                                        stroke="currentColor" strokeWidth="2"
                                        className="text-red-500/40"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 3.5, ease: "linear" }}
                                    />
                                </svg>
                            )}
                        </>
                    )}
                </AnimatePresence>

                <button
                    onClick={handleMicClick}
                    disabled={isOffline}
                    className={cn(
                        "relative z-10 h-28 w-28 rounded-full border transition-all duration-700 flex items-center justify-center overflow-hidden",
                        "bg-slate-950/60 backdrop-blur-xl",
                        isOffline
                            ? "border-amber-500/40 cursor-wait shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                            : isRecording
                                ? "border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.15)] scale-105 cursor-pointer"
                                : "border-slate-800 hover:border-cyan-500/40 cursor-pointer"
                    )}
                >
                    <div className="flex flex-col items-center gap-1">
                        <AnimatePresence mode="wait">
                            {isOffline ? (
                                <motion.div
                                    key="brain"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.2 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                >
                                    <BrainIcon isProcessing={true} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="mic"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div animate={isRecording ? { y: [0, -2, 0] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                                        <Mic className={cn("h-10 w-10 transition-colors duration-400", isRecording ? "text-red-500" : "text-slate-400")} />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </button>
            </div>

            {/* Dynamisk Status-text */}
            <div className="h-6 overflow-hidden flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {isOffline ? (
                        <motion.div key="offline" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="flex flex-col items-center">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Neural Link Severed</p>
                            <p className="text-[8px] uppercase tracking-[0.1em] text-slate-500 mt-1">Reconnecting Core...</p>
                        </motion.div>
                    ) : isRecording ? (
                        <motion.p key="recording" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-500">Signal Active</motion.p>
                    ) : (
                        <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">System Standby</motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
