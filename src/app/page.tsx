'use client';

import { Flame, Timer, Footprints, Heart, Droplets, Moon } from 'lucide-react';
import ActivityRing from '@/components/Dashboard/ActivityRing';
import StatCard from '@/components/Dashboard/StatCard';
import HealthChart from '@/components/Dashboard/HealthChart';
import styles from './page.module.css';

const activityData = [
  { label: 'Mon', value: 65 },
  { label: 'Tue', value: 80 },
  { label: 'Wed', value: 45 },
  { label: 'Thu', value: 90 },
  { label: 'Fri', value: 75 },
  { label: 'Sat', value: 55 },
  { label: 'Sun', value: 85 },
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.welcomeText}>Welcome back, Priyanka</h1>
        <p className={styles.dateText}>Monday, January 13, 2026</p>
      </header>

      {/* Activity Rings Section */}
      <section className={`${styles.ringsGrid} animate-slide-up`}>
        <div className={styles.ringCard}>
          <div className={styles.ringInfo}>
            <span className={styles.ringLabel}>Move</span>
            <span className={styles.ringValue}>450 / 600</span>
            <span style={{ color: 'var(--accent-pink)', fontSize: '0.8rem' }}>KCALS</span>
          </div>
          <ActivityRing
            progress={75}
            color="var(--accent-pink)"
            value="75%"
            label=""
            icon={Flame}
            size={100}
          />
        </div>

        <div className={styles.ringCard}>
          <div className={styles.ringInfo}>
            <span className={styles.ringLabel}>Exercise</span>
            <span className={styles.ringValue}>25 / 30</span>
            <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem' }}>MINS</span>
          </div>
          <ActivityRing
            progress={83}
            color="var(--accent-green)"
            value="83%"
            label=""
            icon={Timer}
            size={100}
          />
        </div>

        <div className={styles.ringCard}>
          <div className={styles.ringInfo}>
            <span className={styles.ringLabel}>Stand</span>
            <span className={styles.ringValue}>8 / 12</span>
            <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>HRS</span>
          </div>
          <ActivityRing
            progress={66}
            color="var(--accent-cyan)"
            value="66%"
            label=""
            icon={Footprints}
            size={100}
          />
        </div>
      </section>

      {/* Stats Grid */}
      <section className={`${styles.statsGrid} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
        <StatCard
          title="Total Steps"
          value="8,432"
          icon={Footprints}
          trend={{ value: 12, direction: 'up' }}
          color="var(--accent-blue)"
        />
        <StatCard
          title="Heart Rate"
          value="72 BPM"
          icon={Heart}
          trend={{ value: 5, direction: 'neutral' }}
          color="var(--error)"
        />
        <StatCard
          title="Water Intake"
          value="1.2 L"
          icon={Droplets}
          trend={{ value: 20, direction: 'down' }}
          color="var(--accent-cyan)"
        />
        <StatCard
          title="Sleep"
          value="7h 20m"
          icon={Moon}
          trend={{ value: 8, direction: 'up' }}
          color="var(--primary)"
        />
      </section>

      {/* Charts Section */}
      <section className={`${styles.chartsSection} animate-slide-up`} style={{ animationDelay: '0.2s' }}>
        <HealthChart
          title="Weekly Activity"
          data={activityData}
          color="var(--primary)"
        />
        {/* Placeholder for another smaller chart or list */}
        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-lg)',
          border: '1px solid var(--glass-border)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>Recent Workouts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {['Morning Yoga', 'HIIT Cardio', 'Evening Run'].map((workout, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--spacing-sm)',
                background: 'var(--surface-highlight)',
                borderRadius: 'var(--radius-md)'
              }}>
                <span style={{ fontSize: '0.9rem' }}>{workout}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Today</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
