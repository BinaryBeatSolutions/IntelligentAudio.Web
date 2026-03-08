"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InferenceWorker from "@/components/InterferenceWorker"; // Din befintliga komponent
import { ChevronUp, Cpu } from "lucide-react";

export default function NeuralBottomBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={{
                height: isExpanded ? "90vh" : "70px",
                backgroundColor: isExpanded ? "rgba(2, 6, 23, 0.98)" : "rgba(2, 6, 23, 0.85)"
            }}
            className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-[2.5rem] overflow-hidden"
        >
            {/* Clickable Header för att expandera */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-[70px] flex items-center justify-between px-8 cursor-pointer group"
            >
                <div className="flex items-center gap-4">
                    <Cpu className="w-5 h-5 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-[10px] tracking-[0.3em] text-slate-400 font-bold uppercase">
                        Neural Engine Console
                    </span>
                </div>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronUp className="text-slate-500" />
                </motion.div>
            </div>

            {/* Innehåll: Här renderas din InferenceWorker direkt */}
            <div className="h-[calc(90vh-70px)] overflow-y-auto custom-scrollbar">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <InferenceWorker />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}