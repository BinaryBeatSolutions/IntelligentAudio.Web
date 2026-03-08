"use client";
import React from 'react';
import { NeuralMicButton } from "@/components/NeuralMicButton";
import { useAudioInference } from "@/hooks/useAudioInference";
import { MidiDisplay } from "@/components/MidiDisplay";

export default function InferenceWorker() {
    // Hooken hanterar allt "under huven"
    const { isRecording, startInference, result } = useAudioInference();

    return (
        <div className="flex flex-col items-center justify-center p-12 min-h-[500px] w-full">
            {/* HUD-inspirerad rubrik (Matchar picky style) */}
            <div className="mb-12 text-center">
                <h1 className="text-slate-200 font-light tracking-[0.2em] uppercase text-sm mb-2">
                    Neural Harmonic Engine
                </h1>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto" />
            </div>

            {/* KNAPPEN! */}
            <NeuralMicButton
                isRecording={isRecording}
                onClick={startInference}
            />

            {/* Resultatet dyker upp med Framer Motion när API:et svarar */}
            {result && (
                <MidiDisplay
                    chordName={result.chordName}
                    midiNotes={result.notes}
                />
            )}



            {/* Standby-text om vi inte gör något */}
            {!result && !isRecording && (
                <p className="mt-10 text-slate-600 font-mono text-[9px] uppercase tracking-[0.5em] animate-pulse">
                    System Standby | Input Ready
                </p>
            )}
        </div>
    );
}