'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, User, Bell, Shield, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
    const { theme, toggleTheme } = useTheme();

    const SettingsSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
        <section style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: 'var(--spacing-md)',
                color: 'var(--text-primary)'
            }}>
                {title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {children}
            </div>
        </section>
    );

    const SettingsItem = ({
        icon: Icon,
        label,
        value,
        onClick,
        toggle
    }: {
        icon: any;
        label: string;
        value?: string;
        onClick?: () => void;
        toggle?: React.ReactNode;
    }) => (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--spacing-lg)',
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--glass-border)',
                cursor: onClick ? 'pointer' : 'default',
                transition: 'background 0.2s'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <div style={{
                    padding: '8px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--surface-highlight)',
                    color: 'var(--primary)'
                }}>
                    <Icon size={20} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>{label}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                {value && <span style={{ color: 'var(--text-secondary)' }}>{value}</span>}
                {toggle}
                {onClick && !toggle && <ChevronRight size={20} color="var(--text-tertiary)" />}
            </div>
        </div>
    );

    return (
        <div className="animate-fade-in" style={{ padding: 'var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                    Settings
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Manage your preferences and account settings.
                </p>
            </header>

            <SettingsSection title="Appearance">
                <SettingsItem
                    icon={theme === 'dark' ? Moon : Sun}
                    label="App Theme"
                    toggle={
                        <button
                            onClick={toggleTheme}
                            style={{
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-full)',
                                border: 'none',
                                background: theme === 'pastel' ? 'var(--primary)' : 'var(--surface-highlight)',
                                color: theme === 'pastel' ? 'white' : 'var(--text-primary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {theme === 'dark' ? 'Dark Mode' : 'Pastel Mode'}
                        </button>
                    }
                />
            </SettingsSection>

            <SettingsSection title="Account">
                <SettingsItem icon={User} label="Profile Information" value="Priyanka S" onClick={() => { }} />
                <SettingsItem icon={Bell} label="Notifications" value="Enabled" onClick={() => { }} />
                <SettingsItem icon={Shield} label="Privacy & Security" onClick={() => { }} />
            </SettingsSection>
        </div>
    );
}
