import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
    const { theme, setTheme, font, setFont, palette, setPalette } = useTheme();

    const themes = [
        { id: 'light', name: 'Light', preview: '#e5e5e5' },
        { id: 'dark', name: 'Dark', preview: '#1a1a1a' },
    ];

    const fonts = [
        { id: 'sans', name: 'Sans Serif', family: 'var(--font-inter)' },
        { id: 'serif', name: 'Serif', family: 'var(--font-playfair)' },
        { id: 'mono', name: 'Mono', family: 'var(--font-jetbrains)' },
        { id: 'round', name: 'Round', family: 'var(--font-nunito)' },
    ];

    const palettes = [
        { id: 'default', color: '#1a1a1a' },
        { id: 'blue', color: '#1e3a8a' }, // Blue 900
        { id: 'green', color: '#064e3b' }, // Emerald 900
        { id: 'purple', color: '#581c87' }, // Purple 900
        { id: 'brown', color: '#451a03' }, // Amber 950
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container"
            style={{ maxWidth: '700px', margin: '0 auto', paddingBottom: '4rem' }}
        >
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={styles.title}>Display settings</h1>
                <p style={styles.subtitle}>Shape your screen experience</p>
            </header>

            {/* Theme */}
            <section style={styles.section}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={styles.sectionTitle}>Interface theme</h2>
                    <p style={styles.sectionDesc}>Set the tone of the product</p>
                </div>
                <div style={styles.grid}>
                    {themes.map((t) => (
                        <div
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            style={styles.cardWrapper}
                        >
                            <div style={{
                                ...styles.previewCard,
                                background: t.preview,
                                borderColor: theme === t.id ? 'var(--text-primary)' : 'var(--border-color)'
                            }}>
                                {/* Abstract UI lines */}
                                <div style={{ position: 'absolute', top: '20%', left: '10%', right: '10%', height: '8px', background: 'rgba(128,128,128,0.3)', borderRadius: '4px' }}></div>
                                <div style={{ position: 'absolute', top: '35%', left: '10%', right: '40%', height: '8px', background: 'rgba(128,128,128,0.3)', borderRadius: '4px' }}></div>
                            </div>
                            <span style={styles.cardLabel}>{t.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Fonts */}
            <section style={styles.section}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={styles.sectionTitle}>Font selection</h2>
                    <p style={styles.sectionDesc}>Highlight the character of the interface</p>
                </div>
                <div style={styles.grid4}>
                    {fonts.map((f) => (
                        <div
                            key={f.id}
                            onClick={() => setFont(f.id)}
                            style={{
                                ...styles.fontCard,
                                fontFamily: f.family,
                                borderColor: font === f.id ? 'var(--text-primary)' : 'var(--border-color)'
                            }}
                        >
                            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Aa</span>
                            <span style={styles.cardLabel}>{f.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* System Palette */}
            <section style={styles.section}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={styles.sectionTitle}>System palette</h2>
                    <p style={styles.sectionDesc}>Define how text and surfaces feel</p>
                </div>
                <div style={styles.paletteGrid}>
                    {palettes.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => setPalette(p.id)}
                            style={{
                                ...styles.paletteCard,
                                backgroundColor: '#2a2a2a', // Container bg
                                cursor: 'pointer',
                                borderColor: palette === p.id ? 'var(--text-primary)' : 'var(--border-color)',
                                borderWidth: palette === p.id ? '2px' : '1px',
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: p.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Just a visual placeholder for selection if we were actually implementing it globaly */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

const styles = {
    title: {
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
    },
    subtitle: {
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
    },
    section: {
        marginBottom: '3rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '2rem',
    },
    sectionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: '1.1rem',
        fontWeight: '500',
        marginBottom: '0.4rem',
        color: 'var(--text-primary)',
    },
    sectionDesc: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
    },
    toggleContainer: {
        backgroundColor: '#333',
        borderRadius: '20px',
        padding: '4px',
        display: 'flex',
    },
    toggle: {
        padding: '0.4rem 1rem',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        color: '#888',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    toggleActive: {
        padding: '0.4rem 1rem',
        borderRadius: '16px',
        backgroundColor: '#555',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
    },
    grid4: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
    },
    paletteGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem',
    },
    cardWrapper: {
        cursor: 'pointer',
        textAlign: 'center',
    },
    previewCard: {
        height: '100px',
        borderRadius: '8px',
        border: '2px solid',
        marginBottom: '0.8rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
    },
    fontCard: {
        height: '120px',
        borderRadius: '8px',
        border: '2px solid',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: 'var(--bg-secondary)',
        transition: 'border-color 0.2s',
    },
    paletteCard: {
        height: '80px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
    },
    cardLabel: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    }
};

export default Settings;
