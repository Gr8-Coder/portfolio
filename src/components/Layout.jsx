import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CommentsDrawer from './CommentsDrawer';
import MenuDrawer from './MenuDrawer';

const Layout = ({ children }) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="layout">
            <Header
                onOpenComments={() => setIsCommentsOpen(true)}
                onOpenMenu={() => setIsMenuOpen(true)}
            />
            <main style={{ minHeight: '80vh', paddingTop: '2rem' }}>
                {children}
            </main>
            <CommentsDrawer isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
            <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <Footer />
        </div>
    );
};

export default Layout;
