import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    });

    const [font, setFont] = useState(() => {
        const savedFont = localStorage.getItem('font');
        return savedFont || 'sans';
    });

    const [palette, setPalette] = useState(() => {
        const savedPalette = localStorage.getItem('palette');
        return savedPalette || 'default';
    });

    useEffect(() => {
        const root = document.documentElement;
        // Theme Logic
        if (theme === 'dark') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);

        // Font Logic
        root.setAttribute('data-font', font);
        localStorage.setItem('font', font);

        // Palette Logic
        root.setAttribute('data-palette', palette);
        localStorage.setItem('palette', palette);
    }, [theme, font, palette]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, font, setFont, palette, setPalette }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
