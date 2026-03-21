import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
/*import Header from "@/components/header";*/
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge"
import NeuralBottomBar from "../components/NeuralBottomBar";
import NexusTerminal from "../components/NexusTerminal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Allow scaling.
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: "#020617",
};

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "NEXUS: by IntelligentAudio.NET",
    description: "NEXUS ECOSYSTEM",
    openGraph: {
        title: 'IntelligentAudio.NET',
        description: 'Ultra-low latency hardware to hardware for the AI era.',
        url: 'https://intelligentaudio.net',
        siteName: 'IntelligentAudio.NET',
        images: [
            {
                url: 'https://intelligentaudio.net',
                width: 1200,
                height: 630,
                alt: 'IntelligentAudio.NET Architecture Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    icons: {
        icon: '/icon.png',
        apple: '/apple-icon.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-[#02040a] text-white min-h-screen flex flex-col font-sans">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 pt-8">
                    {/* Global Badge för alla sidor */}
                    <div className="flex justify-center ">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1 mb-12 animate-pulse font-mono text-[10px] tracking-widest">
                            .NET 10 LTS + Baseline V2.1 | Dual-Stream
                        </Badge>
                    </div>
                    <div className="min-h-screen bg-[#02040a] text-slate-50 font-sans selection:bg-blue-500/30">
                        {/* BACKGROUND LAYER */}
                        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent)] pointer-events-none" />
                        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative max-w-6xl mx-auto py-12">
                            {children}

                            <Analytics />
                        </div>
                    </div>
                   </main>
                <Footer />
                {/* TERMINAL */}
                <div className="fixed bottom-28 right-8 z-[100]">
                    <NexusTerminal />
                </div>

                {/* NEURAL BAR */}
                <div className="fixed bottom-0 w-full z-[80]">
                    <NeuralBottomBar />
                </div>
            </body>
        </html>
    );
}