import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Coins
} from 'lucide-react';

export default function PricingSection({ openBookingModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'Starter',
      badge: '500 Credits/mo',
      priceMonthly: 49,
      priceAnnual: 39,
      creditCost: '$0.08 / credit',
      description: 'Ideal for early-stage sales reps, SDRs, and founders getting started with targeted lead outreach.',
      features: [
        '500 Verified Email & Phone Credits per month',
        'Deep Search B2B Prospecting Database',
        'LinkedIn & Sales Navigator Chrome Extension',
        'Real-Time Triple SMTP Email Verifier',
        'Catch-All Server Validation Algorithm',
        'Postmark & Custom SMTP Email Campaigns',
        'Under 2.5% Bounce Rate Guarantee'
      ],
      ctaText: 'Start Free Trial (500 Credits)',
      highlighted: false
    },
    {
      name: 'Growth',
      badge: 'Most Popular - 2,500 Credits/mo',
      priceMonthly: 129,
      priceAnnual: 99,
      creditCost: '$0.04 / credit',
      description: 'Designed for scaling sales teams and growth agencies conducting high-volume prospecting campaigns.',
      features: [
        'Everything in Starter, plus:',
        '2,500 Verified Email & Phone Credits per month',
        'Unused Credits Rollover Indefinitely',
        'Direct Executive Mobile Phone Numbers',
        'Bulk CSV Domain & Contact Enrichment',
        'Dynamic CRM Rule Audience Segments',
        'AI Content Assistant & Brand Safety Engine',
        'Multi-Role Team Management (6 RBAC Roles)'
      ],
      ctaText: 'Get Growth Toolkit',
      highlighted: true
    },
    {
      name: 'Pro',
      badge: '10,000 Credits/mo',
      priceMonthly: 299,
      priceAnnual: 239,
      creditCost: '$0.024 / credit',
      description: 'For high-growth revenue organizations requiring enterprise B2B data volume and dedicated support.',
      features: [
        'Everything in Growth, plus:',
        '10,000 Verified Email & Phone Credits per month',
        'Strict Account ID DB Multi-Tenant Isolation',
        'Generative Engine Optimization (GEO/AEO Agents)',
        'WhatsApp Meta Cloud API Marketing',
        'Dedicated Dedicated IP Warm-Up Support',
        'RESTful API Access & Webhook Streaming',
        'Dedicated Account Manager & SLA Guarantee'
      ],
      ctaText: 'Contact Sales / Custom Volume',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            GrowthToolkit.io Pricing & Credit Wallet
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Pay Only for <span className="gradient-text">Triple Verified Leads</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Zero credits charged on invalid emails or bounces. Unused credits roll over infinitely with no expiration.
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
                  boxShadow: plan.highlighted ? '0 15px 40px rgba(16, 185, 129, 0.18)' : 'none',
                  background: plan.highlighted ? 'rgba(15, 23, 42, 0.88)' : 'var(--bg-card)'
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
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        ${price}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>/month</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '0.2rem' }}>
                      ⚡ Effective Cost: {plan.creditCost}
                    </div>
                  </div>

                  {/* Features list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                        <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: fIdx === 0 && plan.name !== 'Starter' ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: fIdx === 0 && plan.name !== 'Starter' ? 600 : 400 }}>
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
