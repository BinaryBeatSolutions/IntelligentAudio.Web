"use client";

import dynamic from 'next/dynamic';

// Vi laddar själva renderingen dynamiskt här inne
const MermaidRenderer = dynamic(
    () => import('./MermaidRenderer'), // Vi skapar denna i nästa steg
    { ssr: false }
);

export default function MermaidWrapper({ code }: { code: string }) {
    return <MermaidRenderer code={code} />;
}