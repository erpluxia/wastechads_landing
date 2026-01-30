import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const glowRef = useRef(null);
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);

    const words = ["Tráfego Pago", "Marketing Digital", "Desenvolvimento"];

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Normalize coordinates (-1 to 1)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const normX = (x - centerX) / centerX;
            const normY = (y - centerY) / centerY;

            // Move glow with slight lag
            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    x: x,
                    y: y,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }

            // 3D Tilt for content
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    rotateY: normX * 10,  // max 10 degrees
                    rotateX: -normY * 10,
                    x: normX * 20,
                    y: normY * 20,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }

            // Parallax for bg pattern
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    x: -normX * 30,
                    y: -normY * 30,
                    duration: 1.2,
                    ease: "power1.out"
                });
            }
        };

        const handleMouseLeave = () => {
            // Reset transforms
            gsap.to([contentRef.current, bgRef.current], {
                rotateX: 0,
                rotateY: 0,
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            });
        };

        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
            heroElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
                heroElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 60 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-bg-accent" ref={bgRef}></div>
            <div className="hero-glow" ref={glowRef}></div>
            <div className="hero-content" ref={contentRef}>
                <h1>
                    Transforme <span className="highlight">{text}</span><span className="cursor"></span> em <span className="highlight">Resultados</span>
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
