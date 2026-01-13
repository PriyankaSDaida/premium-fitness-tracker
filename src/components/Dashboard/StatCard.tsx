'use client';

import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import styles from './StatCard.module.css';

interface StatCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: {
        value: number; // percentage
        direction: 'up' | 'down' | 'neutral';
    };
    color?: string; // Optional override for icon color
}

export default function StatCard({ title, value, icon: Icon, trend, color }: StatCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <div className={styles.iconContainer} style={{ color: color || 'var(--primary)' }}>
                    <Icon size={20} />
                </div>
            </div>
            <div className={styles.value}>{value}</div>
            {trend && (
                <div className={`${styles.trend} ${styles[trend.direction]}`}>
                    {trend.direction === 'up' && <TrendingUp size={14} />}
                    {trend.direction === 'down' && <TrendingDown size={14} />}
                    {trend.direction === 'neutral' && <Minus size={14} />}
                    <span>{Math.abs(trend.value)}% vs last week</span>
                </div>
            )}
        </div>
    );
}
