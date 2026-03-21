"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Activity, Cpu, Box, Layout, Github, Linkedin, Mail, ArrowRight, Binary, Layers, ShieldCheck, ChevronDown, LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
    const coreLinks = [
        { name: "Nexus.Quantum", href: "/quantum", desc: "Master HUB", icon: Cpu },
        { name: "Nexus Core", href: "/nexus", desc: "8.72ns Performance Engine", icon: Cpu },
        { name: "Pulse", href: "/nexus-pulse", desc: "Binary NXP Implementation", icon: Activity },
        { name: "NXP Protocol", href: "/nxp", desc: "Deterministic Exchange Standard", icon: Binary },
        { name: "Telemetry", href: "/nexus-telemetry", desc: "Real-time Jitter Visibility", icon: Layout },
        { name: "The comparison", href: "/pricing", desc: "QUANTUM VS LEGACY", icon: Layout },
    ]

    const designLinks = [
        { name: "Neural Engine", href: "/neuralengine", desc: "Harmonic Neural Network", icon: Box },
        { name: "System Design", href: "/system-design", desc: "The NXP Principles", icon: Layers },
        { name: "Architecture", href: "/architect", desc: "Technical Documentation", icon: ShieldCheck },
    ]

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#02040a]/90 backdrop-blur-xl"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="container mx-auto h-20 flex items-center justify-between px-6 relative">

                {/* LOGO */}
                <Link href="/">
                    <div className="relative flex items-center gap-3 group">
                        <div className="relative p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                            <Activity className="h-5 w-5 text-blue-500" />
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-blue-400/20 blur-md rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold tracking-tighter text-[17px] leading-none text-white">
                                IntelligentAudio<span className="text-blue-500">.NET</span>
                            </div>
                            <span className="text-[10px] font-mono text-blue-500 tracking-[0.4em] leading-none mt-1 uppercase">
                                Nexus ecosystem
                            </span>
                        </div>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-10">
                    <div
                        className="flex items-center gap-2 cursor-pointer py-8"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                    >
                        <span className={`text-[11px] font-bold uppercase tracking-tight transition-colors ${isMegaMenuOpen ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
                            Ecosystem
                        </span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-blue-500' : 'text-slate-600'}`} />
                    </div>

                    <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" className="text-[11px] font-bold tracking-tight text-slate-400 hover:text-white transition-colors">
                        GIT
                    </Link>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-6 border-l border-white/10">
                        <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" target="_blank" className="text-slate-600 hover:text-white transition-colors"></Link>
                        <Link href="https://www.linkedin.com/in/binarybeats/" target="_blank" className="flex items-center gap-6 ml-6 pl-6"><LinkedinIcon className="h-4 w-4" /></Link> 
                        <Link href="mailto:post@intelligentaudio.net" className="text-slate-600 hover:text-white transition-colors"><Mail className="h-4 w-4" /></Link>
                    </div>
                </div>



                {/* MOBILE TOGGLE (Sheet) */}

                            {/* MOBILE NAV (Sheet) */}
                            <div className="md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/5">
                                            <Menu className="h-6 w-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="bg-[#02040a] border-l border-white/10 text-white p-8 overflow-y-auto">
                                        <SheetTitle className="flex items-center gap-3 mb-12">
                                            <div className="p-1.5 rounded-sm bg-blue-500/10 border border-blue-500/20">
                                                <Activity className="h-5 w-5 text-blue-500" />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-lg text-white tracking-tighter uppercase leading-none">NEXUS</span>
                                                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">Mobile Node</span>
                                            </div>
                                        </SheetTitle>

                                        <div className="flex flex-col gap-10">
                                            {/* Group 1: Core Infrastructure */}
                                            <div className="space-y-6">
                                                <p className="text-[9px] text-blue-500 font-black uppercase tracking-[0.4em] border-b border-blue-500/10 pb-2">
                                                    Core Infrastructure
                                                </p>
                                                <div className="flex flex-col gap-4">
                                                    {coreLinks.map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            href={link.href}
                                                            className="group flex items-center gap-4 hover:text-blue-400 transition-colors"
                                                        >
                                                            <link.icon className="h-5 w-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold uppercase tracking-tight">{link.name}</span>
                                                                <span className="text-[11px] text-slate-600 ">{link.desc}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Group 2: Engineering */}
                                            <div className="space-y-6">
                                                <p className="text-[9px] text-slate-600 uppercase tracking-[0.4em] border-b border-white/5 pb-2">
                                                    Specialized AI Nodes
                                                </p>
                                                <div className="flex flex-col gap-4">
                                                    {designLinks.map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            href={link.href}
                                                            className="group flex items-center gap-4 hover:text-blue-400 transition-colors"
                                                        >
                                                            <link.icon className="h-5 w-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold uppercase tracking-tight italic">{link.name}</span>
                                                                <span className="text-[11px] text-slate-600">{link.desc}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Footer Socials */}
                                            <div className="pt-10 border-t border-white/5 flex items-center gap-6">
                                                <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" target="_blank" className="text-slate-500 hover:text-white">
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                                    <Link href="https://www.linkedin.com/in/binarybeats/" target="_blank" className="text-slate-500 hover:text-white">
                                                    <Linkedin className="h-5 w-5" />
                                                </Link>
                                                <Link href="mailto:post@intelligentaudio.net" className="text-slate-500 hover:text-white">
                                                    <Mail className="h-5 w-5" />
                                                </Link>
                                            </div>

                                            <p className="text-[8px] text-slate-800 uppercase tracking-widest font-bold text-center mt-4 italic">
                                                © 2025 NEXUS // NXP CORE
                                            </p>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>




                {/* MEGA MENU - ABSOLUTE TO CONTAINER */}
                <AnimatePresence>
                    {isMegaMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-20 left-0 w-full px-6 pointer-events-none"
                        >
                            <div className="bg-[#0b0e14] border border-white/10 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl pointer-events-auto">
                                <div className="grid grid-cols-2 gap-16">
                                    {/* Left: Infrastructure */}
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] border-b border-blue-500/10 pb-3 italic">Core Infrastructure</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {coreLinks.map((link) => (
                                                <Link key={link.name} href={link.href} className="group flex items-start gap-4 p-3 rounded-sm hover:bg-white/5 transition-all">
                                                    <link.icon className="h-5 w-5 text-blue-500/40 group-hover:text-blue-500 mt-1" />
                                                    <div>
                                                        <div className="text-[13px] font-bold text-white uppercase tracking-tight group-hover:text-blue-400">{link.name}</div>
                                                        <div className="text-[10px] text-slate-500 font-light mt-1 italic">{link.desc}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Specialized */}
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] border-b border-white/5 pb-3 italic">Specialized AI Nodes</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {designLinks.map((link) => (
                                                <Link key={link.name} href={link.href} className="group flex items-start gap-4 p-3 rounded-sm hover:bg-white/5 transition-all">
                                                    <link.icon className="h-5 w-5 text-slate-700 group-hover:text-blue-400 mt-1" />
                                                    <div>
                                                        <div className="text-[13px] font-bold text-white uppercase tracking-tight">{link.name}</div>
                                                        <div className="text-[10px] text-slate-600 font-light mt-1 italic">{link.desc}</div>
                                                    </div>
                                                </Link>
                                            ))}s
                                        </div>
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-[9px] text-slate-700 uppercase tracking-[0.3em] font-mono italic">
                                        Protocol Status: <span className="text-blue-900 font-bold">nxp:// stable 2.1</span>
                                    </div>
                                    <Link href="/nxp" className="text-[10px] text-blue-500 font-bold hover:text-white transition-colors flex items-center gap-2 italic uppercase tracking-widest">
                                        View NXP Specs <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
