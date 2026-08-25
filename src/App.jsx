import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import GlowingHeroOrb from './components/GlowingHeroOrb';
import NeuronIntegrationMatrix from './components/NeuronIntegrationMatrix';
import ClarityEngineMatrix from './components/ClarityEngineMatrix';
import NeuralDataStream from './components/NeuralDataStream';
import CyberneticTreeAEO from './components/CyberneticTreeAEO';
import ToolkitFeatureGrid from './components/ToolkitFeatureGrid';
import LeadFinderSandbox from './components/LeadFinderSandbox';
import ProductSuiteTabs from './components/ProductSuiteTabs';
import CompetitorComparison from './components/CompetitorComparison';
import AISimulator from './components/AISimulator';
import GrowthCalculator from './components/GrowthCalculator';
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
      {/* Top Banner Notice */}
      <AnnouncementBar openBookingModal={() => setIsBookingOpen(true)} />

      {/* Sticky Header Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main Futuristic Cybernetic AI Page Flow */}
      <main>
        {/* Boltshift & BusinessDec Central AI Orb Hero */}
        <GlowingHeroOrb openBookingModal={() => setIsBookingOpen(true)} />

        {/* 6 Core Platform Engine Modules in "Clarity Engine / Idea to Direction" Image Format */}
        <ClarityEngineMatrix openBookingModal={() => setIsBookingOpen(true)} />

        {/* Neuron Tool Integration Matrix */}
        <NeuronIntegrationMatrix />

        {/* Neural AI Data Stream (Brand Signals) */}
        <NeuralDataStream />

        {/* Cybernetic Neural Tree (GEO & AEO) */}
        <CyberneticTreeAEO openBookingModal={() => setIsBookingOpen(true)} />

        {/* B2B Prospecting & Verification Tools */}
        <LeadFinderSandbox />
        <ToolkitFeatureGrid openBookingModal={() => setIsBookingOpen(true)} />
        <ProductSuiteTabs openBookingModal={() => setIsBookingOpen(true)} />
        <CompetitorComparison openBookingModal={() => setIsBookingOpen(true)} />
        <AISimulator />
        <GrowthCalculator openBookingModal={() => setIsBookingOpen(true)} />
        <RoadmapMatrix />
        <PricingSection openBookingModal={() => setIsBookingOpen(true)} />
        <Testimonials />
        <FAQAccordion />
      </main>

      {/* Footer */}
      <Footer openBookingModal={() => setIsBookingOpen(true)} />

      {/* Signup & Demo Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
