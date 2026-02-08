import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mono"
                style={styles.title}
            >
                About <span className="text-gradient">Me</span>
            </motion.h1>

            <div style={styles.contentWrapper}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={styles.imageContainer}
                >
                    <div style={styles.imageFrame}>
                        <img
                            src={`${import.meta.env.BASE_URL}profile.png`}
                            alt="Sajal Tyagi"
                            style={styles.profileImage}
                        />
                        <div style={styles.imageGlow}></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="about-content"
                    style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', flex: 1 }}
                >
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1.4rem' }}>
                        Building things that matter—that’s the core.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Started with code, now I’m designing flows, breaking business models down, and putting ideas back together.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Not big on titles. Somewhere between a builder, a thinker, and a doer with a soft spot for bold ideas.
                    </p>

                    <p style={{ marginBottom: '2rem' }}>
                        I experiment fast. Fail faster and pick up the pieces to build better.
                    </p>

                    <p style={{ marginBottom: '2rem', color: 'var(--accent-green)', fontWeight: '500' }}>
                        If you’re cooking up something wild, let’s jam.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '3rem 0 1.5rem' }}>
                        // Toolbox
                    </h3>

                    <ul style={styles.gridList}>
                        {['Product Strategy', 'UX/UI Design', 'System Architecture', 'React Ecosystem', 'Growth Hacking', 'Agile Leadership'].map(item => (
                            <li key={item} style={styles.listItem}><span style={{ color: 'var(--accent-yellow)' }}>▹</span> {item}</li>
                        ))}
                    </ul>

                </motion.div>
            </div>
        </div>
    );
};

const styles = {
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '3rem',
        lineHeight: 1.1,
        color: 'var(--text-primary)',
    },
    contentWrapper: {
        display: 'flex',
        gap: '4rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse', // Image below text on mobile if needed, or side-by-side on desktop
    },
    imageContainer: {
        flexShrink: 0,
        width: '100%',
        maxWidth: '350px',
        position: 'relative',
    },
    imageFrame: {
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        border: '1px solid var(--border-color)',
        transform: 'rotate(-3deg)', // Slight aesthetic tilt
        transition: 'transform 0.3s ease',
        ':hover': { // Note: Inline styles don't support pseudo, but framing it here for intent. Hover effect would need CSS/Framer
            transform: 'rotate(0deg)',
        }
    },
    profileImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
        filter: 'grayscale(20%) contrast(1.1)', // Stylish filter
    },
    imageGlow: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))',
        pointerEvents: 'none',
    },
    gridList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        padding: 0,
        listStyle: 'none',
    },
    listItem: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-secondary)'
    }
};

export default About;
