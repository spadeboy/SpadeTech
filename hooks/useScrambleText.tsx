'use client';

import { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>?/\\|';

export function useScrambleText(text: string, duration: number = 800, delay: number = 0) {
    const [displayText, setDisplayText] = useState('');
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let startTime: number;
        let animationFrameId: number;
        let timeoutId: NodeJS.Timeout;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                // Still scrambling
                const scrambled = text
                    .split('')
                    .map((char) => {
                        if (char === ' ') return ' ';
                        // Reveal characters progressively based on time
                        const charProgress = progress / duration;
                        // Random chance to show real character or scramble
                        return Math.random() < charProgress ? char : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    })
                    .join('');
                setDisplayText(scrambled);
                animationFrameId = requestAnimationFrame(animate);
            } else {
                // Animation complete
                setDisplayText(text);
                setIsScrambling(false);
            }
        };

        // Start animation after delay
        timeoutId = setTimeout(() => {
            setIsScrambling(true);
            animationFrameId = requestAnimationFrame(animate);
        }, delay);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timeoutId);
        };
    }, [text, duration, delay]);

    return { displayText, isScrambling };
}

export function ScrambledText({ text, duration = 800, delay = 0, className = "" }: { text: string, duration?: number, delay?: number, className?: string }) {
    const { displayText } = useScrambleText(text, duration, delay);
    return <span className={className}>{displayText}</span>;
}
