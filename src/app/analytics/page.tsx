'use client';

import React from 'react';
import { BarChart, Activity, TrendingUp } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="animate-fade-in" style={{ padding: 'var(--spacing-lg)', maxWidth: '1000px', margin: '0 auto' }}>
            <header style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                    Analytics
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Deep dive into your fitness progress.
                </p>
            </header>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-2xl)',
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--glass-border)',
                minHeight: '400px',
                textAlign: 'center'
            }}>
                <div style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--surface-highlight)',
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--primary)'
                }}>
                    <BarChart size={48} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                    Advanced Analytics Coming Soon
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                    We are building comprehensive charts to track your sleep trends, heart rate variability, and long-term activity goals.
                </p>
            </div>
        </div>
    );
}
