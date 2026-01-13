'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';

interface LayoutWrapperProps {
    children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
