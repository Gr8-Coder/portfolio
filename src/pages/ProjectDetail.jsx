import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Cpu, Database, Layout as LayoutIcon, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import AstraDemo from '../components/AstraDemo';
const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={styles.notFound}>
                <h2>Project not found</h2>
                <Link to="/projects" style={styles.backLink}>Go back to projects</Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container" 
            style={styles.wrapper}
        >
            <Link to="/projects" style={styles.backButton}>
                <ArrowLeft size={20} />
                <span>Back to Work</span>
            </Link>

            <div style={styles.header}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="mono" style={styles.title}>
                        <span className="text-gradient">{project.title}</span>
                    </h1>
                    <p style={styles.subtitle}>{project.description}</p>
                </motion.div>

                <motion.div 
                    style={styles.actionButtons}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.btnSecondary}>
                        <Github size={20} />
                        GitHub
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.btnPrimary}>
                        <ExternalLink size={20} />
                        Live Demo
                    </a>
                </motion.div>
            </div>

            <div style={styles.contentGrid}>
                <div style={styles.mainContent}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>Overview</h2>
                        <p style={styles.longDesc}>{project.longDescription}</p>
                    </section>

                    {project.id === 'astra' && (
                        <section style={styles.section}>
                            <h2 style={styles.sectionTitle}>Interactive Preview</h2>
                            <p style={{ ...styles.longDesc, marginBottom: '1.5rem' }}>
                                A live, interactive demonstration of Astra's core interface. You can tap through the tabs to explore how the AI agents monitor transaction data and manage budgets locally.
                            </p>
                            <AstraDemo />
                        </section>
                    )}

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>Key Features</h2>
                        <ul style={styles.featuresList}>
                            {project.features.map((feature, i) => (
                                <motion.li 
                                    key={i} 
                                    style={styles.featureItem}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.5 }}
                                >
                                    <div style={styles.bullet} />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </section>
                </div>

                <aside style={styles.sidebar}>
                    <div style={styles.sidebarCard}>
                        <h3 style={styles.sidebarTitle}>Tech Stack</h3>
                        <div style={styles.stackGroups}>
                            {project.techStack.frontend && (
                                <div style={styles.stackGroup}>
                                    <div style={styles.groupHeader}>
                                        <LayoutIcon size={18} />
                                        <span>Frontend</span>
                                    </div>
                                    <div style={styles.tagCloud}>
                                        {project.techStack.frontend.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                            )}
                            {project.techStack.backend && (
                                <div style={styles.stackGroup}>
                                    <div style={styles.groupHeader}>
                                        <Cpu size={18} />
                                        <span>Backend</span>
                                    </div>
                                    <div style={styles.tagCloud}>
                                        {project.techStack.backend.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                            )}
                            {project.techStack.database && (
                                <div style={styles.stackGroup}>
                                    <div style={styles.groupHeader}>
                                        <Database size={18} />
                                        <span>Database</span>
                                    </div>
                                    <div style={styles.tagCloud}>
                                        {project.techStack.database.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                            )}
                            {project.techStack.ai && (
                                <div style={styles.stackGroup}>
                                    <div style={styles.groupHeader}>
                                        <Zap size={18} />
                                        <span>AI / ML</span>
                                    </div>
                                    <div style={styles.tagCloud}>
                                        {project.techStack.ai.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </aside>
            </div>

            {project.screenshots && (
                <section style={{ ...styles.section, marginTop: '4rem' }}>
                    <h2 style={styles.sectionTitle}>Visual Showcase</h2>
                    <div style={styles.screenshotGrid}>
                        {project.screenshots.map((screen, i) => (
                            <motion.div 
                                key={screen.url} 
                                style={styles.screenshotCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img src={screen.url} alt={screen.caption} style={styles.screenshot} />
                                <div style={styles.screenshotInfo}>
                                    <h4 style={styles.screenshotCaption}>{screen.caption}</h4>
                                    <p style={styles.screenshotDesc}>{screen.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}
        </motion.div>
    );
};

const styles = {
    wrapper: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem',
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        marginBottom: '3rem',
        transition: 'color 0.2s',
        width: 'fit-content',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '4rem',
    },
    title: {
        fontSize: '4rem',
        fontWeight: '800',
        marginBottom: '1rem',
        lineHeight: 1,
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        lineHeight: 1.6,
    },
    actionButtons: {
        display: 'flex',
        gap: '1rem',
    },
    btnPrimary: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'var(--accent-blue)',
        color: 'white',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'transform 0.2s, background-color 0.2s',
    },
    btnSecondary: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'transform 0.2s, border-color 0.2s',
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '4rem',
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    sectionTitle: {
        fontSize: '1.8rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
    },
    longDesc: {
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: 'var(--text-secondary)',
    },
    featuresList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
    },
    bullet: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-blue)',
        marginTop: '0.6rem',
        flexShrink: 0,
    },
    sidebar: {
        position: 'sticky',
        top: '100px',
        height: 'fit-content',
    },
    sidebarCard: {
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid var(--border-color)',
    },
    sidebarTitle: {
        fontSize: '1.4rem',
        fontWeight: '700',
        marginBottom: '2rem',
        color: 'var(--text-primary)',
    },
    stackGroups: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    stackGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    groupHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    tagCloud: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.6rem',
    },
    tag: {
        fontSize: '0.85rem',
        padding: '0.4rem 0.8rem',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        color: 'var(--text-secondary)',
    },
    notFound: {
        padding: '5rem 2rem',
        textAlign: 'center',
    },
    backLink: {
        color: 'var(--accent-blue)',
        textDecoration: 'none',
        display: 'block',
        marginTop: '1rem',
    },
    screenshotGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '1rem',
    },
    screenshotCard: {
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
    },
    screenshot: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderBottom: '1px solid var(--border-color)',
    },
    screenshotInfo: {
        padding: '1.5rem',
    },
    screenshotCaption: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
    },
    screenshotDesc: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
    }
};

export default ProjectDetail;
