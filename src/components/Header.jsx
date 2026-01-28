import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="#">
                    <img src="/wastech-logo.webp" alt="WASTECH ADS Logo" className="logo-img" />
                </a>
            </div>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isMobileMenuOpen ? '✕' : '☰'}
            </div>
            <nav>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#services">Serviços</a></li>

                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
