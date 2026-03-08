"use client";
import { motion, AnimatePresence } from "framer-motion";

interface BrainIconProps {
    isProcessing: boolean;
}

export const BrainIcon = ({ isProcessing }: BrainIconProps) => {
    return (
        <div className="relative flex items-center justify-center w-10 h-10">
            {/* Den blåa "Neural Aura" som strålar ut när AI:n tänker */}
            <AnimatePresence>
                {isProcessing && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [1, 2, 2.5],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"
                    />
                )}
            </AnimatePresence>

            {/* Själva Hjärnan */}
            <motion.div
                animate={isProcessing ? {
                    scale: [1, 1.15, 1],
                    filter: ["drop-shadow(0 0 2px #3b82f6)", "drop-shadow(0 0 15px #3b82f6)", "drop-shadow(0 0 2px #3b82f6)"]
                } : {}}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className={isProcessing ? "text-blue-400" : "text-slate-500 transition-colors duration-500"}
            >
                <svg
                    xmlns="http://www.w3.org"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
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
    );
};
