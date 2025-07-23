"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "../app/page.module.css"

interface SkillBarProps {
    name: string
    level: number
    isVisible?: boolean // Now optional as we'll handle visibility internally
}

export function SkillBar({ name, level, isVisible = false }: SkillBarProps) {
    const [visible, setVisible] = useState(isVisible);
    const barRef = useRef<HTMLDivElement>(null);

    // Set a unique CSS variable for this specific skill bar instance
    const skillBarId = `skill-bar-${name.replace(/\s+/g, '-').toLowerCase()}`;

    useEffect(() => {
        // Use the provided visibility if available
        if (isVisible) {
            setVisible(true);
            return;
        }

        // Otherwise, use IntersectionObserver to determine visibility
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [isVisible]);

    useEffect(() => {
        if (visible) {
            // Get the skill bar element by its ID
            const skillBarElement = document.getElementById(skillBarId);
            if (skillBarElement) {
                // Directly set the width property instead of using a CSS variable
                skillBarElement.style.width = `${level}%`;
            }
        }
    }, [visible, level, skillBarId]);

    return (
        <div className="mb-4" ref={barRef}>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span className="text-gray-600 text-sm">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    id={skillBarId}
                    className={`${styles.skillBar} ${visible ? styles.skillBarVisible : ''}`}
                ></div>
            </div>
        </div>
    );
} 