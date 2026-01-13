'use client';

import styles from './ExerciseCard.module.css';

interface ExerciseCardProps {
    name: string;
    muscleGroup: string;
}

export default function ExerciseCard({ name, muscleGroup }: ExerciseCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                {name[0]}
            </div>
            <span className={styles.title}>{name}</span>
            <span className={styles.muscle}>{muscleGroup}</span>
        </div>
    );
}
