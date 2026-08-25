import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Cpu,
  Code2
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
          marginBottom: '3rem'
        }}>
          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 2', maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#0B996E',
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
              The enterprise autonomous AI marketing platform. Built & Maintained by <strong>IITDEVELOPER</strong>. Engineered for high-deliverability email pipelines, dynamic CRM segmentation, and Answer Engine Optimization (AEO/GEO).
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }}>
                <Twitter size={18} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }}>
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Itssushmasharma/demo_growixa.git" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }}>
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
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Argon2id Auth & RBAC Security</a></li>
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact & Audience CRM Engine</a></li>
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Postmark High-Deliverability SMTP</a></li>
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Social Media & AI Content Assistant</a></li>
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Twilio SMS & Meta WhatsApp API</a></li>
              <li><a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GEO & AEO Search Optimization</a></li>
            </ul>
          </div>

          {/* Quick Links 2: Architecture Specifications */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Specification & IITDEVELOPER
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sprint 5 SaaS Multi-Tenant Billing</a></li>
              <li><a href="#ai-composer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AI Brand Voice Safety Engine</a></li>
              <li><a href="#calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>ROI Impact Growth Estimator</a></li>
              <li><a href="#prospecting" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GrowthToolkit B2B Lead Sandbox</a></li>
              <li><a href="#" onClick={openBookingModal} style={{ color: '#0B996E', textDecoration: 'none', fontWeight: 700 }}>Self-Service Platform Signup</a></li>
            </ul>
          </div>
        </div>

        {/* Clean Copyright Footer Bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            <span>© 2026 Growixa AI Platform Inc. All rights reserved. Powered by <strong>IITDEVELOPER</strong>.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
