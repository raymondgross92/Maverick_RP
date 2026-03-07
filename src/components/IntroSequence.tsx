'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroSequence() {
    const [showIntro, setShowIntro] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    // Determine if we need user interaction to start (blocks the video initially)
    const [needsInteraction, setNeedsInteraction] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsMounted(true);
        const hasPlayed = sessionStorage.getItem('maverick_intro_played');
        if (hasPlayed) {
            setShowIntro(false);
        }
        // If not played, we intentionally leave needsInteraction as true 
        // to force the user to click the "Click to Enter" button first.
    }, []);

    const finishIntro = () => {
        setShowIntro(false);
        sessionStorage.setItem('maverick_intro_played', 'true');
    };

    const handleInteraction = () => {
        if (needsInteraction) {
            // First click: Start the video with sound
            if (videoRef.current) {
                videoRef.current.volume = 0.5;
                videoRef.current.play();
                setNeedsInteraction(false);
            }
        } else {
            // Second click: Skip the intro
            finishIntro();
        }
    };

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[999] bg-black cursor-pointer flex items-center justify-center"
                    onClick={handleInteraction}
                >
                    <video
                        ref={videoRef}
                        playsInline
                        onEnded={finishIntro}
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${needsInteraction ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}
                    >
                        <source src="/Maverick_State_1.mp4" type="video/mp4" />
                    </video>

                    {needsInteraction ? (
                        <div className="absolute z-10 flex flex-col items-center animate-pulse">
                            <span className="text-white text-2xl font-black tracking-widest uppercase bg-black/50 px-8 py-4 rounded-xl border border-white/10 backdrop-blur-md">
                                Click to Enter City
                            </span>
                        </div>
                    ) : (
                        <div className="absolute bottom-8 right-8 text-white/30 text-xs px-4 py-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            Click to skip
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
