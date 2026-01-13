'use client';

import styles from './HealthChart.module.css';

interface DataPoint {
    label: string;
    value: number; // 0-100 normalized for simplicity
}

interface HealthChartProps {
    title: string;
    data: DataPoint[];
    color?: string;
}

export default function HealthChart({ title, data, color }: HealthChartProps) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.chartArea}>
                {data.map((point, index) => (
                    <div key={index} className={styles.barGroup}>
                        <div
                            className={styles.bar}
                            style={{
                                height: `${point.value}%`,
                                backgroundColor: color || 'var(--primary)',
                                animationDelay: `${index * 0.1}s`
                            }}
                        />
                        <span className={styles.label}>{point.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
