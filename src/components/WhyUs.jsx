import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section className="why-us">
            <div className="section-title">
                <h2>Por Que Escolher a WAS TECH ADS?</h2>
                <p>Nossa metodologia comprovada garante resultados mensuráveis e crescimento sustentável.</p>
            </div>

            <div className="features-grid">
                <div className="feature-item">
                    <h3>
                        Foco em Resultados
                    </h3>
                    <p>Não entregamos apenas métricas de vaidade. Trabalhamos orientados para gerar receita real para seu negócio.</p>
                </div>

                <div className="feature-item">
                    <h3>
                        Transparência Total
                    </h3>
                    <p>Relatórios claros e acesso direto às contas de anúncio. Você vê exatamente onde seu dinheiro está sendo investido.</p>
                </div>

                <div className="feature-item">
                    <h3>
                        Agilidade e Inovação
                    </h3>
                    <p>Equipe multidisciplinar que combina criatividade e tecnologia para entregar soluções rápidas e eficientes.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
