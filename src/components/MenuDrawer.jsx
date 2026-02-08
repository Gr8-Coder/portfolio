import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Copy, Mail, ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MenuDrawer = ({ isOpen, onClose }) => {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: `${import.meta.env.BASE_URL}resume.pdf`, isExternal: true },
    ];

    const categories = ['All', 'TLDR', 'Recognition', 'Contribution'];
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('sajaltyagi@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={styles.backdrop}
                    />

                    <div style={styles.islandContainer}>
                        {/* Top Row: Search & Close */}
                        <div style={styles.topRow}>
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={styles.searchIsland}
                            >
                                <Search size={18} color="var(--text-tertiary)" />
                                <input type="text" placeholder="Search..." style={styles.searchInput} disabled />
                            </motion.div>

                            <motion.button
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 }}
                                onClick={onClose}
                                style={styles.closeIsland}
                            >
                                Close
                            </motion.button>
                        </div>

                        {/* Middle: Main Menu */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            style={styles.menuIsland}
                            className="island-scroll"
                        >
                            <div style={styles.categories}>
                                {categories.map(cat => (
                                    <span key={cat} style={cat === 'All' ? styles.activeBadge : styles.badge}>
                                        {cat}
                                    </span>
                                ))}
                            </div>

                            <nav style={styles.nav}>
                                <div style={styles.sectionTitle}>TLDR</div>
                                {menuItems.map((item) => (
                                    item.isExternal ? (
                                        <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" style={styles.item}>
                                            {item.name} <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                                        </a>
                                    ) : (
                                        <NavLink
                                            key={item.name}
                                            to={item.path}
                                            onClick={onClose}
                                            style={({ isActive }) => isActive ? { ...styles.item, color: 'var(--text-primary)' } : styles.item}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )
                                ))}
                            </nav>

                            <div style={{ marginTop: '1.5rem', ...styles.sectionTitle }}>Recognition</div>
                            <div style={styles.item}>Awards</div>
                            <div style={styles.item}>Testimonials</div>
                        </motion.div>

                        {/* Bottom Row: Actions */}
                        <div style={styles.bottomRow}>
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.15 }}
                                style={styles.actionIsland}
                            >
                                <Mail size={18} /> sajaltyagi@gmail.com
                            </motion.button>

                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                onClick={handleCopy}
                                style={styles.actionIsland}
                            >
                                <Copy size={18} /> {emailCopied ? 'Copied!' : 'Copy email'}
                            </motion.button>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
    },
    islandContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        width: '400px',
        maxWidth: '90vw',
        maxHeight: '90vh',
    },
    topRow: {
        display: 'flex',
        gap: '0.8rem',
    },
    searchIsland: {
        flex: 1,
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 1.2rem',
        gap: '0.8rem',
        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)',
        border: '1px solid var(--border-color)',
    },
    searchInput: {
        background: 'transparent',
        border: 'none',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        flex: 1,
        outline: 'none',
    },
    closeIsland: {
        padding: '0 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '30px',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        border: '1px solid var(--border-color)',
        cursor: 'pointer',
        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)',
        transition: 'transform 0.1s',
        ':active': { transform: 'scale(0.95)' }
    },
    menuIsland: {
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '24px',
        padding: '1.5rem',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
        border: '1px solid var(--border-color)',
        overflowY: 'auto',
        flex: 1,
        minHeight: '200px',
    },
    bottomRow: {
        display: 'flex',
        gap: '0.8rem',
    },
    actionIsland: {
        flex: 1,
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '30px',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        border: '1px solid var(--border-color)',
        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        ':hover': { backgroundColor: 'var(--bg-tertiary)' }
    },
    categories: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
    },
    badge: {
        padding: '0.4rem 1rem',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        cursor: 'pointer',
    },
    activeBadge: {
        padding: '0.4rem 1rem',
        borderRadius: '20px',
        backgroundColor: 'var(--bg-tertiary)',
        color: 'var(--text-primary)',
        fontSize: '0.8rem',
        border: '1px solid transparent',
    },
    sectionTitle: {
        fontSize: '0.75rem',
        color: 'var(--text-tertiary)',
        marginBottom: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 0.5rem',
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        transition: 'all 0.2s',
        cursor: 'pointer',
        borderRadius: '8px',
        ':hover': {
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-tertiary)',
            paddingLeft: '1rem',
        }
    },
};

export default MenuDrawer;
