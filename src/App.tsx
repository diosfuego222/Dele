import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import HeroSection from './components/HeroSection';
import LoanInfo from './components/LoanInfo';
import Requirements from './components/Requirements';
import Process from './components/Process';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <PromoBanner />
        <Navbar />
        <HeroSection />
        <LoanInfo />
        <Requirements />
        <Process />
        <Chatbot />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;