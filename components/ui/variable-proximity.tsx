'use client';

import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// VariableProximity component from React Bits
interface VariableProximityProps {
    label: string;
    className?: string;
    fromFontVariationSettings: string;
    toFontVariationSettings: string;
    containerRef: React.RefObject<HTMLElement | null>;
    radius: number;
    falloff: 'linear' | 'exponential' | 'gaussian';
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
    (props, ref) => {
        const {
            label,
            fromFontVariationSettings,
            toFontVariationSettings,
            containerRef,
            radius = 120,
            falloff = 'linear',
            className = '',
        } = props;

        const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
        const [interpolatedSettings, setInterpolatedSettings] = useState<string[]>(
            []
        );

        useEffect(() => {
            const container = containerRef.current;
            if (!container) return;

            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const containerRect = container.getBoundingClientRect();

                const x = clientX - containerRect.left;
                const y = clientY - containerRect.top;

                const newSettings = letterRefs.current.map((letterRef) => {
                    if (!letterRef) return fromFontVariationSettings;

                    const rect = letterRef.getBoundingClientRect();
                    const letterCenterX = rect.left - containerRect.left + rect.width / 2;
                    const letterCenterY = rect.top - containerRect.top + rect.height / 2;

                    const distance = Math.sqrt(
                        Math.pow(x - letterCenterX, 2) + Math.pow(y - letterCenterY, 2)
                    );

                    if (distance >= radius) return fromFontVariationSettings;

                    let proximity = 0;
                    if (falloff === 'linear') {
                        proximity = 1 - distance / radius;
                    } else if (falloff === 'exponential') {
                        proximity = Math.pow(1 - distance / radius, 2);
                    } else if (falloff === 'gaussian') {
                        proximity = Math.exp(-Math.pow(distance / radius, 2) / 2);
                    }

                    // Parse strings
                    const parseSettings = (settingsStr: string) => {
                        return settingsStr.split(',').reduce((acc, curr) => {
                            const [axis, value] = curr.split(' ').map((s) => s.trim());
                            const numValue = parseFloat(value.replace(/['"]/g, ''));
                            if (!isNaN(numValue)) acc[axis.replace(/['"]/g, '')] = numValue;
                            return acc;
                        }, {} as Record<string, number>);
                    };

                    const fromSettings = parseSettings(fromFontVariationSettings);
                    const toSettings = parseSettings(toFontVariationSettings);
                    const currentSettings = { ...fromSettings };

                    for (const key in currentSettings) {
                        if (toSettings[key] !== undefined) {
                            const diff = toSettings[key] - currentSettings[key];
                            currentSettings[key] += diff * proximity;
                        }
                    }

                    return Object.entries(currentSettings)
                        .map(([k, v]) => `"${k}" ${v}`)
                        .join(', ');
                });

                setInterpolatedSettings(newSettings);
            };

            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }, [
            containerRef,
            radius,
            falloff,
            fromFontVariationSettings,
            toFontVariationSettings,
        ]);

        const words = label.split(' ');

        let letterIndex = 0;

        return (
            <span ref={ref} className={`${className} inline-flex flex-wrap`}>
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-flex whitespace-nowrap">
                        {word.split('').map((letter) => {
                            const currentLetterIndex = letterIndex++;
                            return (
                                <motion.span
                                    key={currentLetterIndex}
                                    ref={(el) => {
                                        letterRefs.current[currentLetterIndex] = el;
                                    }}
                                    style={{
                                        fontVariationSettings:
                                            interpolatedSettings[currentLetterIndex] ||
                                            fromFontVariationSettings,
                                        transition: 'font-variation-settings 0.1s ease-out',
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                        {wordIndex < words.length - 1 && (
                            <span className="inline-block">&nbsp;</span>
                        )}
                    </span>
                ))}
            </span>
        );
    }
);

VariableProximity.displayName = 'VariableProximity';

export { VariableProximity };
