import React from 'react';
import Navbar from './Component/Navbar/navbar.js';
import Header from './Component/Header/header.js';
import HowItWorks from './Component/HowDoesItWork/howDoesitWork'
import AboutUs from './Component/AboutUs/aboutUs.js';
import Services from './Component/Services/services.js';
import Contact from './Component/ContactUs/contact.js';
import Footer from './Component/Footer/footer.js';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <AboutUs/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;
