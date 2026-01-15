'use client';

import styles from '../page.module.css';

export default function SettingsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.welcomeText}>Settings</h1>
                <p className={styles.dateText}>Manage your preferences.</p>
            </header>

            <section className={`${styles.statsGrid} animate-slide-up`}>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Settings content will go here.
                </div>
            </section>
        </div>
    );
}
