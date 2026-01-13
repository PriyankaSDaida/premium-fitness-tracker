'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, Activity, Settings, User } from 'lucide-react';
import styles from './Sidebar.module.css';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Workouts', href: '/workouts', icon: Dumbbell },
    { name: 'Health Stats', href: '/health', icon: Activity },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

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

            <div className={styles.userProfile}>
                <div className={styles.avatar}>JD</div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userRole}>Premium Member</span>
                </div>
            </div>
        </aside>
    );
}
