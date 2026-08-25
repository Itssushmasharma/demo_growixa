import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  MessageSquare, 
  Send, 
  Globe, 
  Users, 
  Database, 
  Zap, 
  ShieldCheck, 
  ShoppingBag, 
  Code, 
  BookOpen, 
  HelpCircle, 
  Phone, 
  Bot, 
  Menu, 
  X
} from 'lucide-react';

export default function GrowixaHeader({ theme, toggleTheme, openBookingModal }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'var(--bg-glass)' 
          : 'var(--bg-hero)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'all 0.25s ease',
        padding: '0.85rem 0'
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: '#0B996E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <Zap size={22} />
          </div>
          <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B996E', letterSpacing: '-0.03em' }}>
            Growixa
          </span>
        </a>

        {/* Desktop Navigation Items */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative' }}>
          
          {/* Menu Item 1: Platform Dropdown */}
          <div 
            onMouseEnter={() => setActiveDropdown('platform')}
            style={{ position: 'relative', padding: '0.5rem 0', cursor: 'pointer' }}
          >
            <button 
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'platform' ? '#0B996E' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer'
              }}
            >
              <span>Platform</span>
              <ChevronDown size={16} style={{ transform: activeDropdown === 'platform' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {/* Dropdown Panel: Capabilities & Channels */}
            {activeDropdown === 'platform' && (
              <div className="mega-menu-panel animate-fade-in" style={{ minWidth: '760px', left: '100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                  
                  {/* Capabilities Column */}
                  <div>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                      Capabilities
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                      <a href="#capabilities" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                        <Mail size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Campaigns & automation</div>
                          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Boost conversions with automated multichannel customer journeys.</div>
                        </div>
                      </a>
                      <a href="#capabilities" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                        <Zap size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Transactional messaging</div>
                          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Send real-time email, SMS, & WhatsApp messages via Postmark SMTP.</div>
                        </div>
                      </a>
                      <a href="#capabilities" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                        <Users size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Sales management & CRM</div>
                          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Accelerate revenue with custom pipelines and lead enrichment.</div>
                        </div>
                      </a>
                      <a href="#capabilities" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                        <Database size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Growixa Data Platform (CDP)</div>
                          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Unify and activate customer data for dynamic rule segmentation.</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Channels Column */}
                  <div style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                      Channels
                    </h5>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><Mail size={16} color="#0B996E" /> Email</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><MessageSquare size={16} color="#0B996E" /> SMS</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><Send size={16} color="#0B996E" /> WhatsApp</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><Globe size={16} color="#0B996E" /> Web Push</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><Bot size={16} color="#0B996E" /> Live Chat</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}><Phone size={16} color="#0B996E" /> Phone Dials</div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Menu Item 2: Solutions Dropdown */}
          <div 
            onMouseEnter={() => setActiveDropdown('solutions')}
            style={{ position: 'relative', padding: '0.5rem 0', cursor: 'pointer' }}
          >
            <button 
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'solutions' ? '#0B996E' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer'
              }}
            >
              <span>Solutions</span>
              <ChevronDown size={16} style={{ transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {/* Dropdown Panel */}
            {activeDropdown === 'solutions' && (
              <div className="mega-menu-panel animate-fade-in" style={{ minWidth: '420px', left: '50%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <a href="#solutions" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                    <ShoppingBag size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Entrepreneurs & small business</div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Run campaigns and manage contacts easily.</div>
                    </div>
                  </a>
                  <a href="#solutions" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                    <ShieldCheck size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Mid-market & enterprise</div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Custom solutions, dedicated onboarding, and enterprise security.</div>
                    </div>
                  </a>
                  <a href="#solutions" style={{ display: 'flex', gap: '0.75rem', textDecoration: 'none' }}>
                    <Code size={20} color="#0B996E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Developers</div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Build, extend, and integrate with open API and SDKs.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Menu Item 3: Pricing Link */}
          <a href="#pricing" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
            Pricing
          </a>

          {/* Menu Item 4: Resources Dropdown */}
          <div 
            onMouseEnter={() => setActiveDropdown('resources')}
            style={{ position: 'relative', padding: '0.5rem 0', cursor: 'pointer' }}
          >
            <button 
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'resources' ? '#0B996E' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer'
              }}
            >
              <span>Resources</span>
              <ChevronDown size={16} style={{ transform: activeDropdown === 'resources' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {/* Dropdown Panel */}
            {activeDropdown === 'resources' && (
              <div className="mega-menu-panel animate-fade-in" style={{ minWidth: '650px', left: '-50px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Resource center</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Blog</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Case studies</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Email templates</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Tools & Calculators</a>
                    </div>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Ecosystem</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Integrations</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Product updates</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Partner programs</a>
                    </div>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Support</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Help center</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Contact us</a>
                      <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>API docs</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Desktop Actions */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Log in
          </a>

          <button 
            onClick={openBookingModal}
            className="btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            <span>Sign Up Free</span>
          </button>

          <button 
            onClick={openBookingModal}
            className="btn-secondary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            <span>Get a demo</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="mobile-only">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} color="#0B996E" /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Overlay Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="animate-fade-in"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-primary)',
            zIndex: 999,
            padding: '2rem 1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
            <a 
              href="#capabilities" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Platform Capabilities
            </a>
            <a 
              href="#prospecting" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              B2B Lead Finder
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Pricing Plans
            </a>
            <a 
              href="#ai-composer" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              AI Content Assistant
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              ROI Calculator
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            >
              <span>Sign Up Free</span>
            </button>

            <button 
              onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            >
              <span>Get a demo</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
