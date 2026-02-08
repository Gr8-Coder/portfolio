import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const CommentsDrawer = ({ isOpen, onClose }) => {
    const [comment, setComment] = useState('');
    // Mock data for now
    const [comments, setComments] = useState([
        { id: 1, user: 'Dev Guru', text: 'Love the dark theme! Very clean.', date: '2h ago' },
        { id: 2, user: 'Designer X', text: 'The animations on the home page are smooth.', date: '5h ago' },
        { id: 3, user: 'Recruiter', text: 'Impressive portfolio. Let\'s connect!', date: '1d ago' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        const newComment = {
            id: Date.now(),
            user: 'Visitor', // Placeholder until auth
            text: comment,
            date: 'Just now'
        };

        setComments([newComment, ...comments]);
        setComment('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={styles.backdrop}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={styles.drawer}
                    >
                        <div style={styles.header}>
                            <h2 style={styles.title}>Global Comments</h2>
                            <button onClick={onClose} style={styles.closeBtn}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={styles.commentsList}>
                            {comments.map((c) => (
                                <div key={c.id} style={styles.commentItem}>
                                    <div style={styles.avatar}>
                                        <User size={16} />
                                    </div>
                                    <div style={styles.commentContent}>
                                        <div style={styles.commentMeta}>
                                            <span style={styles.username}>{c.user}</span>
                                            <span style={styles.date}>{c.date}</span>
                                        </div>
                                        <p style={styles.text}>{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} style={styles.inputArea}>
                            <div style={styles.inputWrapper}>
                                <input
                                    type="text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Leave a comment..."
                                    style={styles.input}
                                />
                                <button type="submit" style={styles.sendBtn} disabled={!comment.trim()}>
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 998,
    },
    drawer: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        backgroundColor: 'var(--bg-secondary)',
        boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.3)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid var(--border-color)',
    },
    header: {
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color)',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    closeBtn: {
        color: 'var(--text-secondary)',
        transition: 'color 0.2s',
        ':hover': { color: 'var(--text-primary)' },
    },
    commentsList: {
        flex: 1,
        overflowY: 'auto',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    commentItem: {
        display: 'flex',
        gap: '1rem',
    },
    avatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-tertiary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        flexShrink: 0,
    },
    commentContent: {
        flex: 1,
    },
    commentMeta: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.3rem',
        fontSize: '0.85rem',
    },
    username: {
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    date: {
        color: 'var(--text-tertiary)',
    },
    text: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: '1.5',
    },
    inputArea: {
        padding: '1.5rem',
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
    },
    inputWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: '0.8rem 3rem 0.8rem 1rem',
        borderRadius: '2rem',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    sendBtn: {
        position: 'absolute',
        right: '0.5rem',
        padding: '0.5rem',
        color: 'var(--accent-green)',
        opacity: 0.8,
        transition: 'opacity 0.2s',
        ':disabled': { opacity: 0.3, cursor: 'not-allowed' },
    }
};

export default CommentsDrawer;
