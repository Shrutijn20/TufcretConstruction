import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <Services/>
            <HappyClient/>
            <Projects/>
            <Reviews/>
            <Contact/>
            <Footer/>
            {/* <ScrollTop/>   */}
        </main>
    );
};

export default Home;