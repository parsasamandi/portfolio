/**
 * ThemeContext.jsx
 * Global theme state management.
 *
 * Supports three modes:
 *   'light'  — forces light theme regardless of OS setting
 *   'dark'   — forces dark theme regardless of OS setting
 *   'system' — follows the OS prefers-color-scheme media query
 *
 * The active mode is persisted in localStorage under the key 'theme'.
 * Theme is applied by setting data-theme attribute on <html>,
 * which CSS uses to switch variable sets (see index.css).
 *
 * Exports:
 *   ThemeProvider — wrap the app root with this
 *   useTheme()    — returns { mode, theme, cycle }
 *     mode   — the user's chosen mode: 'light' | 'dark' | 'system'
 *     theme  — the resolved actual theme: 'light' | 'dark'
 *     cycle  — function to advance: light → dark → system → light
 */
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

/** Reads the current OS colour scheme preference */
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
    // Initialise from localStorage, default to 'light' if not previously set
    const [mode, setMode] = useState(() => {
        return localStorage.getItem('theme') ?? 'light';
    });

    // resolved is the actual applied theme — 'system' defers to OS
    const resolved = mode === 'system' ? getSystemTheme() : mode;

    // Apply data-theme to <html> and persist the chosen mode whenever it changes
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

    // Advances the mode through the cycle: light → dark → system → light
    const cycle = () =>
        setMode((m) => (m === 'light' ? 'dark' : m === 'dark' ? 'system' : 'light'));

    return (
        <ThemeContext.Provider value={{ mode, theme: resolved, cycle }}>
            {children}
        </ThemeContext.Provider>
    );
}

/** Custom hook — call inside any component to access theme state */
export function useTheme() {
    return useContext(ThemeContext);
}
