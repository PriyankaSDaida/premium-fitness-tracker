'use client';

import { Calendar, Clock, Flame } from 'lucide-react';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
    title: string;
    date: string;
    duration: string;
    calories: number;
    type: string;
}

export default function WorkoutCard({ title, date, duration, calories, type }: WorkoutCardProps) {
    // Determine icon based on type (simplified)

    return (
        <div className={styles.card}>
            <div className={styles.mainInfo}>
                <div className={styles.iconContainer}>
                    <Flame size={24} />
                </div>
                <div className={styles.textInfo}>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.meta}>
                        <Calendar size={12} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statValue}>{duration}</span>
                    <span className={styles.statLabel}>Duration</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statValue}>{calories}</span>
                    <span className={styles.statLabel}>Calories</span>
                </div>
            </div>
        </div>
    );
}
