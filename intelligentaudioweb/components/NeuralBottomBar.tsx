"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InferenceWorker from "@/components/InterferenceWorker";
import { ChevronUp } from "lucide-react";

export default function NeuralBottomBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={{
                height: isExpanded ? "88vh" : "70px",
                backgroundColor: isExpanded ? "rgba(2, 6, 23, 0.98)" : "rgba(2, 6, 23, 0.85)"
            }}
            className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden">

            {/* Clickable Header expand */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-[70px] flex flex-col justify-center px-8 cursor-pointer group relative"
            >
                <div className="flex items-center justify-between w-full">
                    {/* Vänster spacer för balans */}
                    <div className="w-6" />

                    {/* Centrerad Text */}
                    <div className="flex flex-col items-center">
                        <span className="group-hover:text-slate-300 font-light tracking-[0.2em] uppercase text-[10px] sm:text-xs text-blue-500 transition-colors duration-500">
                            Neural Harmonic Network
                        </span>
                    </div>

                    {/* Höger sida: Ikon */}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronUp className="text-slate-500 group-hover:text-slate-300 transition-colors" />
                    </motion.div>
                </div>

                {/* Den tonade linjen som integrerar headern med innehållet */}
                <div className="absolute bottom-0 left-0 right-0 px-8">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </div>

            {/* Innehåll: Här renderas InferenceWorker */}
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
