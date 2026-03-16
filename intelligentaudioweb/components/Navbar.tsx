"use client"

import Link from "next/link"
import { Menu, Activity, ChevronDown, Cpu, Box, Layout, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export default function Navbar() {
    const coreLinks = [
        { name: "Nexus Core", href: "/nexus", desc: "8.72ns Performance Engine", icon: Cpu },
        { name: "Pulse", href: "/nexus-pulse", desc: "NXP Protocol Implementation", icon: Activity },
        { name: "Live Dashboard", href: "/nexus-telemetry", desc: "Real-time Jitter Visibility", icon: Layout },
    ]

    const designLinks = [
        { name: "Neural Engine", href: "/neuralengine", desc: "Harmonic Neural Network", icon: Box },
        { name: "System Design", href: "/system-design", desc: "The NXP Principles", icon: Layout },
        { name: "Architecture", href: "/architect", desc: "Technical Documentation", icon: Cpu },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
                            <span className="text-[8px] font-mono text-blue-500 tracking-[0.2em] leading-none mt-1 uppercase">
                                Neural Harmonic Network
                            </span>
                        </div>
                    </div>
                </Link>

                {/* DESKTOP NAV WITH MEGA MENU */}
                <div className="hidden md:flex items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {/* TECHNOLOGY GROUP */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[10px] font-bold uppercase text-muted-foreground hover:text-white">
                                    Nexus Ecosystem
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-[#0b0e14] border border-white/10 p-4 w-[400px]">
                                    <div className="grid gap-3">
                                        {coreLinks.map((link) => (
                                            <Link key={link.name} href={link.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors group">
                                                <link.icon className="h-4 w-4 text-blue-500" />
                                                <div>
                                                    <div className="text-[11px] font-bold text-white uppercase">{link.name}</div>
                                                    <div className="text-[10px] text-slate-500">{link.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ENGINEERING GROUP */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[10px] font-bold uppercase text-muted-foreground hover:text-white">
                                    Engineering
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-[#0b0e14] border border-white/10 p-4 w-[400px]">
                                    <div className="grid gap-3">
                                        {designLinks.map((link) => (
                                            <Link key={link.name} href={link.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors group">
                                                <link.icon className="h-4 w-4 text-blue-400" />
                                                <div>
                                                    <div className="text-[11px] font-bold text-white uppercase">{link.name}</div>
                                                    <div className="text-[10px] text-slate-500">{link.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* DIRECT LINKS */}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                        <Link href="https://github.com/IntelligentAudio.NET" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/binarybeats/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* MOBILE NAV (Sheet) remains mostly same but grouped */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#02040a] border-white/10 text-white p-6">
                            <SheetTitle className="text-white mb-8 border-b border-white/5 pb-4">NEXUS MENU</SheetTitle>
                            <div className="flex flex-col gap-6">
                                <div className="space-y-4">
                                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Ecosystem</p>
                                    {[...coreLinks, ...designLinks].map((link) => (
                                        <Link key={link.name} href={link.href} className="block text-sm font-bold hover:text-blue-500">
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <hr className="border-white/5" />
                                <div className="flex gap-4">
                                    <Link href="https://github.com" target="_blank"><Github className="h-5 w-5" /></Link>
                                    <Link href="https://linkedin.com" target="_blank"><Linkedin className="h-5 w-5" /></Link>
                                    <Link href="mailto:post@intelligentaudio.net"><Mail className="h-5 w-5" /></Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
