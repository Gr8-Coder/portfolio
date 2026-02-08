import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project Alpha',
            description: 'A robust e-commerce platform built with Next.js and Stripe.',
            tags: ['Next.js', 'Stripe', 'Tailwind'],
            link: '#',
            github: '#'
        },
        {
            id: 2,
            title: 'Task Master',
            description: 'Productivity application with real-time collaboration features.',
            tags: ['React', 'Firebase', 'Redux'],
            link: '#',
            github: '#'
        },
        {
            id: 3,
            title: 'Portfolio v1',
            description: 'My previous portfolio site built with Gatsby.',
            tags: ['Gatsby', 'GraphQL', 'Styled Components'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mono"
                style={styles.title}
            >
                Selected <span className="text-gradient">Work</span>
            </motion.h1>

            <div style={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={styles.card}
                        whileHover={{ y: -5 }}
                    >
                        <div style={styles.cardHeader}>
                            <Folder size={40} color="var(--accent-blue)" />
                            <div style={styles.links}>
                                <a href={project.github} style={styles.iconLink}><Github size={20} /></a>
                                <a href={project.link} style={styles.iconLink}><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 style={styles.cardTitle}>{project.title}</h3>
                        <p style={styles.cardDesc}>{project.description}</p>

                        <div style={styles.tags}>
                            {project.tags.map(tag => (
                                <span key={tag} style={styles.tag} className="mono">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '2rem',
        lineHeight: 1.1,
        color: 'var(--text-primary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
        padding: '2rem',
        border: '1px solid var(--border-color)',
        transition: 'border-color 0.3s',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    iconLink: {
        color: 'var(--text-secondary)',
        transition: 'color 0.2s',
        ':hover': { color: 'var(--accent-green)' } // Note: inline styles don't support pseudo-classes like this in React without a library like styled-components or emotion. We'd need to handle hover state manually or use CSS module/classes. For now, this is a static style.
    },
    cardTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginBottom: '0.8rem',
        color: 'var(--text-primary)',
    },
    cardDesc: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: 'auto',
        lineHeight: 1.5,
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        marginTop: '1.5rem',
    },
    tag: {
        fontSize: '0.8rem',
        color: 'var(--text-tertiary)',
    }
};

export default Projects;
