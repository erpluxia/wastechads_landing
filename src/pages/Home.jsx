import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <Testimonials />
            <WhyUs />
        </div>
    );
};

export default Home;
