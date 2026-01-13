'use client';

import { Plus, History, Dumbbell } from 'lucide-react';
import WorkoutCard from '@/components/Workout/WorkoutCard';
import ExerciseCard from '@/components/Workout/ExerciseCard';
import styles from './page.module.css';

export default function WorkoutsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Workouts</h1>
                    <p className={styles.subtitle}>Track your progress and explore new exercises.</p>
                </div>
                <button className={styles.logButton}>
                    <Plus size={20} />
                    Log Workout
                </button>
            </div>

            <section className={`${styles.section} animate-slide-up`}>
                <h2 className={styles.sectionTitle}>
                    <History size={20} />
                    Recent Activity
                </h2>
                <div>
                    <WorkoutCard
                        title="Full Body HIIT"
                        date="Today, 8:00 AM"
                        duration="45 min"
                        calories={320}
                        type="HIIT"
                    />
                    <WorkoutCard
                        title="Upper Body Strength"
                        date="Yesterday, 6:30 PM"
                        duration="60 min"
                        calories={210}
                        type="Strength"
                    />
                    <WorkoutCard
                        title="5k Run"
                        date="Jan 10, 7:00 AM"
                        duration="28 min"
                        calories={285}
                        type="Cardio"
                    />
                </div>
            </section>

            <section className={`${styles.section} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
                <h2 className={styles.sectionTitle}>
                    <Dumbbell size={20} />
                    Exercise Library
                </h2>
                <div className={styles.grid}>
                    <ExerciseCard name="Bench Press" muscleGroup="Chest" />
                    <ExerciseCard name="Squats" muscleGroup="Legs" />
                    <ExerciseCard name="Deadlift" muscleGroup="Back" />
                    <ExerciseCard name="Pull Ups" muscleGroup="Back" />
                    <ExerciseCard name="Shoulder Press" muscleGroup="Shoulders" />
                    <ExerciseCard name="Lunges" muscleGroup="Legs" />
                </div>
            </section>
        </div>
    );
}
