'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, Activity, Settings, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './Sidebar.module.css';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Workouts', href: '/workouts', icon: Dumbbell },
    { name: 'Health Stats', href: '/health', icon: Activity },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Activity size={32} color="#6366f1" />
                <span className={styles.logoText}>FitTrack</span>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.userProfile} onClick={() => setShowUserMenu(!showUserMenu)} style={{ cursor: 'pointer', position: 'relative' }}>
                <div className={styles.avatar}>JD</div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userRole}>Premium Member</span>
                </div>

                {showUserMenu && (
                    <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '0',
                        width: '100%',
                        background: 'var(--surface-card)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: '8px',
                        marginBottom: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        zIndex: 10
                    }}>
                        <div style={{ padding: '8px', fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px' }} className="hover:bg-white/5">
                            <UserIcon size={16} /> Profile
                        </div>
                        <div style={{ padding: '8px', fontSize: '0.9rem', color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px' }} className="hover:bg-white/5">
                            <LogOut size={16} /> Sign Out
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
