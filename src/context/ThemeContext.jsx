import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
    // Default: 'light'. Cycles: light → dark → system → light
    const [mode, setMode] = useState(() => {
        return localStorage.getItem('theme') ?? 'light';
    });

    const resolved = mode === 'system' ? getSystemTheme() : mode;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', resolved);
        localStorage.setItem('theme', mode);
    }, [mode, resolved]);

    // Re-apply if OS preference changes while mode === 'system'
    useEffect(() => {
        if (mode !== 'system') return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            document.documentElement.setAttribute(
                'data-theme',
                mq.matches ? 'dark' : 'light'
            );
        };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, [mode]);

    // light → dark → system → light
    const cycle = () =>
        setMode((m) => (m === 'light' ? 'dark' : m === 'dark' ? 'system' : 'light'));

    return (
        <ThemeContext.Provider value={{ mode, theme: resolved, cycle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
