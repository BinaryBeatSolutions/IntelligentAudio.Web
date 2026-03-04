import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900/50 bg-[#02040a]/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* LOGO & BRAND */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 relative bg-blue-500/10 rounded-sm border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                        {/* Här använder vi din ikon.png */}
                        <Image
                            src="/icon.png"
                            alt="Logo"
                            width={20}
                            height={20}
                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <span className="font-bold text-sm tracking-tight text-white hidden sm:block">
                        IntelligentAudio<span className="text-blue-500">.NET</span>
                    </span>
                </Link>

                {/* NAVIGATION */}
                <nav className="flex items-center gap-8">
                    {/*<Link href="#features" className="text-[12px] uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors font-medium">*/}
                    {/*    Engine*/}
                    {/*</Link>*/}
                    <Link href="/architect" className="text-[12px] uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors font-medium">
                        Architecture
                    </Link>
                    <Button asChild variant="outline" size="sm" className="border-blue-500/20 bg-blue-500/5 text-blue-400 hover:bg-blue-500 hover:text-white transition-all h-8 text-[11px] uppercase tracking-wider">
                        <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET">GitHub</Link>
                    </Button>
                </nav>

            </div>
        </header>
    )
}
