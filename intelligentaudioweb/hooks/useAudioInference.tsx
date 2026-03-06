"use client";
import { useState, useRef } from 'react';

// Definiera ett interface API-svar

interface MidiNote {
    note: string | number; // Matchar "C4" eller 60
    velocity: number;
}

interface MidiInferenceResponse {
    chordName: string; // Ändra från 'chord' om backenden skickar 'chordName'
    notes: MidiNote[]; // Ändra från number[] till MidiNote[]
    timestamp: string;
}

export const useAudioInference = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [result, setResult] = useState<MidiInferenceResponse | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const startInference = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            const chunks: Blob[] = [];

            mediaRecorder.ondataavailable = (e: BlobEvent) => {
                if (e.data.size > 0) chunks.push(e.data);
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(chunks, { type: 'audio/wav' });
                await sendToApi(audioBlob);

                // Stäng av mikrofonen ordentligt
                stream.getTracks().forEach(track => track.stop());
            };

            setIsRecording(true);
            mediaRecorder.start();

            // Ditt 3-sekunders fönster för ackordet
            setTimeout(() => {
                stopInference();
            }, 3000);

        } catch (err) {
            console.error("Microphone access denied", err);
        }
    };

    const stopInference = () => {
        if (mediaRecorderRef.current && isRecording) {
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

            console.log("API Response:", JSON.stringify(data))

            setResult(data);
        } catch (err) {
            console.error("Inference failed", err);
        }
    };

    return { isRecording, startInference, result };
};
