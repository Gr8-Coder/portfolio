import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const Footer = () => {
    const [time, setTime] = useState('');
    const [copied, setCopied] = useState(false);
    const email = "contact@sajaltyagi.com"; // Replace with actual email

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format time as HH:MM
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            // Get timezone offset
            const offset = -now.getTimezoneOffset() / 60;
            const sign = offset >= 0 ? '+' : '-';
            const absOffset = Math.abs(offset);
            const offsetString = `GMT${sign}${Math.floor(absOffset)}`; // Simplified GMT

            setTime(`${offsetString} • ${timeString}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                {/* Contact Header */}
                <div style={styles.section}>
                    <h3 style={styles.label}>Contact</h3>
                    <h2 style={styles.heading}>Let's work together</h2>
                    <p style={styles.description}>
                        Got an idea, project, or just want to connect? Send me an
                        email or book a quick call. I'd love to hear from you.
                    </p>
                    <div style={styles.buttonGroup}>
                        <a href="mailto:contact@sajaltyagi.com" style={styles.primaryBtn}>
                            Send email
                        </a>
                    </div>
                </div>

                {/* Narrative Social Links */}
                <div style={styles.section}>
                    <p style={styles.narrative}>
                        Follow my design ramblings on <a href="https://twitter.com/sajaltyagi" target="_blank" rel="noreferrer" style={styles.link}>X</a>,
                        connect on <a href="https://linkedin.com/in/sajal-tyagi" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a> for the serious stuff,
                        or just drop me an email at <span style={styles.emailSpan} onClick={handleCopyEmail}>
                            {email} {copied ? <Check size={14} /> : <Copy size={14} />}
                        </span>.
                    </p>
                </div>

                {/* Footer Bottom */}
                <div style={styles.bottomBar}>
                    <span style={styles.copyright}>© 2026 Sajal Tyagi</span>
                    <span style={styles.time}>{time}</span>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '4rem 0 2rem',
        marginTop: '6rem',
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    label: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        maxWidth: '600px',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
        flexWrap: 'wrap',
    },
    primaryBtn: {
        padding: '0.8rem 2rem',
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        borderRadius: '50px',
        fontWeight: '500',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.2s',
    },
    narrative: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
    },
    link: {
        color: 'var(--text-primary)',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationColor: 'var(--text-tertiary)',
        transition: 'text-decoration-color 0.2s',
        cursor: 'pointer',
    },
    emailSpan: {
        color: 'var(--text-primary)',
        cursor: 'pointer',
        borderBottom: '1px dashed var(--text-tertiary)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
    },
    bottomBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        color: 'var(--text-tertiary)',
        fontSize: '0.9rem',
    }
};

export default Footer;
