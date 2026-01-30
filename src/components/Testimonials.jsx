import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials" id="cases">
            <div className="section-title">
                <h2>Provas Reais</h2>
                <p>Resultado comprovado no ramo <span className="highlight">educacional</span>, <span className="highlight">imobiliário</span> e <span className="highlight">prestação de serviços</span>.</p>
            </div>

            <div className="testimonials-grid">
                <div className="testimonial-card single-card">
                    <div className="testimonial-content">
                        <p className="testimonial-text">
                            Em apenas três meses, faturamento superior a 1 milhão em vendas de imóveis.
                        </p>
                    </div>
                    <div className="client-info">
                        <div className="client-avatar-img">
                            <img src="/mk mais-logo.webp" alt="MK Mais Imóveis Logo" />
                        </div>
                        <div className="client-details">
                            <h4>MK Mais Imóveis</h4>
                            <span>Setor Imobiliário</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
