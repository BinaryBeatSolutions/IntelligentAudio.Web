
interface MidiNote {
    note: string | number;
    velocity: number;
}

export default interface MidiDisplayProps {
    chordName: string;
    midiNotes: MidiNote[];
}