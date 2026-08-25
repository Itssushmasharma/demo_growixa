import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Cpu
} from 'lucide-react';

export default function Footer({ openBookingModal }) {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 2', maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10B981, #6366F1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Zap size={22} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                GROWIXA
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The enterprise autonomous AI marketing platform. Engineered for high-deliverability email pipelines, dynamic CRM segmentation, and Answer Engine Optimization (AEO/GEO).
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Twitter size={18} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Linkedin size={18} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links 1: Platform Engines */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform Engines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Argon2id Auth & RBAC</a></li>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact & CRM Engine</a></li>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Postmark Email Pipeline</a></li>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Social Media & AI Assistant</a></li>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Twilio SMS & WhatsApp</a></li>
              <li><a href="#engines" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GEO & AEO Specialists</a></li>
            </ul>
          </div>

          {/* Quick Links 2: Architecture Specifications */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Specification & SaaS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#roadmap" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Version 2.4 Roadmap</a></li>
              <li><a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sprint 5 SaaS Billing</a></li>
              <li><a href="#ai-composer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AI Brand Voice Engine</a></li>
              <li><a href="#calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>ROI Impact Estimator</a></li>
              <li><a href="#" onClick={openBookingModal} style={{ color: 'var(--accent-emerald)', textDecoration: 'none', fontWeight: 600 }}>Self-Service Signup</a></li>
            </ul>
          </div>
        </div>

        {/* Infrastructure Telemetry Footer Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            <span>© 2026 Growixa AI Platform Inc. Document ID: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>DOC-PROD-CATALOG-PDF</code></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#34D399' }}>
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} /> Postgres: OK
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#34D399' }}>
              Redis: OK
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#34D399' }}>
              RabbitMQ: OK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
