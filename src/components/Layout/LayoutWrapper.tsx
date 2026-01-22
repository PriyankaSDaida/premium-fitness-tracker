'use client';

import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import { Menu } from 'lucide-react';

interface LayoutWrapperProps {
    children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className={styles.container}>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <button
                className={styles.hamburger}
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
