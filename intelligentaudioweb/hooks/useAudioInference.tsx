"use client";
import { useState, useRef } from 'react';

interface MidiNote {
    note: string | number;
    velocity: number;
}

interface MidiInferenceResponse {
    chordName: string;
    notes: MidiNote[];
    timestamp: string;
}

export const useAudioInference = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [result, setResult] = useState<MidiInferenceResponse | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const startInference = async () => {
        if (isRecording || isProcessing) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            const chunks: Blob[] = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunks.push(e.data);
            };

            mediaRecorder.onstop = async () => {
                setIsProcessing(true);
                const audioBlob = new Blob(chunks, { type: 'audio/wav' });

                // Skicka till API
                await sendToApi(audioBlob);

                // Cleanup: Stäng mikrofonen ordentligt
                stream.getTracks().forEach(track => track.stop());
                streamRef.current = null;
                setIsProcessing(false);
            };

            setResult(null); // Rensa gammalt resultat vid ny start
            setIsRecording(true);
            mediaRecorder.start();

            // Automatisk stopp efter 3 sekunder
            setTimeout(() => {
                stopInference();
            }, 3000);

        } catch (err) {
            console.error("Microphone access denied", err);
            setIsRecording(false);
        }
    };

    const stopInference = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const sendToApi = async (blob: Blob) => {
        const formData = new FormData();
        formData.append('audioFile', blob, 'inference.wav');

        try {
            const response = await fetch('https://api.intelligentaudio.net/ia/api/response', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('API Error');
            const data: MidiInferenceResponse = await response.json();
            setResult(data);
        } catch (err) {
            console.error("Inference failed", err);
        }
    };

    return { isRecording, isProcessing, startInference, result };
};
