"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InferenceWorker from "@/components/InterferenceWorker"; // Din befintliga komponent
import { ChevronUp } from "lucide-react";

export default function NeuralBottomBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isProcessing] = useState<boolean>(false);

    return (
        <motion.div
            initial={false}
            animate={{
                height: isExpanded ? "90vh" : "70px",
                backgroundColor: isExpanded ? "rgba(2, 6, 23, 0.98)" : "rgba(2, 6, 23, 0.85)"
            }}
            className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
        >
            {/* Clickable Header för att expandera */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-[70px] flex items-center justify-between px-8 cursor-pointer group"
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={isProcessing ? {
                            scale: [1, 1.1, 1],
                            filter: ["drop-shadow(0 0 2px #3b82f6)", "drop-shadow(0 0 12px #3b82f6)", "drop-shadow(0 0 2px #3b82f6)"]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 18V5"></path>
                            <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                            <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                            <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                            <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                            <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                            <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                            <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                    </motion.div>
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