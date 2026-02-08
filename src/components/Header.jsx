import React from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { MessageSquare, Menu, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onOpenComments, onOpenMenu }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const getPageName = (path) => {
        switch (path) {
            case '/': return 'home';
            case '/projects': return 'work';
            case '/experience': return 'experience';
            case '/about': return 'about';
            case '/settings': return 'settings';
            default: return 'page';
        }
    };

    // ... code ...

    const pageName = getPageName(location.pathname);

    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <div className="logo" style={styles.logo}>
                    <Link to="/" style={styles.nameLink}>sajal tyagi</Link>
                    <span style={styles.separator}> / </span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={pageName}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            style={styles.pageName}
                        >
                            {pageName}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

                    <button onClick={onOpenComments} style={styles.iconBtn} aria-label="Comments">
                        <MessageSquare size={20} />
                    </button>

                    <button onClick={() => navigate('/settings')} style={styles.iconBtn} aria-label="Settings">
                        <Settings size={20} />
                    </button>

                    <button onClick={onOpenMenu} style={styles.iconBtn} aria-label="Menu">
                        <Menu size={20} />
                    </button>
                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        borderBottom: '1px solid var(--border-color)',
        padding: '1.5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
    },
    logo: {
        fontSize: '1rem',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-secondary)',
    },
    nameLink: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'color 0.2s',
        ':hover': {
            color: 'var(--text-primary)',
        }
    },
    separator: {
        color: 'var(--text-tertiary)',
        opacity: 0.5,
    },
    pageName: {
        color: 'var(--text-primary)',
    },
    iconBtn: {
        color: 'var(--text-secondary)',
        padding: '0.5rem',
        borderRadius: '4px',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid transparent',
        background: 'transparent',
        cursor: 'pointer',
        ':hover': {
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-tertiary)',
        }
    }
};

export default Header;
