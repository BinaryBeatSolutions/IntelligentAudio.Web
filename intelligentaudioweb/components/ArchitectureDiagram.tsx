"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true,
    theme: "dark",
    securityLevel: "loose",
    themeVariables: {
        fontFamily: "Inter, sans-serif",
        primaryColor: "#3b82f6",
        lineColor: "#334155", // slate-700
    },
});

export default function ArchitectureDiagram({ code }: { code: string }) {
    useEffect(() => {
        mermaid.contentLoaded();
    }, [code]);

    return <div className="mermaid flex justify-center bg-slate-950/50 p-6 rounded-xl border border-slate-800">{code}</div>;
}
