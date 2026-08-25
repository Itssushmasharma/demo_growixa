import React, { useState, useEffect } from 'react';
import BrevoHeader from './components/BrevoHeader';
import BrevoHero from './components/BrevoHero';
import BrevoCapabilities from './components/BrevoCapabilities';
import BrevoPricing from './components/BrevoPricing';
import LeadFinderSandbox from './components/LeadFinderSandbox';
import CompetitorComparison from './components/CompetitorComparison';
import AISimulator from './components/AISimulator';
import GrowthCalculator from './components/GrowthCalculator';
import RoadmapMatrix from './components/RoadmapMatrix';
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
      {/* Brevo Dropdown Navigation Header */}
      <BrevoHeader 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main Brevo.com Exact Page Flow */}
      <main>
        {/* Brevo Sage Green Hero (Photo 1 Match) */}
        <BrevoHero openBookingModal={() => setIsBookingOpen(true)} />

        {/* Brevo Core Capabilities Breakdown (Photo 2 Match) */}
        <BrevoCapabilities openBookingModal={() => setIsBookingOpen(true)} />

        {/* B2B Prospecting & SMTP Lead Verification Sandbox */}
        <LeadFinderSandbox />

        {/* Competitor Comparison Matrix (Growixa vs Brevo vs Mailchimp vs Apollo) */}
        <CompetitorComparison openBookingModal={() => setIsBookingOpen(true)} />

        {/* AI Social & Email Content Simulator */}
        <AISimulator />

        {/* ROI Growth Estimator */}
        <GrowthCalculator openBookingModal={() => setIsBookingOpen(true)} />

        {/* Roadmap Matrix */}
        <RoadmapMatrix />

        {/* Brevo Exact Pricing Matrix (Photo 5 Match) */}
        <BrevoPricing openBookingModal={() => setIsBookingOpen(true)} />

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
