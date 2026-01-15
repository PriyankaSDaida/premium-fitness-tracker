'use client';

import { useState } from 'react';
import { Flame, Timer, Footprints, Heart, Droplets, Moon, Plus, Layout, Dumbbell } from 'lucide-react';
import ActivityRing from '@/components/Dashboard/ActivityRing';
import StatCard from '@/components/Dashboard/StatCard';
import HealthChart from '@/components/Dashboard/HealthChart';
import LogModal from '@/components/Modals/LogModal';
import styles from './page.module.css';

const initialActivityData = [
  { label: 'Mon', value: 65 },
  { label: 'Tue', value: 80 },
  { label: 'Wed', value: 45 },
  { label: 'Thu', value: 90 },
  { label: 'Fri', value: 75 },
  { label: 'Sat', value: 55 },
  { label: 'Sun', value: 85 },
];

export default function Dashboard() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState<'workout' | 'water' | 'sleep' | null>(null);

  // Mock State for interactivity demo
  const [waterIntake, setWaterIntake] = useState(1.2);
  const [sleepTime, setSleepTime] = useState('7h 20m');

  const handleLogSubmit = (data: Record<string, string>) => {
    if (modalOpen === 'water' && data.amount) {
      setWaterIntake(prev => parseFloat((prev + parseFloat(data.amount)).toFixed(1)));
    } else if (modalOpen === 'sleep' && data.hours) {
      setSleepTime(`${data.hours}h ${data.minutes || '0'}m`);
    }
    // Workout logging would typically update a list or backend
    console.log(`Logged ${modalOpen}:`, data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.welcomeText}>Welcome back, Priyanka</h1>
          <p className={styles.dateText}>Monday, January 13, 2026</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: 'var(--radius-md)',
              border: isEditMode ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
              background: isEditMode ? 'rgba(99, 102, 241, 0.1)' : 'var(--surface-card)',
              color: isEditMode ? 'var(--primary)' : 'var(--text-secondary)',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            <Layout size={18} />
            {isEditMode ? 'Done' : 'Edit Layout'}
          </button>
          <button
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: 'var(--radius-md)',
              background: 'var(--primary)', color: 'white', border: 'none',
              cursor: 'pointer', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}
            onClick={() => alert('Widget Library feature coming soon!')}
          >
            <Plus size={18} />
            Add Widget
          </button>
        </div>
      </header>

      {/* Quick Actions */}
      <section style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)' }}>
        <button
          onClick={() => setModalOpen('workout')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--surface-highlight)', border: 'none', borderRadius: 'full', color: 'var(--text-primary)', cursor: 'pointer', transition: 'transform 0.1s' }}
        >
          <Dumbbell size={16} /> Log Workout
        </button>
        <button
          onClick={() => setModalOpen('water')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--surface-highlight)', border: 'none', borderRadius: 'full', color: 'var(--text-primary)', cursor: 'pointer' }}
        >
          <Droplets size={16} /> Log Water
        </button>
        <button
          onClick={() => setModalOpen('sleep')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--surface-highlight)', border: 'none', borderRadius: 'full', color: 'var(--text-primary)', cursor: 'pointer' }}
        >
          <Moon size={16} /> Log Sleep
        </button>
      </section>

      {/* Activity Rings Section */}
      <section className={`${styles.ringsGrid} animate-slide-up`} style={{ border: isEditMode ? '2px dashed var(--text-secondary)' : 'none', padding: isEditMode ? '1rem' : '0', borderRadius: 'var(--radius-lg)' }}>
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
          value={`${waterIntake} L`}
          icon={Droplets}
          trend={{ value: 20, direction: 'down' }}
          color="var(--accent-cyan)"
        />
        <StatCard
          title="Sleep"
          value={sleepTime}
          icon={Moon}
          trend={{ value: 8, direction: 'up' }}
          color="var(--primary)"
        />
      </section>

      {/* Charts Section */}
      <section className={`${styles.chartsSection} animate-slide-up`} style={{ animationDelay: '0.2s' }}>
        <HealthChart
          title="Weekly Activity"
          data={initialActivityData}
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

      {/* Modals */}
      <LogModal
        isOpen={modalOpen === 'workout'}
        onClose={() => setModalOpen(null)}
        title="Log Workout"
        fields={[
          { label: 'Workout Type', type: 'text', placeholder: 'e.g. Running', key: 'type' },
          { label: 'Duration (min)', type: 'number', placeholder: '30', key: 'duration' },
          { label: 'Calories Burned', type: 'number', placeholder: '300', key: 'calories' },
        ]}
        onSubmit={handleLogSubmit}
      />
      <LogModal
        isOpen={modalOpen === 'water'}
        onClose={() => setModalOpen(null)}
        title="Log Water"
        fields={[
          { label: 'Amount (L)', type: 'number', placeholder: '0.5', key: 'amount' },
        ]}
        onSubmit={handleLogSubmit}
      />
      <LogModal
        isOpen={modalOpen === 'sleep'}
        onClose={() => setModalOpen(null)}
        title="Log Sleep"
        fields={[
          { label: 'Hours', type: 'number', placeholder: '7', key: 'hours' },
          { label: 'Minutes', type: 'number', placeholder: '30', key: 'minutes' },
        ]}
        onSubmit={handleLogSubmit}
      />
    </div>
  );
}
