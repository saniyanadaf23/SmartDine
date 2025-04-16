import React from 'react';
import HeroSection from '../components/HeroSection';  // Ensure correct path
import About from '../components/About';  // Ensure correct path
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <WhoAreWe />
            <Team />
            <Reservation />
            <Footer />
        </>
    );
}

export default Home;

