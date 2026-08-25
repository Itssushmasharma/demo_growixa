import React, { useState } from 'react';
import { 
  Mail, 
  Zap, 
  Users, 
  Database, 
  Heart, 
  Share2, 
  MessageSquare, 
  Send, 
  Globe, 
  Phone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function BrevoCapabilities({ openBookingModal }) {
  const [activeCap, setActiveCap] = useState('campaigns');

  const capabilities = [
    {
      id: 'campaigns',
      title: 'Campaigns & Automation',
      icon: Mail,
      headline: 'Boost conversions with automated multichannel customer journeys',
      desc: 'Build versioned email marketing campaigns, multi-channel automated workflows, and A/B variant testing with Postmark high-deliverability Fernet encrypted pipelines.',
      features: [
        'Multi-channel email & SMS workflow triggers',
        'Drag-and-drop HTML template builder with iframe preview',
        'Dynamic audience segmentation and consent tracking',
        'Postmark delivery webhooks & click telemetry'
      ]
    },
    {
      id: 'transactional',
      title: 'Transactional Messaging',
      icon: Zap,
      headline: 'Send real-time email, SMS, & WhatsApp messages via SMTP relay and API',
      desc: 'Deliver password resets, order confirmations, and OTP security tokens in under 500ms with dedicated IP pools and 99.8% inbox placement.',
      features: [
        'Sub-second transactional email delivery',
        'Fernet encrypted SMTP relay & REST API endpoints',
        'Dedicated sender IP warm-up protection',
        'Instant open, click, bounce & spam alert webhooks'
      ]
    },
    {
      id: 'sales',
      title: 'Sales Management & CRM',
      icon: Users,
      headline: 'Accelerate revenue with custom pipelines, sales automation, & deal tracking',
      desc: 'Unify lead prospecting, executive contact enrichment, and B2B deal pipelines into a centralized CRM with automatic email deduplication.',
      features: [
        'Centralized lead contact CRM with deduplication',
        'Deal pipeline stages & sales automation tasks',
        'Direct phone dials & verified executive emails',
        'Multi-role 6-role RBAC permission control'
      ]
    },
    {
      id: 'cdp',
      title: 'Growixa Data Platform (CDP)',
      icon: Database,
      headline: 'Unify and activate customer data for smarter marketing & faster time-to-value',
      desc: 'Connect all customer touchpoints into a unified customer data platform with live-evaluated dynamic audience segments and GDPR suppression enforcement.',
      features: [
        'Unified customer journey activity timeline',
        'Dynamic rule-based audience segment builder',
        'GDPR/TCPA opt-out & suppression list engine',
        'CSV auto-column attribute mapping'
      ]
    },
    {
      id: 'loyalty',
      title: 'Customer Loyalty & AI Safety',
      icon: Heart,
      headline: 'Turn customers into loyal fans with integrated rewards & AI safety gates',
      desc: 'Enforce organization-wide AI Brand Voice rules and manager approval gates before AI-generated content goes live.',
      features: [
        'AI Brand Voice & Safety Engine compliance',
        'Forced human manager approval gates',
        'Token consumption telemetry & cost tracking',
        'Custom customer loyalty rewards integration'
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations (150+ Tools)',
      icon: Share2,
      headline: 'Connect Growixa with 150+ digital tools like Shopify, WordPress, Stripe, Zapier',
      desc: 'Seamlessly sync data across your entire tech stack with native integrations and developer-friendly REST APIs.',
      features: [
        'Shopify & WooCommerce e-commerce sync',
        'WordPress & GitHub metadata auto-PRs',
        'Stripe subscription billing & payment webhooks',
        'Zapier & Make.com automation webhooks'
      ]
    }
  ];

  const current = capabilities.find(c => c.id === activeCap);

  return (
    <section id="capabilities" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0B996E' }}>
            Growixa Platform Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Everything You Need to <span style={{ color: '#0B996E' }}>Grow Your Business</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Explore our all-in-one suite of marketing automation, transactional relay, CRM, and AI tools.
          </p>
        </div>

        {/* Capability Selection Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {capabilities.map((c) => {
            const Icon = c.icon;
            const isActive = activeCap === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCap(c.id)}
                style={{
                  background: isActive ? '#0B996E' : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  border: isActive ? '1px solid #0B996E' : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
                  boxShadow: isActive ? '0 8px 20px rgba(11, 153, 110, 0.25)' : 'none'
                }}
              >
                <Icon size={24} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{c.title.split(' & ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Details */}
        {current && (
          <div className="glass-card animate-fade-in" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                  Growixa Core Capability
                </span>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {current.headline}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {current.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {current.features.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                      <CheckCircle2 size={18} color="#0B996E" />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button onClick={openBookingModal} className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                  <span>Try {current.title} Free</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Graphic Card */}
              <div style={{
                background: 'var(--bg-hero)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 800, color: '#111827' }}>
                  <current.icon size={26} color="#0B996E" />
                  <span>{current.title}</span>
                </div>
                <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.4rem' }}>Status Indicator</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0B996E' }}>✔ 99.82% Postmark Deliverability</div>
                  <div style={{ fontSize: '0.85rem', color: '#4B5563', marginTop: '0.2rem' }}>Argon2id & RBAC Security Engine Verified</div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
