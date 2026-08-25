import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function PricingSection({ openBookingModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'Starter Growth',
      badge: 'Single-Tenant MVP',
      priceMonthly: 49,
      priceAnnual: 39,
      description: 'Ideal for early-stage startups needing high-deliverability email marketing and core CRM contact segmenting.',
      features: [
        'Postmark & Custom SMTP Connection (Fernet)',
        'Centralized CRM with Email Deduplication',
        'CSV Import & Attribute Column Mapping',
        'Rule-Based Dynamic Audience Segments',
        'GDPR & TCPA Consent Suppression Lists',
        'Email Campaign Scheduler & Basic Analytics',
        'Single User Login & Brand Voice Profile'
      ],
      ctaText: 'Start Free 14-Day Trial',
      highlighted: false
    },
    {
      name: 'Pro Automation',
      badge: 'Most Popular',
      priceMonthly: 129,
      priceAnnual: 99,
      description: 'Designed for scaling SaaS and growth teams combining email, social media, SMS, and AI brand content.',
      features: [
        'Everything in Starter Growth, plus:',
        'LinkedIn & Twitter/X OAuth 2.0 Automation',
        'Unified Drag & Drop Social/Email Calendar',
        'AI Content Assistant (Copy, Subjects, Captions)',
        'Mandatory AI Brand Voice & Safety Approvals',
        'Bulk SMS Marketing (Twilio GSM-7 Calculator)',
        'Token Cost Telemetry & Provider Billing',
        'Multi-Role RBAC Management (6 Roles)'
      ],
      ctaText: 'Launch Pro Platform',
      highlighted: true
    },
    {
      name: 'Enterprise SaaS',
      badge: 'Sprint 5 Complete',
      priceMonthly: 299,
      priceAnnual: 239,
      description: 'For high-growth platforms requiring multi-tenant account isolation, WhatsApp, and GEO/AEO autonomous agents.',
      features: [
        'Everything in Pro Automation, plus:',
        'Strict Account ID DB Multi-Tenant Isolation',
        'WhatsApp Marketing (Meta Cloud API)',
        'Answer Engine Optimization (AEO Execution)',
        'Generative Engine Optimization (GEO Agents)',
        'Admin Infrastructure Ops Health Panel',
        'Insert-Only Security Audit Event Logs',
        'Dedicated Solutions Architect & SLA Support'
      ],
      ctaText: 'Contact Sales / Custom',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            Sprint 5 SaaS Subscription Tiers
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Transparent <span className="gradient-text">Growth Investment</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Scale effortlessly from single-tenant MVP to full multi-tenant SaaS. Switch billing cycles anytime.
          </p>

          {/* Billing Cycle Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'var(--bg-card)',
            padding: '0.4rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            marginTop: '1.5rem'
          }}>
            <button
              onClick={() => setAnnualBilling(false)}
              style={{
                background: !annualBilling ? 'var(--accent-indigo)' : 'transparent',
                color: !annualBilling ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              style={{
                background: annualBilling ? 'var(--accent-emerald)' : 'transparent',
                color: annualBilling ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Annual Billing</span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.2)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {plans.map((plan, idx) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: plan.highlighted ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                  boxShadow: plan.highlighted ? '0 15px 40px rgba(16, 185, 129, 0.15)' : 'none',
                  background: plan.highlighted ? 'rgba(15, 23, 42, 0.85)' : 'var(--bg-card)'
                }}
              >
                {/* Badge if featured */}
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.25rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 4px 10px rgba(16, 185, 129, 0.4)'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{plan.name}</h3>
                    {!plan.highlighted && (
                      <span className="status-pill status-pill-done" style={{ fontSize: '0.7rem' }}>
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '50px' }}>
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        ${price}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>/month</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {annualBilling ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly'}
                    </span>
                  </div>

                  {/* Features list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                        <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: fIdx === 0 && plan.name !== 'Starter Growth' ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: fIdx === 0 && plan.name !== 'Starter Growth' ? 600 : 400 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className={plan.highlighted ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1.5rem' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
