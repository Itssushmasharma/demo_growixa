import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSuiteTabs from './components/ProductSuiteTabs';
import LeadFinderSandbox from './components/LeadFinderSandbox';
import EngineShowcase from './components/EngineShowcase';
import AISimulator from './components/AISimulator';
import GrowthCalculator from './components/GrowthCalculator';
import CompetitorComparison from './components/CompetitorComparison';
import RoadmapMatrix from './components/RoadmapMatrix';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
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
      {/* Announcement Bar at very top */}
      <AnnouncementBar openBookingModal={() => setIsBookingOpen(true)} />

      {/* Sticky Header Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main Page Layout Flow */}
      <main>
        <Hero openBookingModal={() => setIsBookingOpen(true)} />
        <ProductSuiteTabs openBookingModal={() => setIsBookingOpen(true)} />
        <LeadFinderSandbox />
        <CompetitorComparison openBookingModal={() => setIsBookingOpen(true)} />
        <EngineShowcase />
        <AISimulator />
        <GrowthCalculator openBookingModal={() => setIsBookingOpen(true)} />
        <RoadmapMatrix />
        <PricingSection openBookingModal={() => setIsBookingOpen(true)} />
        <Testimonials />
        <FAQAccordion />
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
