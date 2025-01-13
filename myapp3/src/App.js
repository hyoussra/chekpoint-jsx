import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default App;


