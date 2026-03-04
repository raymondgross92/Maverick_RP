'use client';

import { useEffect, useState } from 'react';

// Basic component to handle ambient sound and UI clicks globally
export function GlobalAudio() {
    const [interacted, setInteracted] = useState(false);

    useEffect(() => {
        // Ambient Hum Audio Context (requires user interaction first)
        let audioCtx: AudioContext | null = null;
        let oscillator: OscillatorNode | null = null;
        let gainNode: GainNode | null = null;

        const initAudio = () => {
            if (interacted) return;
            setInteracted(true);

            audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Create a very low, dark ambient hum
            oscillator = audioCtx.createOscillator();
            gainNode = audioCtx.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(55, audioCtx.currentTime); // Low bass frequency (A1)

            // Add a slight wobble to the frequency
            oscillator.frequency.setTargetAtTime(50, audioCtx.currentTime + 2, 0.5);

            gainNode.gain.setValueAtTime(0, audioCtx.currentTime); // Start quiet
            gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 5); // Fade in to 5% volume - very subtle

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.start();

            // Add click sound to all buttons/links
            const clickSynth = () => {
                if (!audioCtx) return;
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.type = 'sine';
                o.frequency.setValueAtTime(800, audioCtx.currentTime);
                o.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
                g.gain.setValueAtTime(0.1, audioCtx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
                o.connect(g);
                g.connect(audioCtx.destination);
                o.start();
                o.stop(audioCtx.currentTime + 0.1);
            };

            document.body.addEventListener('click', clickSynth);
        };

        // Browsers block autoplaying audio until user interaction
        window.addEventListener('click', initAudio, { once: true });
        window.addEventListener('scroll', initAudio, { once: true });
        window.addEventListener('keydown', initAudio, { once: true });

        return () => {
            window.removeEventListener('click', initAudio);
            window.removeEventListener('scroll', initAudio);
            window.removeEventListener('keydown', initAudio);
            if (oscillator) {
                try {
                    gainNode?.gain.linearRampToValueAtTime(0, audioCtx!.currentTime + 1);
                    setTimeout(() => {
                        oscillator?.stop();
                        oscillator?.disconnect();
                        audioCtx?.close();
                    }, 1000);
                } catch (e) { }
            }
        };
    }, [interacted]);

    return null;
}
