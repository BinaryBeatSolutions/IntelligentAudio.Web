"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { cn } from "@/lib/utils"; // Standard shadcn helper
import { MicButtonProps } from "@/contracts/MicButtonProps";

export const NeuralMicButton = ({ isRecording, onClick }: MicButtonProps) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative group">
                {/* Animationer här (samma som tidigare) */}
                <button
                    onClick={onClick}
                    className={cn(
                        "relative z-10 h-24 w-24 rounded-full border transition-all duration-500 flex items-center justify-center overflow-hidden",
                        "bg-slate-950/80 backdrop-blur-md",
                        isRecording ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.3)]" : "border-slate-800"
                    )}
                >
                    <Mic className={cn("h-10 w-10", isRecording ? "text-cyan-400" : "text-slate-400")} />
                </button>
            </div>
        </div>
    );
};