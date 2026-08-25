import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineShowcase from './components/EngineShowcase';
import AISimulator from './components/AISimulator';
import RoadmapMatrix from './components/RoadmapMatrix';
import GrowthCalculator from './components/GrowthCalculator';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* Sticky Header Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero openBookingModal={() => setIsBookingOpen(true)} />
        <EngineShowcase />
        <AISimulator />
        <GrowthCalculator openBookingModal={() => setIsBookingOpen(true)} />
        <RoadmapMatrix />
        <PricingSection openBookingModal={() => setIsBookingOpen(true)} />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer openBookingModal={() => setIsBookingOpen(true)} />

      {/* Booking & Self-Service Registration Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
