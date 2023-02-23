import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import HeroSection from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <MainContent/>
      <Footer />
    </div>
  );
}

export default App;
