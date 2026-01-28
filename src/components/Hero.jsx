import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Transforme <span className="highlight">Tráfego</span> em <span className="highlight">Resultados</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
                    Estratégias digitais que convertem visitantes em clientes fiéis.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Fale com um Especialista</a>
                    <a href="#services" className="btn btn-secondary">Conheça nossos serviços</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
