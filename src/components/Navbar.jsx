import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Sun, 
  Moon, 
  Sparkles, 
  Sliders, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme, openBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'var(--bg-glass)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10B981 0%, #6366F1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
          }}>
            <Zap size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                GROWIXA
              </span>
              <span className="status-pill status-pill-done" style={{ padding: '0.15rem 0.5rem', fontSize: '0.65rem' }}>
                v2.4 Roadmap
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '-2px' }}>
              AI Growth & Automation Platform
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ 
          display: 'none', 
          alignItems: 'center', 
          gap: '2rem',
          '@media (min-width: 992px)': { display: 'flex' }
        }} className="desktop-nav">
          <a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
            Platform Engines
          </a>
          <a href="#ai-composer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
            AI Sandbox
          </a>
          <a href="#calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
            ROI Calculator
          </a>
          <a href="#roadmap" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
            Release Matrix
          </a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
            SaaS Pricing
          </a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Theme Switcher Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Primary CTA */}
          <button 
            onClick={openBookingModal}
            className="btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
          >
            <Sparkles size={16} />
            <span>Launch Platform</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#engines" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Platform Engines</a>
          <a href="#ai-composer" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>AI Sandbox</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>ROI Calculator</a>
          <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Release Matrix</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>SaaS Pricing</a>
        </div>
      )}
    </nav>
  );
}
