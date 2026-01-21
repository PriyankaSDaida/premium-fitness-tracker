'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'pastel';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('pastel');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Persist theme to local storage
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Update local storage
        localStorage.setItem('theme', theme);

        // Update body class
        document.body.classList.remove('theme-dark', 'theme-pastel');
        document.body.classList.add(`theme-${theme}`);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'pastel' ? 'dark' : 'pastel'));
    };

    // Prevent flash of incorrect theme
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
