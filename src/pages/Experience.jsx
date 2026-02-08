import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Analyst',
            company: 'QKS Group',
            period: 'June 2025 - Present',
            description: [
                'Conducting market research and data analysis.',
                'Contributing to strategic business insights.'
            ],
            tech: ['Market Research', 'Data Analysis', 'Strategy']
        },
        {
            id: 2,
            role: 'Student Coordinator',
            company: 'Clique - The IT & Analytics Club',
            period: 'Aug 2023 - Apr 2025',
            description: [
                'Coordinating club activities and tech events.',
                'Managing team logistics and member engagement.'
            ],
            tech: ['Leadership', 'Event Management', 'Coordination']
        },
        {
            id: 3,
            role: 'Campus Ambassador',
            company: 'E-Cell, IIT Bombay',
            period: 'July 2024 - Feb 2025',
            description: [
                'Representing E-Cell IIT Bombay on campus.',
                'Promoting entrepreneurship awareness and events.'
            ],
            tech: ['Public Relations', 'Marketing', 'Communication']
        },
        {
            id: 4,
            role: 'Finance Intern',
            company: 'GNFC Ltd.',
            period: 'Apr 2024 - June 2024',
            description: [
                'Assisted in financial analysis and reporting.',
                'Gained exposure to corporate finance operations.'
            ],
            tech: ['Finance', 'Analysis', 'Reporting']
        },
        {
            id: 5,
            role: "Founder's Office Intern",
            company: 'Nife Labs',
            period: 'Apr 2023 - June 2023',
            description: [
                'Partnered with companies to optimize sales funnel and lead qualification.',
                'Conducted client calls and contributed to product roadmap using technical background.',
                'Performed detailed competitive analysis and market research.'
            ],
            tech: ['Business Development', 'Sales Strategy', 'Competitive Analysis', 'AWS']
        },
        {
            id: 6,
            role: 'Full Stack Developer',
            company: 'ReveSoils Pvt Ltd',
            period: 'Apr 2023 - June 2023',
            description: [
                'Built a platform connecting students with local vendors.',
                'Frontend: React JS, Material UI, and Leaflet for maps.',
                'Backend: Django, PostgreSQL, and Djoser authentication.'
            ],
            tech: ['React', 'Django', 'PostgreSQL', 'Material UI', 'Leaflet']
        },
        {
            id: 7,
            role: 'Cloud/Security Team Member',
            company: 'GDSC, Nirma University',
            period: 'Sep 2022 - July 2023',
            description: [
                'Participated in cloud computing and cyber security workshops.',
                'Collaborated on technical projects and community events.'
            ],
            tech: ['Cloud Computing', 'Cyber Security']
        },
        {
            id: 8,
            role: 'Web Development Intern',
            company: 'MadOverBiking',
            period: 'July 2021 - Aug 2021',
            description: [
                'Developed web interfaces using modern CSS frameworks.',
                'Implemented responsive design principles.'
            ],
            tech: ['Web Development', 'Tailwind CSS']
        }
    ];

    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mono"
                style={styles.title}
            >
                Selected <span className="text-gradient">Experience</span>
            </motion.h1>

            <div style={styles.timeline}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        style={styles.item}
                    >
                        <div style={styles.line}></div>
                        <div style={styles.dot}></div>

                        <div style={styles.date} className="mono">{exp.period}</div>

                        <h3 style={styles.role}>{exp.role} <span style={{ color: 'var(--accent-green)' }}>@ {exp.company}</span></h3>

                        <ul style={styles.descList}>
                            {exp.description.map((item, i) => (
                                <li key={i} style={styles.descItem}>→ {item}</li>
                            ))}
                        </ul>

                        <div style={styles.techStack}>
                            {exp.tech.map(t => (
                                <span key={t} style={styles.techBadge} className="mono">{t}</span>
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
        marginBottom: '3rem',
        lineHeight: 1.1,
        color: 'var(--text-primary)',
    },
    timeline: {
        position: 'relative',
        paddingLeft: '2rem',
        borderLeft: '2px solid var(--border-color)',
    },
    item: {
        marginBottom: '3rem',
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        left: '-2.4rem',
        top: '0.4rem',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-primary)',
        border: '2px solid var(--accent-blue)',
    },
    date: {
        fontSize: '0.9rem',
        color: 'var(--text-tertiary)',
        marginBottom: '0.5rem',
    },
    role: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    descList: {
        marginBottom: '1rem',
        color: 'var(--text-secondary)',
    },
    descItem: {
        marginBottom: '0.5rem',
    },
    techStack: {
        display: 'flex',
        gap: '0.5rem',
    },
    techBadge: {
        fontSize: '0.8rem',
        color: 'var(--text-tertiary)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '0.2rem 0.5rem',
        borderRadius: '4px',
    }
};

export default Experience;
