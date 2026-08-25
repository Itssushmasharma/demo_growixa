import React, { useState, useEffect } from 'react';
import GrowixaHeader from './components/GrowixaHeader';
import GrowixaHero from './components/GrowixaHero';
import GrowixaCapabilities from './components/GrowixaCapabilities';
import GrowixaPricing from './components/GrowixaPricing';
import LeadFinderSandbox from './components/LeadFinderSandbox';
import CompetitorComparison from './components/CompetitorComparison';
import AISimulator from './components/AISimulator';
import GrowthCalculator from './components/GrowthCalculator';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* Growixa Dropdown Navigation Header */}
      <GrowixaHeader 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main Page Flow */}
      <main>
        {/* Growixa Hero Section */}
        <GrowixaHero openBookingModal={() => setIsBookingOpen(true)} />

        {/* Growixa Core Capabilities Breakdown */}
        <GrowixaCapabilities openBookingModal={() => setIsBookingOpen(true)} />

        {/* B2B Prospecting & SMTP Lead Verification Sandbox */}
        <LeadFinderSandbox />

        {/* Competitor Comparison Matrix (Growixa vs Competitors) */}
        <CompetitorComparison openBookingModal={() => setIsBookingOpen(true)} />

        {/* AI Social & Email Content Simulator */}
        <AISimulator />

        {/* ROI Growth Estimator */}
        <GrowthCalculator openBookingModal={() => setIsBookingOpen(true)} />

        {/* Growixa Pricing Matrix */}
        <GrowixaPricing openBookingModal={() => setIsBookingOpen(true)} />

        {/* Verified Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer */}
      <Footer openBookingModal={() => setIsBookingOpen(true)} />

      {/* Booking & Registration Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
