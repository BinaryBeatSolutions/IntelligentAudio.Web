"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { MicButtonProps } from "@/contracts/MicButtonProps";

export const NeuralMicButton = ({ isRecording, onClick }: MicButtonProps) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative group">
                {/* Dynamisk Ring-animation baserad på status */}
                <AnimatePresence>
                    {isRecording && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border-2 border-red-500/40 z-0 blur-sm"
                        />
                    )}
                </AnimatePresence>

                <button
                    onClick={onClick}
                    className={cn(
                        "relative z-10 h-28 w-28 rounded-full border transition-all duration-700 flex items-center justify-center bg-slate-950/40 backdrop-blur-xl",
                        isRecording
                            ? "border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
                            : "border-slate-800 hover:border-cyan-500/40"
                    )}
                >
                    {/* Själva mikrofonen animeras subtilt när den lyssnar */}
                    <motion.div
                        animate={isRecording ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Mic className={cn(
                            "h-10 w-10 transition-colors duration-700",
                            isRecording ? "text-red-500" : "text-slate-400"
                        )} />
                    </motion.div>
                </button>
            </div>
        </div>
    );
};
