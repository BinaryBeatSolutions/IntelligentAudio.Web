"use client";
import { useEffect, useState, useId } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "base", // Vi kör 'base' för att ha full kontroll över färgerna
    themeVariables: {
        fontFamily: "Inter, ui-sans-serif, system-ui",
        fontSize: "14px",

        // Bakgrunder och Linjer
        darkMode: true,
        background: "transparent",
        mainBkg: "#020617",         // Matchar bg-slate-950
        nodeBorder: "#1e293b",      // slate-800
        lineColor: "#3b82f6",       // blue-500 (Dina kopplingar)

        // Subgraphs (Boxarna runt logiken)
        clusterBkg: "rgba(2, 6, 23, 0.4)", // bg-slate-950/40
        clusterBorder: "rgba(59, 130, 246, 0.2)", // Subtil blue-500 border

        // Text
        primaryTextColor: "#f8fafc", // slate-50
        secondaryTextColor: "#94a3b8", // slate-400

        // States (Används för de olika färgkodade noderna)
        primaryColor: "#0f172a",    // Mörkblå noder
        secondaryColor: "#022c22",  // DSP (Mörkgrön)
        tertiaryColor: "#1e1b4b",   // Logic (Mörklila)
    },
    flowchart: {
        curve: "basis",             // Mjuka, organiska linjer
        htmlLabels: true,
        padding: 20
    }
});
export default function MermaidRenderer({ code }: { code: string }) {
    const [svg, setSvg] = useState("");
    const id = useId().replace(/:/g, ""); // Generera ett unikt ID för SVG:n

    useEffect(() => {
        const renderChart = async () => {
            try {
                // Generera SVG-strängen från din kod
                const { svg } = await mermaid.render(`mermaid-${id}`, code);
                setSvg(svg);
            } catch (error) {
                console.error("Mermaid render failed:", error);
            }
        };

        renderChart();
    }, [code, id]);

    return (
        <div
            className="w-full flex justify-center py-4 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
