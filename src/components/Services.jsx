import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="section-title">
                <h2>Nossos Serviços</h2>
                <p>Soluções completas para dominar o mercado digital e conquistar resultados extraordinários.</p>
            </div>

            <div className="services-grid">
                <div className="service-card" id="traffic">
                    <h3>Tráfego Pago</h3>
                    <p>Maximiza seu ROI com estratégias data-driven em Google Ads, Meta Ads e LinkedIn Ads.</p>
                    <ul>
                        <li>Gestão completa de campanhas</li>
                        <li>Otimização de conversão</li>
                        <li>Relatórios detalhados</li>
                    </ul>
                    <a href="#contact" className="service-link">Saiba mais →</a>
                </div>

                <div className="service-card" id="marketing">
                    <h3>Marketing Digital</h3>
                    <p>Estratégias integradas de marketing para construir autoridade e gerar demanda qualificada.</p>
                    <ul>
                        <li>Inbound / Outbound Marketing</li>
                        <li>Gestão de redes sociais</li>
                        <li>Criação de conteúdo</li>
                    </ul>
                    <a href="#contact" className="service-link">Saiba mais →</a>
                </div>

                <div className="service-card" id="dev">
                    <h3>Desenvolvimento</h3>
                    <p>Soluções de software personalizadas para automatizar processos e escalar seu negócio.</p>
                    <ul>
                        <li>Landing pages de alta conversão</li>
                        <li>Sistemas web personalizados</li>
                        <li>Integrações e automações</li>
                    </ul>
                    <a href="#contact" className="service-link">Saiba mais →</a>
                </div>
            </div>
        </section>
    );
};

export default Services;
