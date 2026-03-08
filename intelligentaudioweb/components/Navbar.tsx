// components/navbar.tsx
"use client"

import Link from "next/link"
import { Menu, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Activity } from "lucide-react"
import { motion } from "framer-motion"


interface TargetLink {
    target: string;
    name: string;
    href: string;
}

/**
 * Prepare for Content management
 * @returns
 */
export default function Navbar() {
    const navLinks = [
        { name: "Neural engine", href: "/neuralengine", target:"_self"},
        { name: "System design", href: "/system-design", target: "_self" },
        { name: "Architecture", href: "/architect", target: "_self" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/binarybeats/", target: "_blank" },
        { name: "Gihub", href: "https://github.com/BinaryBeatSolutions/IntelligentAudio.NET", target: "_blank" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/">
                <div className="relative flex items-center gap-3 group">
                    <div className="relative p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                        <Activity className="h-5 w-5 text-blue-500" />
                        {/* Neural Engine Glow */}
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-blue-400/20 blur-md rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                       
                        <div className="font-bold tracking-tighter text-[17px] leading-none">
                            IntelligentAudio<span className="text-blue-500">.NET</span>
                        </div>
                        <span className="text-[8px] font-mono text-blue-500 tracking-[0.2em] leading-none mt-1 uppercase">
                            Neural Harmonic Engine
                        </span>
                    </div>
                </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} target={ link.target} className="text-[11px] font-bold  text-muted-foreground hover:text-white transition-colors uppercase text-[10px] ">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* MOBILE NAV (Sheet) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#02040a] border-white/10 text-white p-6">
                            <SheetTitle className="text-white mb-8 border-b border-white/5 pb-4">MENU</SheetTitle>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href} className="text-sm font-bold  hover:text-blue-500">
                                        {link.name}
                                    </Link>
                                ))}
                                <hr className="border-white/5" />
                                <div className="flex flex-col gap-3">
                                    <Button variant="outline" className="justify-start gap-2 bg-[#02040a] border-blue-500/30 text-blue-500 cursor-pointer">
                                        <Linkedin className="h-4 w-4" href="https://www.linkedin.com/in/binarybeats/" target="_blank" /> Linkedin (Author)
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2 bg-[#02040a] border-blue-500/30 text-blue-500  cursor-pointer">
                                        <Github className="h-4 w-4" href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" target="_blank"/> Github
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
