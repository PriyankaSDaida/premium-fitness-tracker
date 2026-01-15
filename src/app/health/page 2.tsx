'use client';

import styles from '../page.module.css';

export default function HealthPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeText}>Health Stats</h1>
                <p className={styles.dateText}>Detailed health analytics coming soon.</p>
            </header>

            <section className={`${styles.statsGrid} animate-slide-up`}>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Placeholder for Health Charts & Metrics
                </div>
            </section>
        </div>
    );
}
