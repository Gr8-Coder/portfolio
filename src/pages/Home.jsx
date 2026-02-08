import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Download } from 'lucide-react';

const Home = () => {
    return (
        <div className="container" style={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={styles.hero}
            >
                <div style={styles.badge}>
                    <span style={styles.pulse}></span>
                    Available for hire
                </div>

                <h1 style={styles.title} className="mono">
                    Hi, I'm <span className="text-gradient">Sajal Tyagi</span>
                </h1>

                <h2 style={styles.subtitle}>
                    Product Manager & <br />
                    <span style={{ color: 'var(--text-secondary)' }}>Innovation Specialist</span>
                </h2>

                <p style={styles.description}>
                    Building things that matter. Somewhere between a builder, a thinker, and a doer.
                </p>

                <div style={styles.techStack}>
                    {['Product Strategy', 'UX Design', 'React', 'Agile', 'Data Analysis', 'Innovation'].map((tech) => (
                        <span key={tech} style={styles.techBadge} className="mono">
                            {tech}
                        </span>
                    ))}
                </div>

                <div style={styles.actions}>
                    <Link to="/projects" style={styles.primaryBtn}>
                        View Work <ArrowRight size={18} />
                    </Link>
                    <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>
                        Download CV <Download size={18} />
                    </a>
                </div>
            </motion.div>

            {/* Decorative Code Block */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={styles.codeBlockWrapper}
            >
                <div style={styles.codeHeader}>
                    <div style={styles.dots}><span style={{ background: '#ff5f56' }}></span><span style={{ background: '#ffbd2e' }}></span><span style={{ background: '#27c93f' }}></span></div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Profile.json</span>
                </div>
                <pre style={styles.codeBlock} className="mono">
                    <code>
                        <span style={{ color: 'var(--accent-purple)' }}>const</span> <span style={{ color: 'var(--accent-yellow)' }}>profile</span> = {'{'}
                        {'\n'}  name: <span style={{ color: 'var(--accent-green)' }}>'Sajal Tyagi'</span>,
                        {'\n'}  role: <span style={{ color: 'var(--accent-green)' }}>'Product Manager'</span>,
                        {'\n'}  focus: [<span style={{ color: 'var(--accent-green)' }}>'Strategy'</span>, <span style={{ color: 'var(--accent-green)' }}>'Design'</span>, <span style={{ color: 'var(--accent-green)' }}>'Code'</span>],
                        {'\n'}  traits: {'{'}
                        {'\n'}    visionary: <span style={{ color: 'var(--accent-red)' }}>true</span>,
                        {'\n'}    execution: <span style={{ color: 'var(--accent-green)' }}>'Pixel Perfect'</span>
                        {'\n'}  {'}'},
                        {'\n'}  status: <span style={{ color: 'var(--accent-green)' }}>'Ready to jam'</span>
                        {'\n'}{'}'};
                    </code>
                </pre>
            </motion.div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '600px',
        gap: '2rem',
        flexWrap: 'wrap-reverse' // Ensure text is on top on mobile
    },
    hero: {
        flex: 1,
        minWidth: '300px',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
        lineHeight: 1.1,
    },
    subtitle: {
        fontSize: '2rem',
        fontWeight: '500',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        maxWidth: '500px',
        marginBottom: '2rem',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        color: 'var(--accent-green)',
        fontSize: '0.9rem',
        marginBottom: '1.5rem',
        border: '1px solid rgba(34, 197, 94, 0.2)',
    },
    pulse: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-green)',
        boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
        animation: 'pulse 2s infinite',
    },
    actions: {
        display: 'flex',
        gap: '1rem',
    },
    primaryBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        borderRadius: '4px',
        fontWeight: '600',
    },
    secondaryBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.8rem 1.5rem',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
        borderRadius: '4px',
        fontWeight: '500',
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        marginBottom: '2rem',
    },
    techBadge: {
        fontSize: '0.85rem',
        color: 'var(--text-tertiary)',
        backgroundColor: 'var(--bg-tertiary)',
        padding: '0.3rem 0.6rem',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
    },
    codeBlockWrapper: {
        flex: 1,
        minWidth: '300px',
        maxWidth: '500px',
        backgroundColor: 'var(--code-bg)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--card-shadow)',
        overflow: 'hidden',
    },
    codeHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.8rem 1rem',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--code-header)',
    },
    dots: {
        display: 'flex',
        gap: '6px',
        '& span': { // This pseudo usage won't work in inline React styles like this, but basic dots will render
            width: '10px',
            height: '10px',
            borderRadius: '50%',
        }
    },
    codeBlock: {
        padding: '1.5rem',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        overflowX: 'auto',
    }
};

export default Home;
