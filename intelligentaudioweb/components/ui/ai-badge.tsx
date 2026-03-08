import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";



export default function AIBadge() {
    return (
        <Badge variant="outline" className="relative border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1 mb-8 font-mono text-[10px] overflow-hidden">
            <div className="flex items-center gap-3">
                <span className="relative z-10">.NET 10 LTS + HIGH PRECISION AUDIO</span>
                {/* En liten simulerad vågform */}
                <div className="flex gap-[2px] h-3 items-center">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: ["20%", "80%", "20%"] }}
                            transition={{
                                duration: 1.5 + i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-[2px] bg-blue-500/40 rounded-full"
                        />
                    ))}
                </div>
            </div>
            {/* Subtil glimt som sveper förbi */}
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-1/2"
            />
        </Badge>
    )
}
