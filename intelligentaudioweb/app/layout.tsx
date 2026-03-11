import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

/*import Header from "@/components/header";*/
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge"
import NeuralBottomBar from "../components/NeuralBottomBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



// 1. Bryt ut viewport helt (Vercel kräver detta nu)
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "#020617",
};

// 2. Renodlad metadata utan viewport-strängen
export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "IntelligentAudio.NET",
    description: "IntelligentAudio.NET",
    openGraph: {
        title: 'IntelligentAudio.NET',
        description: 'Ultra-low latency audio middleware for the AI era.',
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
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IntelligentAudio.NET',
        description: 'Zero-copy audio processing for .NET 10.',
        images: ['https://intelligentaudio.net'],
    },
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
                        <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1 mb-8 animate-pulse font-mono text-[10px] tracking-widest">
                            .NET 10 LTS + HIGH PRECISION AUDIO
                        </Badge>
                    </div>
                    {children}
                </main>
                <Footer />
                <NeuralBottomBar />
                <Analytics />
            </body>
        </html>
    );
}