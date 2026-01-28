import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
