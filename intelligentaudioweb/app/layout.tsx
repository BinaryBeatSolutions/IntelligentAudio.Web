import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntelligentAudio.NET",
    description: "IntelligentAudio.NET", openGraph: {
        title: 'IntelligentAudio.NET',
        description: 'Ultra-low latency audio middleware for the AI era.',
        url: 'https://intelligentaudio.net',
        siteName: 'IntelligentAudio.NET',
        images: [
            {
                url: 'https://intelligentaudio.net', // Länka till din bild
                width: 1200,
                height: 630,
                alt: 'IntelligentAudio.NET Architecture Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
        <Header />
        {children}
      </body>
    </html>
  );
}