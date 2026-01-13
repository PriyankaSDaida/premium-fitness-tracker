'use client';

import { LucideIcon } from 'lucide-react';
import styles from './ActivityRing.module.css';

interface ActivityRingProps {
    progress: number; // 0 to 100
    size?: number;
    color: string;
    icon?: LucideIcon;
    value: string;
    label: string;
}

export default function ActivityRing({
    progress,
    size = 120,
    color,
    icon: Icon,
    value,
    label,
}: ActivityRingProps) {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={styles.container} style={{ width: size, height: size }}>
            <svg
                className={styles.ringSvg}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    className={styles.circleBg}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    style={{ strokeWidth }}
                />
                <circle
                    className={styles.circleProgress}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    style={{
                        stroke: color,
                        strokeWidth,
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                    }}
                />
            </svg>
            <div className={styles.content}>
                {Icon && <Icon size={20} className={styles.icon} style={{ color }} />}
                <span className={styles.value}>{value}</span>
                <span className={styles.label}>{label}</span>
            </div>
        </div>
    );
}
